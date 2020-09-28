import {
  Publisher,
  ExpirationCompleteEvent,
  Subjects,
} from '@irm_tickets/common';

export class ExpirationCompletePublisher extends Publisher<
  ExpirationCompleteEvent
> {
  readonly subject = Subjects.ExpirationComplete;
}
