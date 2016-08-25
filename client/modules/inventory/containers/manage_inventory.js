import { useDeps, composeAll, composeWithTracker, compose } from 'mantra-core';

import ManageInventory from '../components/manage_inventory';

export const composer = ({context}, onData) => {
  const { Meteor, Collections } = context();
  if (Meteor.subscribe('items.all').ready()) {
    const items = Collections.Items.find().fetch();
    onData(null, { items });
  }
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(ManageInventory);
