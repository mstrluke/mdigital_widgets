"use client";
import Card, { CardContent } from "@voltui/uikit/card";
import Avatar from "@voltui/uikit/avatar";
import Badge from "@voltui/uikit/badge";
import Button from "@voltui/uikit/button";
import { cn } from "@voltui/uikit";
import type { ContactCardProps } from "./ContactCard.types";

export default function ContactCard({ contact, onEdit, onCall, onEmail, actions, className }: ContactCardProps) {
  return (
    <Card className={className}>
      <CardContent className="pt-6">
        <div className="flex items-start gap-4">
          <Avatar src={contact.avatar} name={contact.name} size="lg" />
          <div className="flex-1 min-w-0">
            <p className="font-semibold">{contact.name}</p>
            {contact.role && <p className="text-sm text-text-secondary">{contact.role}{contact.company && ` at ${contact.company}`}</p>}
            {contact.email && <p className="mt-1 text-sm text-text-secondary truncate">{contact.email}</p>}
            {contact.tags?.length ? <div className="mt-2 flex flex-wrap gap-1">{contact.tags.map((t) => <Badge key={t} variant="soft" size="sm">{t}</Badge>)}</div> : null}
          </div>
        </div>
        <div className="mt-4 flex gap-2">
          {onCall && <Button variant="outlined" size="sm" onClick={onCall}>Call</Button>}
          {onEmail && <Button variant="outlined" size="sm" onClick={onEmail}>Email</Button>}
          {onEdit && <Button variant="ghost" size="sm" onClick={onEdit}>Edit</Button>}
          {actions}
        </div>
      </CardContent>
    </Card>
  );
}
