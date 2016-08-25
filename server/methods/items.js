import { Items } from '/lib/collections';
import { Meteor } from 'meteor/meteor';
// import { check } from 'meteor/check';

export default function () {
  Meteor.methods({
    'items.add'(_id, itemData) {
      // check(_id, String);
      // check(recordId, String);
      // check(productName, String);
      // check(quantity, Number);

      const createdAt = new Date();
      const item = {
        _id,
        recordId: itemData.recordId,
        productName: itemData.productName,
        onHand: itemData.quantity,
        origQty: itemData.quantity,
        createdAt,
      };
      Items.insert(item);
    }
  });
}
