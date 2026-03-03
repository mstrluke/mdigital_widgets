export interface ForgotPasswordFormProps {
  onSubmit: (email: string) => void | Promise<void>;
  onBackToLogin?: () => void;
  loading?: boolean;
  success?: boolean;
  error?: string;
  className?: string;
}
