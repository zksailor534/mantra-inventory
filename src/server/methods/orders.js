import { Orders } from 'lib/collections';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

export default function () {
  Meteor.methods({
    'orders.create'(_id, orderNo, customerName) {
      check(_id, String);
      check(orderNo, String);
      check(customerName, String);

      // XXX: Do some user authorization
      const createdAt = new Date();
      const order = {_id, orderNo, customerName, createdAt};
      Orders.insert(order);
    }
  });
}
