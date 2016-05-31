import LotList from '../components/lotlist';
import { useDeps, composeWithTracker, composeAll } from 'mantra-core';

export const composer = ({ context }, onData) => {
  const { Meteor, Collections } = context();
  if (Meteor.subscribe('lots.list').ready()) {
    const lots = Collections.Lots.find().fetch();
    onData(null, { lots });
  }
};

export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(LotList);
