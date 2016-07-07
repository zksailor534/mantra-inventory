const { describe, it } = global;
import { expect } from 'chai';
import { stub, spy } from 'sinon';
import { composer } from '../orderlist';

describe('containers.orderlist', () => {
  describe('composer', () => {
    it('should subscribe to orders.list', () => {
      const Meteor = { subscribe: stub() };
      Meteor.subscribe.returns({ ready: () => false });

      const context = () => ({ Meteor });
      const onData = spy();

      composer({ context }, onData);
      expect(Meteor.subscribe.args[0]).to.deep.equal([
        'orders.list'
      ]);
    });

    describe('after subscribed', () => {
      it('should fetch data from all orders & pass to onData', () => {
        const Meteor = {subscribe: stub()};
        Meteor.subscribe.returns({ready: () => true});

        const orders = [ { _id: 'aa' } ];
        const Collections = {Orders: {find: stub()}};
        Collections.Orders.find.returns({fetch: () => orders});

        const context = () => ({Meteor, Collections});
        const onData = spy();

        composer({context}, onData);
        expect(onData.args[0]).to.deep.equal([ null, { orders } ]);
      });
    });
  });
});
