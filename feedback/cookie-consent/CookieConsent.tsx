"use client";
import Button from "@mdigital_ui/ui/button";
import { cn } from "@mdigital_ui/ui";
import type { CookieConsentProps } from "./CookieConsent.types";

export default function CookieConsent({ onAccept, onReject, onCustomize, message = "We use cookies to improve your experience. By continuing, you agree to our use of cookies.", className }: CookieConsentProps) {
  return (
    <div className={cn("fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background p-4 shadow-lg", className)}>
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 sm:flex-row">
        <p className="flex-1 text-sm text-text-secondary">{message}</p>
        <div className="flex shrink-0 gap-2">
          {onCustomize && <Button variant="ghost" size="sm" onClick={onCustomize}>Customize</Button>}
          {onReject && <Button variant="outlined" size="sm" onClick={onReject}>Reject</Button>}
          <Button color="primary" size="sm" onClick={onAccept}>Accept</Button>
        </div>
      </div>
    </div>
  );
}
