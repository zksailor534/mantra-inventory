// import { useDeps, composeAll, composeWithTracker, compose } from 'mantra-core';
import { useDeps, composeAll } from 'mantra-core';

import AddItem from '../components/add_item';

// export const composer = ({ context }, onData) => {
//   const {Meteor, Collections} = context();
//
//   onData(null, {});
// };

export const depsMapper = (context, actions) => ({
  additem: actions.items.additem,
  context: () => context
});

export default composeAll(
  // composeWithTracker(composer),
  useDeps(depsMapper)
)(AddItem);
