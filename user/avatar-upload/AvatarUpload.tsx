"use client";
import Avatar from "@voltui/uikit/avatar";
import { cn } from "@voltui/uikit";
import type { AvatarUploadProps } from "./AvatarUpload.types";

export default function AvatarUpload({ src, name, size = "xl", onUpload, className }: AvatarUploadProps) {
  const handleClick = () => {
    const input = document.createElement("input");
    input.type = "file"; input.accept = "image/*";
    input.onchange = (e) => { const f = (e.target as HTMLInputElement).files?.[0]; if (f) onUpload?.(f); };
    input.click();
  };
  return (
    <button type="button" onClick={handleClick} className={cn("group relative rounded-full", className)}>
      <Avatar src={src} name={name} size={size} />
      <div className="absolute inset-0 flex items-center justify-center rounded-full bg-black/40 text-white text-xs font-medium opacity-0 transition-opacity group-hover:opacity-100">Edit</div>
    </button>
  );
}
