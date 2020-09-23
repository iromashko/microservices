import { Publisher, Subjects, TicketCreatedEvent } from '@irm_tickets/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
