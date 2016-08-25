import { Items } from '/lib/collections';
import { Meteor } from 'meteor/meteor';
// import { check } from 'meteor/check';

export default function () {
  Meteor.methods({
    'items.add'(_id, recordId, productName, quantity) {
      // check(_id, String);
      // check(recordId, String);
      // check(productName, String);
      // check(quantity, Number);

      const createdAt = new Date();
      const item = {
        _id,
        recordId,
        productName,
        onHand: quantity,
        createdAt,
      };
      Items.insert(item);
    }
  });
}
