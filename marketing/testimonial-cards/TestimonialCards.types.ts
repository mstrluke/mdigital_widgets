export interface Testimonial { id: string; name: string; role?: string; content: string; avatar?: string; rating?: number; }
export interface TestimonialCardsProps { testimonials: Testimonial[]; columns?: 2 | 3; className?: string; }
