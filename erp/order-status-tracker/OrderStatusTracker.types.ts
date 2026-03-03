export interface OrderStep { label: string; date?: string; completed: boolean; }
export interface OrderStatusTrackerProps { orderId: string; steps: OrderStep[]; currentStep?: number; className?: string; }
