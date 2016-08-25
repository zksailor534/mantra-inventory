export default {
  additem({ Meteor }, recordId, productName, quantity) {
    const id = Meteor.uuid();
    Meteor.call('items.add', id, recordId, productName, quantity);
  },
};
