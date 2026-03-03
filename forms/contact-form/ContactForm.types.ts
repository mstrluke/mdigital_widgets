export interface ContactFormData {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

export interface ContactFormProps {
  onSubmit: (data: ContactFormData) => void | Promise<void>;
  loading?: boolean;
  showSubject?: boolean;
  className?: string;
}
