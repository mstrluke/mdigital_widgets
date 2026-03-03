"use client";
import Card, { CardContent } from "@mdigital_ui/ui/card";
import Badge from "@mdigital_ui/ui/badge";
import Divider from "@mdigital_ui/ui/divider";
import { cn } from "@mdigital_ui/ui";
import type { InvoicePreviewProps } from "./InvoicePreview.types";

export default function InvoicePreview({ invoice, className }: InvoicePreviewProps) {
  const cur = invoice.currency || "$";
  return (
    <Card className={className}>
      <CardContent className="pt-6 space-y-6">
        <div className="flex justify-between">
          <div><p className="text-lg font-bold">{invoice.id}</p><p className="text-sm text-text-secondary">{invoice.date}</p></div>
          {invoice.status && <Badge variant="soft">{invoice.status}</Badge>}
        </div>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div><p className="font-medium">From</p><p className="text-text-secondary">{invoice.from.name}</p>{invoice.from.address && <p className="text-text-secondary">{invoice.from.address}</p>}</div>
          <div><p className="font-medium">To</p><p className="text-text-secondary">{invoice.to.name}</p>{invoice.to.address && <p className="text-text-secondary">{invoice.to.address}</p>}</div>
        </div>
        <table className="w-full text-sm"><thead><tr className="border-b text-text-secondary"><th className="py-2 text-left">Item</th><th className="py-2 text-right">Qty</th><th className="py-2 text-right">Rate</th><th className="py-2 text-right">Amount</th></tr></thead>
          <tbody>{invoice.items.map((item, i) => <tr key={i} className="border-b"><td className="py-2">{item.description}</td><td className="py-2 text-right">{item.quantity}</td><td className="py-2 text-right">{cur}{item.rate}</td><td className="py-2 text-right">{cur}{item.amount}</td></tr>)}</tbody>
        </table>
        <div className="flex flex-col items-end gap-1 text-sm">
          <div className="flex gap-8"><span className="text-text-secondary">Subtotal</span><span>{cur}{invoice.subtotal}</span></div>
          {invoice.tax !== undefined && <div className="flex gap-8"><span className="text-text-secondary">Tax</span><span>{cur}{invoice.tax}</span></div>}
          <Divider className="my-1 w-40" />
          <div className="flex gap-8 font-bold"><span>Total</span><span>{cur}{invoice.total}</span></div>
        </div>
      </CardContent>
    </Card>
  );
}
