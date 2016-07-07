export default {
  create({ Meteor, LocalState, FlowRouter }, orderNo, customerName) {
    if (!orderNo || !customerName) {
      return LocalState.set('SAVING_ERROR', 'order number & customer name are required!');
    }

    LocalState.set('SAVING_ERROR', null);

    const id = Meteor.uuid();
    // There is a method stub for this in the config/method_stubs
    // That's how we are doing latency compensation
    Meteor.call('orders.create', id, orderNo, customerName, (err) => {
      if (err) {
        return LocalState.set('SAVING_ERROR', err.message);
      }
    });
    FlowRouter.go(`/order/${id}`);
  },

  clearErrors({LocalState}) {
    return LocalState.set('SAVING_ERROR', null);
  }
};
