const { describe, it } = global;
import { expect } from 'chai';
import { stub, spy } from 'sinon';
import { composer } from '../orderdetail';

describe('containers.orderdetail', () => {
  describe('composer', () => {
    const Tracker = { nonreactive: cb => cb() };
    const getCollections = (order) => {
      const Collections = {
        Orders: { findOne: stub() }
      };
      Collections.Orders.findOne.returns(order);
      return Collections;
    };

    it('should subscribe to the given orderId via prop', () => {
      const Meteor = { subscribe: stub() };
      Meteor.subscribe.returns({ ready: () => false });
      const Collections = getCollections();

      const context = () => ({ Meteor, Tracker, Collections });
      const orderId = 'dwd';
      const onData = spy();

      composer({ context, orderId }, onData);
      const args = Meteor.subscribe.args[0];
      expect(args.slice(0, 2)).to.deep.equal([
        'orders.single', orderId
      ]);
    });

    describe('while subscribing', () => {
      it('should call just onData()', () => {
        const Meteor = { subscribe: stub() };
        const Collections = getCollections();

        const context = () => ({ Meteor, Tracker, Collections });
        const orderId = 'dwd';
        const onData = spy();

        composer({ context, orderId }, onData);
        expect(onData.args[0]).to.deep.equal([]);
      });
    });

    describe('after subscribed', () => {
      it('should find the order and send it to onData', () => {
        const Meteor = { subscribe: stub() };

        const order = { _id: 'order' };
        const Collections = getCollections(order);

        const context = () => ({ Meteor, Collections, Tracker });
        const orderId = 'dwd';
        const onData = spy();

        composer({ context, orderId }, onData);
        expect(onData.args[0]).to.deep.equal([ null, { order } ]);
      });
    });
  });
});
