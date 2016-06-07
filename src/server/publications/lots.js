import { Lots } from 'lib/collections';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

export default function () {
  Meteor.publish('lots.list', function () {
    const selector = {};
    const options = {
      sort: {createdAt: -1}
    };

    return Lots.find(selector, options);
  });

  Meteor.publish('lots.single', function (lotId) {
    check(lotId, String);
    const selector = {_id: lotId};
    return Lots.find(selector);
  });
}
