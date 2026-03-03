export interface ResetPasswordFormProps {
  onSubmit: (password: string) => void | Promise<void>;
  onBackToLogin?: () => void;
  loading?: boolean;
  error?: string;
  className?: string;
}
