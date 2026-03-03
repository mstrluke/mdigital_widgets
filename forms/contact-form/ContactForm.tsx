"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Card, { CardContent, CardHeader, CardTitle } from "@mdigital_ui/ui/card";
import Input from "@mdigital_ui/ui/input";
import Textarea from "@mdigital_ui/ui/textarea";
import Button from "@mdigital_ui/ui/button";
import type { ContactFormProps, ContactFormData } from "./ContactForm.types";

const schema = z.object({
  name: z.string().min(2), email: z.string().email(), subject: z.string().optional(), message: z.string().min(10),
});

export default function ContactForm({ onSubmit, loading, showSubject = true, className }: ContactFormProps) {
  const { control, handleSubmit, formState: { errors } } = useForm<ContactFormData>({ resolver: zodResolver(schema) });
  return (
    <Card className={className}>
      <CardHeader><CardTitle>Contact Us</CardTitle></CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <Controller name="name" control={control} render={({ field }) => <Input {...field} label="Name" error={errors.name?.message} />} />
          <Controller name="email" control={control} render={({ field }) => <Input {...field} type="email" label="Email" error={errors.email?.message} />} />
          {showSubject && <Controller name="subject" control={control} render={({ field }) => <Input {...field} label="Subject" />} />}
          <Controller name="message" control={control} render={({ field }) => <Textarea {...field} label="Message" rows={4} error={errors.message?.message} />} />
          <Button type="submit" color="primary" loading={loading}>Send message</Button>
        </form>
      </CardContent>
    </Card>
  );
}
