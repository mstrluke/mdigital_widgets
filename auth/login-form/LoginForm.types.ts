export interface LoginFormData { email: string; password: string; rememberMe?: boolean; }

export interface LoginFormProps {
  onSubmit: (data: LoginFormData) => void | Promise<void>;
  onForgotPassword?: () => void;
  onSignUp?: () => void;
  loading?: boolean;
  error?: string;
  className?: string;
}
