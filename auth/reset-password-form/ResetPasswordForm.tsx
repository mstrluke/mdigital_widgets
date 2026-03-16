"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Card, { CardContent } from "@voltui/uikit/card";
import InputPassword from "@voltui/uikit/input-password";
import Button from "@voltui/uikit/button";
import Link from "@voltui/uikit/link";
import Notification from "@voltui/uikit/notification";
import { cn } from "@voltui/uikit";
import type { ResetPasswordFormProps } from "./ResetPasswordForm.types";

const schema = z.object({ password: z.string().min(8), confirm: z.string() }).refine((d) => d.password === d.confirm, { message: "Passwords don't match", path: ["confirm"] });

export default function ResetPasswordForm({ onSubmit, onBackToLogin, loading, error, className }: ResetPasswordFormProps) {
  const { control, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(schema) });
  return (
    <Card className={cn("w-full max-w-md", className)}>
      <CardContent className="pt-6 px-6 space-y-4">
        <div><h2 className="text-lg font-semibold whitespace-nowrap">Set new password</h2><p className="text-sm text-text-secondary">Must be at least 8 characters</p></div>
        {error && <Notification color="error" variant="soft" description={error} closable />}
        <form onSubmit={handleSubmit(({ password }) => onSubmit(password))} className="flex flex-col gap-4">
          <Controller name="password" control={control} render={({ field }) => <InputPassword {...field} label="New password" error={errors.password?.message} />} />
          <Controller name="confirm" control={control} render={({ field }) => <InputPassword {...field} label="Confirm password" error={errors.confirm?.message} />} />
          <Button type="submit" color="primary" fullWidth loading={loading}>Reset password</Button>
        </form>
        {onBackToLogin && <p className="text-center text-sm"><Link color="primary" onClick={onBackToLogin} size="sm">← Back to login</Link></p>}
      </CardContent>
    </Card>
  );
}
