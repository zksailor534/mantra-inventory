import { check } from 'meteor/check';

export default function ({ Meteor, Collections }) {
  Meteor.methods({
    'orders.create'(_id, orderNo, customerName) {
      check(_id, String);
      check(orderNo, String);
      check(customerName, String);

      const createdAt = new Date();
      const order = {
        _id, orderNo, customerName, createdAt,
        saving: true
      };

      Collections.Orders.insert(order);
    }
  });
}
