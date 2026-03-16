"use client";

import { useState } from "react";
import Card, { CardContent, CardHeader, CardTitle } from "@voltui/uikit/card";
import Textarea from "@voltui/uikit/textarea";
import Button from "@voltui/uikit/button";
import { cn } from "@voltui/uikit";
import type { FeedbackRatingProps } from "./FeedbackRating.types";

export default function FeedbackRating({ onSubmit, title = "How was your experience?", maxRating = 5, showComment = true, loading, className }: FeedbackRatingProps) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [comment, setComment] = useState("");
  return (
    <Card className={className}>
      <CardHeader><CardTitle className="text-base">{title}</CardTitle></CardHeader>
      <CardContent className="space-y-4">
        <div className="flex gap-1">
          {Array.from({ length: maxRating }, (_, i) => (
            <button key={i} type="button" className={cn("text-2xl transition-transform hover:scale-110", (hover || rating) > i ? "text-warning" : "text-text-disabled")}
              onMouseEnter={() => setHover(i + 1)} onMouseLeave={() => setHover(0)} onClick={() => setRating(i + 1)}>★</button>
          ))}
        </div>
        {showComment && <Textarea value={comment} onChange={(e: any) => setComment(e.target?.value ?? e)} placeholder="Tell us more (optional)" rows={3} />}
        <Button color="primary" disabled={!rating} loading={loading} onClick={() => onSubmit({ rating, comment: comment || undefined })}>Submit feedback</Button>
      </CardContent>
    </Card>
  );
}
