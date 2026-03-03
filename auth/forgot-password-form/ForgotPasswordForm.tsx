"use client";

import { useState } from "react";
import Card, { CardContent } from "@mdigital_ui/ui/card";
import Input from "@mdigital_ui/ui/input";
import Button from "@mdigital_ui/ui/button";
import Link from "@mdigital_ui/ui/link";
import Notification from "@mdigital_ui/ui/notification";
import { cn } from "@mdigital_ui/ui";
import type { ForgotPasswordFormProps } from "./ForgotPasswordForm.types";

export default function ForgotPasswordForm({ onSubmit, onBackToLogin, loading, success, error, className }: ForgotPasswordFormProps) {
  const [email, setEmail] = useState("");
  return (
    <Card className={cn("w-full max-w-md", className)}>
      <CardContent className="pt-6 px-6 space-y-4">
        <div><h2 className="text-lg font-semibold whitespace-nowrap">Reset password</h2><p className="text-sm text-text-secondary">Enter your email to receive a reset link</p></div>
        {error && <Notification color="error" variant="soft" description={error} closable />}
        {success && <Notification color="success" variant="soft" description="Check your email for a reset link" />}
        <form onSubmit={(e) => { e.preventDefault(); onSubmit(email); }} className="flex flex-col gap-4">
          <Input value={email} onChange={(e: any) => setEmail(e.target?.value ?? e)} type="email" label="Email" placeholder="you@example.com" />
          <Button type="submit" color="primary" fullWidth loading={loading}>Send reset link</Button>
        </form>
        {onBackToLogin && <p className="text-center text-sm"><Link color="primary" onClick={onBackToLogin} size="sm">← Back to login</Link></p>}
      </CardContent>
    </Card>
  );
}
