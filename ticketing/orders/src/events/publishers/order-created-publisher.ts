import { Publisher, OrderCreatedEvent, Subjects } from '@irm_tickets/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  readonly subject = Subjects.OrderCreated;
}
