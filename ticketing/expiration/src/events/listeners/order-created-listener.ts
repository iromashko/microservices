import { Subjects } from '@irm_tickets/common';
import { Listener } from '@irm_tickets/common/build/events/base-listener';
import { OrderCreatedEvent } from '@irm_tickets/common/build/events/order-created-event';
import { Message } from 'node-nats-streaming';
import { expirationQueue } from '../../queues/expiration-queue';
import { queueGroupName } from './queue-group-name';

export class OrderCreatedListener extends Listener<OrderCreatedEvent> {
  readonly subject = Subjects.OrderCreated;
  queueGroupName = queueGroupName;
  async onMessage(data: OrderCreatedEvent['data'], msg: Message) {
    await expirationQueue.add({
      orderId: data.id,
    });
    msg.ack();
  }
}
