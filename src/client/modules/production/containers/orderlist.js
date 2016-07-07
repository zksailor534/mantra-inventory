import OrderList from '../components/orderlist';
import { useDeps, composeWithTracker, composeAll } from 'mantra-core';

export const composer = ({ context }, onData) => {
  const { Meteor, Collections } = context();
  if (Meteor.subscribe('orders.list').ready()) {
    const orders = Collections.Orders.find().fetch();
    onData(null, { orders });
  }
};

export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(OrderList);
