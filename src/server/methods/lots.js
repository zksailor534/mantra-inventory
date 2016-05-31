import { Lots } from 'lib/collections';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

export default function () {
  Meteor.methods({
    'lots.create'(_id, recordId, productName) {
      check(_id, String);
      check(recordId, String);
      check(productName, String);

      // Show the latency compensations
      // Meteor._sleepForMs(500);

      // XXX: Do some user authorization
      const createdAt = new Date();
      const lot = {_id, recordId, productName, createdAt};
      Lots.insert(lot);
    }
  });
}
