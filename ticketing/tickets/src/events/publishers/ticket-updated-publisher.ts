import { Publisher, Subjects, TicketUpdatedEvent } from '@irm_tickets/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
