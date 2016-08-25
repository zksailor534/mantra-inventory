export default {
  additem({ Meteor }, item) {
    Meteor.call(
      'items.add',
      Meteor.uuid(),
      item
    );
  },
};
