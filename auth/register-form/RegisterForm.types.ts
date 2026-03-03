export interface RegisterFormData { name: string; email: string; password: string; }

export interface RegisterFormProps {
  onSubmit: (data: RegisterFormData) => void | Promise<void>;
  onSignIn?: () => void;
  loading?: boolean;
  error?: string;
  className?: string;
}
