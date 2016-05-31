import { check } from 'meteor/check';

export default function ({ Meteor, Collections }) {
  Meteor.methods({
    'lots.create'(_id, recordId, productName) {
      check(_id, String);
      check(recordId, String);
      check(productName, String);

      const createdAt = new Date();
      const lot = {
        _id, recordId, productName, createdAt,
        saving: true
      };

      Collections.Lots.insert(lot);
    }
  });
}
