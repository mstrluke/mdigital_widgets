export interface FeedbackRatingData {
  rating: number;
  comment?: string;
}

export interface FeedbackRatingProps {
  onSubmit: (data: FeedbackRatingData) => void | Promise<void>;
  title?: string;
  maxRating?: number;
  showComment?: boolean;
  loading?: boolean;
  className?: string;
}
