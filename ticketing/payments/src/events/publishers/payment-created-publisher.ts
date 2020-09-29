import { Publisher, PaymentCreatedEvent, Subjects } from '@irm_tickets/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated;
}
