import { Lots } from 'lib/collections';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

export default function () {
  Meteor.publish('lots.list', function () {
    const selector = {};
    const options = {
      fields: {_id: 1, recordId: 1},
      sort: {createdAt: -1},
      limit: 10
    };

    return Lots.find(selector, options);
  });

  Meteor.publish('lots.single', function (lotId) {
    check(lotId, String);
    const selector = {_id: lotId};
    return Lots.find(selector);
  });
}
