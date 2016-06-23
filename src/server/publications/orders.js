import { Orders } from 'lib/collections';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

export default function () {
  Meteor.publish('orders.list', function () {
    const selector = {};
    const options = {
      sort: {createdAt: -1}
    };

    return Orders.find(selector, options);
  });

  Meteor.publish('orders.single', function (orderId) {
    check(orderId, String);
    const selector = {_id: orderId};
    return Orders.find(selector);
  });
}
