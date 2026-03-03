"use client";

import { useState } from "react";
import Input from "@mdigital_ui/ui/input";
import Button from "@mdigital_ui/ui/button";
import { cn } from "@mdigital_ui/ui";
import type { NewsletterSignupProps } from "./NewsletterSignup.types";

export default function NewsletterSignup({ onSubmit, title = "Stay updated", description, buttonText = "Subscribe", loading, className }: NewsletterSignupProps) {
  const [email, setEmail] = useState("");
  return (
    <div className={cn("space-y-3", className)}>
      {title && <h3 className="text-lg font-semibold">{title}</h3>}
      {description && <p className="text-sm text-text-secondary">{description}</p>}
      <form onSubmit={(e) => { e.preventDefault(); onSubmit(email); }} className="flex gap-2">
        <Input value={email} onChange={(e: any) => setEmail(e.target?.value ?? e)} type="email" placeholder="you@example.com" className="flex-1" />
        <Button type="submit" color="primary" loading={loading}>{buttonText}</Button>
      </form>
    </div>
  );
}
