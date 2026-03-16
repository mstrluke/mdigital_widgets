"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Card, { CardContent } from "@voltui/uikit/card";
import Input from "@voltui/uikit/input";
import InputPassword from "@voltui/uikit/input-password";
import Button from "@voltui/uikit/button";
import Link from "@voltui/uikit/link";
import Notification from "@voltui/uikit/notification";
import { cn } from "@voltui/uikit";
import type { RegisterFormProps } from "./RegisterForm.types";

const schema = z.object({ name: z.string().min(2), email: z.string().email(), password: z.string().min(8), confirmPassword: z.string() }).refine((d) => d.password === d.confirmPassword, { message: "Passwords don't match", path: ["confirmPassword"] });

export default function RegisterForm({ onSubmit, onSignIn, loading, error, className }: RegisterFormProps) {
  const { control, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(schema), defaultValues: { name: "", email: "", password: "", confirmPassword: "" } });
  return (
    <Card className={cn("w-full max-w-md", className)}>
      <CardContent className="pt-6 px-6">
        <form onSubmit={handleSubmit(({ name, email, password }) => onSubmit({ name, email, password }))} className="flex flex-col gap-4">
          {error && <Notification color="error" variant="soft" description={error} closable />}
          <Controller name="name" control={control} render={({ field }) => <Input {...field} label="Full name" error={errors.name?.message} />} />
          <Controller name="email" control={control} render={({ field }) => <Input {...field} type="email" label="Email" error={errors.email?.message} />} />
          <Controller name="password" control={control} render={({ field }) => <InputPassword {...field} label="Password" error={errors.password?.message} />} />
          <Controller name="confirmPassword" control={control} render={({ field }) => <InputPassword {...field} label="Confirm password" error={errors.confirmPassword?.message} />} />
          <Button type="submit" color="primary" fullWidth loading={loading}>Create account</Button>
        </form>
        {onSignIn && <p className="mt-6 text-center text-sm text-text-secondary">Have an account? <Link color="primary" onClick={onSignIn} size="sm">Sign in</Link></p>}
      </CardContent>
    </Card>
  );
}
