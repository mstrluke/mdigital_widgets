"use client";
import Card, { CardContent } from "@voltui/uikit/card";
import Badge from "@voltui/uikit/badge";
import Button from "@voltui/uikit/button";
import Rating from "@voltui/uikit/rating";
import { cn } from "@voltui/uikit";
import type { SupplierCardProps } from "./SupplierCard.types";

export default function SupplierCard({ supplier, onEdit, onContact, className }: SupplierCardProps) {
  return (
    <Card className={className}><CardContent className="pt-6 space-y-3">
      <div className="flex justify-between"><p className="font-semibold">{supplier.name}</p>{supplier.status && <Badge variant="soft" size="sm">{supplier.status}</Badge>}</div>
      {supplier.contact && <p className="text-sm text-text-secondary">{supplier.contact}</p>}
      {supplier.email && <p className="text-sm text-text-secondary">{supplier.email}</p>}
      {supplier.rating !== undefined && <Rating value={supplier.rating} readOnly size="sm" />}
      {supplier.categories?.length ? <div className="flex flex-wrap gap-1">{supplier.categories.map((c) => <Badge key={c} variant="soft" size="sm">{c}</Badge>)}</div> : null}
      <div className="flex gap-2 pt-1">
        {onContact && <Button variant="outlined" size="sm" onClick={onContact}>Contact</Button>}
        {onEdit && <Button variant="ghost" size="sm" onClick={onEdit}>Edit</Button>}
      </div>
    </CardContent></Card>
  );
}
