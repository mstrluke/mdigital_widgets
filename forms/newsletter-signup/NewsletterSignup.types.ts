export interface NewsletterSignupProps {
  onSubmit: (email: string) => void | Promise<void>;
  title?: string;
  description?: string;
  buttonText?: string;
  loading?: boolean;
  className?: string;
}
