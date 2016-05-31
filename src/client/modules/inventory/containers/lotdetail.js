import LotDetail from '../components/lotdetail';
import { useDeps, composeWithTracker, composeAll } from 'mantra-core';

export const composer = ({ context, lotId }, onData) => {
  const { Meteor, Collections, Tracker } = context();

  Meteor.subscribe('lots.single', lotId, () => {
    const lot = Collections.Lots.findOne(lotId);
    onData(null, {lot});
  });

  // support latency compensation
  //  we don't need to invalidate tracker because of the
  //  data fetching from the cache.
  const lotFromCache = Tracker.nonreactive(() => {
    return Collections.Lots.findOne(lotId);
  });

  if (lotFromCache) {
    onData(null, {lot: lotFromCache});
  } else {
    onData();
  }
};

export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(LotDetail);
