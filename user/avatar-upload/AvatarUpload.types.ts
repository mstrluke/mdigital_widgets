export interface AvatarUploadProps {
  src?: string; name?: string; size?: "sm" | "md" | "lg" | "xl";
  onUpload?: (file: File) => void | Promise<void>; className?: string;
}
