"use client";

import Link from "next/link";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import GoogleLoginButton from "./google-login";
import { useForm } from "@tanstack/react-form";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import * as Z from "zod";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";

const formSchema = Z.object({
  password: Z.string().min(8, "Minimum length is 8"),
  email: Z.email(),
});

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },

    validators: {
      onSubmit: formSchema,
    },

    onSubmit: async ({ value }) => {
      try {
        setLoading(true);

        // 👉 Replace with real API
        await new Promise((res) => setTimeout(res, 1500));
        const { data, error } = await authClient.signIn.email({
          email: value.email,
          password: value.password,
        });

        if (error) {
          console.log("Error from LoginForm: ", error.message);
          toast.error("Somthing went wrongt", {
            description: error.message,
          });
        }

        if (data) {
          toast.success(`Ahlan Sahlan ${data.user.name}`, {
            description: "You are loged in successfully",
          });
          form.reset();
        }

        console.log("Login data:", value);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <Card className="shadow-sm">
      {/* HEADER */}
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">Welcome back</CardTitle>
        <CardDescription>Login to continue learning</CardDescription>
      </CardHeader>

      {/* CONTENT */}
      <CardContent>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            form.handleSubmit();
          }}
          className="space-y-5"
        >
          <FieldGroup>
            {/* EMAIL */}
            <form.Field
              name="email"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field>
                    <FieldLabel htmlFor={field.name}>Email</FieldLabel>
                    <Input
                      type="email"
                      id={field.name}
                      placeholder="you@example.com"
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                    />

                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
            />

            {/* PASSWORD */}
            <form.Field
              name="password"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field>
                    <FieldLabel htmlFor="password">Password</FieldLabel>

                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        value={field.state.value}
                        onChange={(e) => field.handleChange(e.target.value)}
                      />

                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                      >
                        {showPassword ? (
                          <EyeOff size={18} />
                        ) : (
                          <Eye size={18} />
                        )}
                      </button>
                    </div>

                    {/* FORGOT */}
                    <div className="flex justify-between text-sm">
                      {isInvalid ? (
                        <FieldError errors={field.state.meta.errors} />
                      ) : (
                        <div></div>
                      )}
                      <Link
                        href="/forgot-password"
                        className="text-muted-foreground hover:text-[#153151]"
                      >
                        Forgot password?
                      </Link>
                    </div>
                  </Field>
                );
              }}
            />

            {/* SUBMIT BUTTON */}
            <Button
              type="submit"
              disabled={loading}
              className="
                w-full rounded-xl text-white font-medium
                bg-[#153151] hover:bg-[#1f4a7a]
                transition-all duration-200 ease-in-out
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#153151]
                disabled:opacity-60 disabled:cursor-not-allowed
                flex items-center justify-center gap-2
              "
            >
              {loading && (
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              )}

              {loading ? "Signing in..." : "Sign In"}
            </Button>
          </FieldGroup>
        </form>

        {/* DIVIDER */}
        <div className="my-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-border" />
          <span className="text-xs text-muted-foreground">OR</span>
          <div className="h-px flex-1 bg-border" />
        </div>

        {/* GOOGLE */}
        <GoogleLoginButton />

        {/* FOOTER */}
        <p className="text-sm text-center text-muted-foreground mt-6">
          Don’t have an account?{" "}
          <Link href="/register" className="text-[#153151] font-medium">
            Sign up
          </Link>
        </p>
      </CardContent>
    </Card>
  );
}
