import { Publisher, OrderCancelledEvent, Subjects } from '@irm_tickets/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}
