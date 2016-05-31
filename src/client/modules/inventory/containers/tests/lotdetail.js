const { describe, it } = global;
import { expect } from 'chai';
import { stub, spy } from 'sinon';
import { composer } from '../lotdetail';

describe('containers.lot', () => {
  describe('composer', () => {
    const Tracker = { nonreactive: cb => cb() };
    const getCollections = (lot) => {
      const Collections = {
        Lots: { findOne: stub() }
      };
      Collections.Lots.findOne.returns(lot);
      return Collections;
    };

    it('should subscribe to the given lotId via prop', () => {
      const Meteor = { subscribe: stub() };
      Meteor.subscribe.returns({ ready: () => false });
      const Collections = getCollections();

      const context = () => ({ Meteor, Tracker, Collections });
      const lotId = 'dwd';
      const onData = spy();

      composer({ context, lotId }, onData);
      const args = Meteor.subscribe.args[0];
      expect(args.slice(0, 2)).to.deep.equal([
        'lots.single', lotId
      ]);
    });

    describe('while subscribing', () => {
      it('should call just onData()', () => {
        const Meteor = { subscribe: stub() };
        const Collections = getCollections();

        const context = () => ({ Meteor, Tracker, Collections });
        const lotId = 'dwd';
        const onData = spy();

        composer({ context, lotId }, onData);
        expect(onData.args[0]).to.deep.equal([]);
      });
    });

    describe('after subscribed', () => {
      it('should find the lot and send it to onData', () => {
        const Meteor = { subscribe: stub() };

        const lot = { _id: 'lot' };
        const Collections = getCollections(lot);

        const context = () => ({ Meteor, Collections, Tracker });
        const lotId = 'dwd';
        const onData = spy();

        composer({ context, lotId }, onData);
        expect(onData.args[0]).to.deep.equal([ null, { lot } ]);
      });
    });
  });
});
