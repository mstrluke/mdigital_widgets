export interface OtpVerificationProps {
  onSubmit: (code: string) => void | Promise<void>;
  onResend?: () => void | Promise<void>;
  length?: number;
  maskedContact?: string;
  loading?: boolean;
  error?: string;
  className?: string;
}
