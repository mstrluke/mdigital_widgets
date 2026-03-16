"use client";

import { useState } from "react";
import Card, { CardContent } from "@voltui/uikit/card";
import InputOtp from "@voltui/uikit/input-otp";
import Button from "@voltui/uikit/button";
import Link from "@voltui/uikit/link";
import Notification from "@voltui/uikit/notification";
import { cn } from "@voltui/uikit";
import type { OtpVerificationProps } from "./OtpVerification.types";

export default function OtpVerification({ onSubmit, onResend, length = 6, maskedContact, loading, error, className }: OtpVerificationProps) {
  const [code, setCode] = useState("");
  return (
    <Card className={cn("w-full max-w-sm", className)}>
      <CardContent className="pt-6 space-y-4">
        <div className="text-center"><h2 className="text-lg font-semibold">Verify your identity</h2>
          <p className="text-sm text-text-secondary">{maskedContact ? `Code sent to ${maskedContact}` : "Enter the code we sent you"}</p></div>
        {error && <Notification color="error" variant="soft" description={error} closable />}
        <div className="flex justify-center"><InputOtp value={code} onChange={setCode} length={length} /></div>
        <Button color="primary" fullWidth loading={loading} disabled={code.length < length} onClick={() => onSubmit(code)}>Verify</Button>
        {onResend && <p className="text-center text-sm text-text-secondary">Didn't receive it? <Link color="primary" onClick={onResend} size="sm">Resend</Link></p>}
      </CardContent>
    </Card>
  );
}
