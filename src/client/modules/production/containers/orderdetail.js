import OrderDetail from '../components/orderdetail';
import { useDeps, composeWithTracker, composeAll } from 'mantra-core';

export const composer = ({ context, orderId }, onData) => {
  const { Meteor, Collections, Tracker } = context();

  Meteor.subscribe('orders.single', orderId, () => {
    const order = Collections.Orders.findOne(orderId);
    onData(null, {order});
  });

  // support latency compensation
  //  we don't need to invalidate tracker because of the
  //  data fetching from the cache.
  const orderFromCache = Tracker.nonreactive(() => {
    return Collections.Orders.findOne(orderId);
  });

  if (orderFromCache) {
    onData(null, {order: orderFromCache});
  } else {
    onData();
  }
};

export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(OrderDetail);
