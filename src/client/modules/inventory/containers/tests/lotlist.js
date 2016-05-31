const { describe, it } = global;
import { expect } from 'chai';
import { stub, spy } from 'sinon';
import { composer } from '../lotlist';

describe('containers.lotlist', () => {
  describe('composer', () => {
    it('should subscribe to lots.list', () => {
      const Meteor = { subscribe: stub() };
      Meteor.subscribe.returns({ ready: () => false });

      const context = () => ({ Meteor });
      const onData = spy();

      composer({ context }, onData);
      expect(Meteor.subscribe.args[0]).to.deep.equal([
        'lots.list'
      ]);
    });

    describe('after subscribed', () => {
      it('should fetch data from all lots & pass to onData', () => {
        const Meteor = {subscribe: stub()};
        Meteor.subscribe.returns({ready: () => true});

        const lots = [ { _id: 'aa' } ];
        const Collections = {Lots: {find: stub()}};
        Collections.Lots.find.returns({fetch: () => lots});

        const context = () => ({Meteor, Collections});
        const onData = spy();

        composer({context}, onData);
        expect(onData.args[0]).to.deep.equal([ null, { lots } ]);
      });
    });
  });
});
