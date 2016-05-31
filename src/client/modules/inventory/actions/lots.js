export default {
  create({ Meteor, LocalState, FlowRouter }, recordId, productName) {
    if (!recordId || !productName) {
      return LocalState.set('SAVING_ERROR', 'recordId & productName are required!');
    }

    LocalState.set('SAVING_ERROR', null);

    const id = Meteor.uuid();
    // There is a method stub for this in the config/method_stubs
    // That's how we are doing latency compensation
    Meteor.call('lots.create', id, recordId, productName, (err) => {
      if (err) {
        return LocalState.set('SAVING_ERROR', err.message);
      }
    });
    FlowRouter.go(`/lot/${id}`);
  },

  clearErrors({LocalState}) {
    return LocalState.set('SAVING_ERROR', null);
  }
};
