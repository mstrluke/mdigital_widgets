"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Card, { CardContent } from "@mdigital_ui/ui/card";
import Input from "@mdigital_ui/ui/input";
import InputPassword from "@mdigital_ui/ui/input-password";
import Checkbox from "@mdigital_ui/ui/checkbox";
import Button from "@mdigital_ui/ui/button";
import Link from "@mdigital_ui/ui/link";
import Notification from "@mdigital_ui/ui/notification";
import { cn } from "@mdigital_ui/ui";
import type { LoginFormProps, LoginFormData } from "./LoginForm.types";

const schema = z.object({ email: z.string().email(), password: z.string().min(1), rememberMe: z.boolean().optional() });

export default function LoginForm({ onSubmit, onForgotPassword, onSignUp, loading, error, className }: LoginFormProps) {
  const { control, handleSubmit, formState: { errors } } = useForm<LoginFormData>({ resolver: zodResolver(schema), defaultValues: { email: "", password: "", rememberMe: false } });
  return (
    <Card className={cn("w-full max-w-md", className)}>
      <CardContent className="pt-6 px-6">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          {error && <Notification color="error" variant="soft" description={error} closable />}
          <Controller name="email" control={control} render={({ field }) => <Input {...field} type="email" label="Email" placeholder="you@example.com" error={errors.email?.message} />} />
          <Controller name="password" control={control} render={({ field }) => <InputPassword {...field} label="Password" error={errors.password?.message} />} />
          <div className="flex items-center justify-between">
            <Controller name="rememberMe" control={control} render={({ field }) => <Checkbox label="Remember me" checked={field.value} onChange={field.onChange} />} />
            {onForgotPassword && <Link size="sm" color="primary" onClick={onForgotPassword} className="shrink-0 whitespace-nowrap">Forgot password?</Link>}
          </div>
          <Button type="submit" color="primary" fullWidth loading={loading} loadingText="Signing in...">Sign in</Button>
        </form>
        {onSignUp && <p className="mt-6 text-center text-sm text-text-secondary">No account? <Link color="primary" onClick={onSignUp} size="sm">Sign up</Link></p>}
      </CardContent>
    </Card>
  );
}
