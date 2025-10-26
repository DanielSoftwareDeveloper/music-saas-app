"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { z } from "zod";

import { ForgotPasswordSchema } from "~/schemas";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

import { useState } from "react";
import FormError from "./FormError";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { authClient } from "~/lib/auth-client";

function PasswordForgotForm() {
  const [error, setError] = useState<string | undefined>("");
  const [pending, setPending] = useState(false);

  const router = useRouter();

  const form = useForm<z.infer<typeof ForgotPasswordSchema>>({
    resolver: zodResolver(ForgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof ForgotPasswordSchema>) {
    setError("");
    setPending(true);

    void authClient.requestPasswordReset(
      {
        email: values.email,
        redirectTo: "/auth/reset-password",
      },
      {
        onSuccess: () => {
          setPending(false);
          toast.success(`Reset link sent!`);
          router.push("/auth/reset-link-sent");
        },
        onError: (error) => {
          setPending(false);
          setError(error.error.message);
        },
      },
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="mb-0.5 text-neutral-400">Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="johndoe@example.com"
                  disabled={pending}
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-start" />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          size="lg"
          className="mt-2 w-full cursor-pointer"
          disabled={pending}
        >
          {pending ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
            </>
          ) : (
            "Send reset link"
          )}
        </Button>
        <FormError message={error} />
      </form>
    </Form>
  );
}
export default PasswordForgotForm;
