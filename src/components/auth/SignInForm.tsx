"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { SignInSchema } from "~/schemas";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button, buttonVariants } from "../ui/button";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import FormError from "./FormError";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";
import FormSuccess from "./FormSuccess";
import { authClient } from "~/lib/auth-client";
import { cn } from "~/lib/utils";
import { siteConfig } from "~/config/site-config";

function SignInForm() {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [pending, setPending] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get("reset") === "success") {
      setSuccess("Your password has been updated, please sign in");

      // Quitar el query param después de mostrar el mensaje
      const params = new URLSearchParams(searchParams.toString());
      params.delete("reset");
      router.replace(`/auth/sign-in?${params.toString()}`, { scroll: false });
    }
  }, [searchParams, router]);

  const form = useForm<z.infer<typeof SignInSchema>>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof SignInSchema>) {
    setError("");
    setPending(true);

    try {
      await authClient.signIn.email(
        {
          email: values.email,
          password: values.password,
        },
        {
          onSuccess: () => {
            setPending(false);
            toast.success("Login successful!");
            router.push(siteConfig.panelPath);
          },
          onError: (error) => {
            setPending(false);
            setError(error.error.message);
          },
        },
      );
    } catch (err) {
      setPending(false);
      setError("Unexpected error. Please try again.");
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="mb-2 space-y-4">
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
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="mb-0.5 text-neutral-400">
                Password
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
            "Login"
          )}
        </Button>
        <FormSuccess message={success} />
        <FormError message={error} />
      </form>
      <div className="text-end">
        <Link
          href="/auth/forgot-password"
          className={cn(
            buttonVariants({ variant: "link", size: "sm" }),
            "text-accent-foreground p-0",
          )}
        >
          Forgot password?
        </Link>
      </div>
    </Form>
  );
}
export default SignInForm;
