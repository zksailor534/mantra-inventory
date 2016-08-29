// import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';
import { useDeps, composeAll } from 'mantra-core';

import TopNav from '../components/topnav';

// export const composer = ({ context }, onData) => {
//   const { Meteor, Collections } = context();
//
//   onData(null, {});
// };

// export const depsMapper = (context, actions) => ({
export const depsMapper = (context) => ({
  context: () => context
});

export default composeAll(
  // composeWithTracker(composer),
  useDeps(depsMapper)
)(TopNav);
