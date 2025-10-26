"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { z } from "zod";

import { ResetPasswordSchema } from "~/schemas";
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
import { useRouter, useSearchParams } from "next/navigation";
import { authClient } from "~/lib/auth-client";
import FormError from "./FormError";
import FormSuccess from "./FormSuccess";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { toast } from "sonner";

function PasswordResetForm() {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [pending, setPending] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const searchParams = useSearchParams();
  const token = searchParams.get("token")!;

  const router = useRouter();

  const form = useForm<z.infer<typeof ResetPasswordSchema>>({
    resolver: zodResolver(ResetPasswordSchema),
    defaultValues: {
      newPassword: "",
      confirmNewPassword: "",
    },
  });

  function onSubmit(values: z.infer<typeof ResetPasswordSchema>) {
    setSuccess("");
    setError("");
    setPending(true);

    void authClient.resetPassword(
      {
        newPassword: values.newPassword,
        token,
      },
      {
        onSuccess: () => {
          setPending(false);
          toast.success(`Password reset successful!`);
          router.push("/auth/sign-in?reset=success");
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
          name="newPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="mb-0.5 text-neutral-400">
                New password
              </FormLabel>
              <div className="relative">
                <FormControl>
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="******"
                    disabled={pending}
                    {...field}
                  />
                </FormControl>
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-1/2 right-2 -translate-y-1/2 p-1"
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
              <FormMessage className="text-start" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmNewPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="mb-0.5 text-neutral-400">
                Confirm new password
              </FormLabel>
              <div className="relative">
                <FormControl>
                  <Input
                    type={showConfirmPassword ? "text" : "password"} // <-- cambio aquí
                    placeholder="******"
                    disabled={pending}
                    {...field}
                  />
                </FormControl>
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute top-1/2 right-2 -translate-y-1/2 p-1"
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
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
            "Change password"
          )}
        </Button>
        <FormError message={error} />
        <FormSuccess message={success} />
      </form>
    </Form>
  );
}
export default PasswordResetForm;
