const { describe, it } = global;
import { expect } from 'chai';
import { shallow } from 'enzyme';
import LotList from '../lotlist';

describe('components.lotlist', () => {
  // const lots = [
  //   {recordId: 't-one', _id: 'one'},
  //   {recordId: 't-two', _id: 'two'},
  // ];

  // it('should list given number of items', () => {
  //   const el = shallow(<LotList lots={lots}/>);
  //   expect(el.find('li').length).to.be.equal(lots.length);
  // });
  //
  // it('should list lot record id for each item', () => {
  //   const el = shallow(<LotList lots={lots}/>);
  //   const lis = el.find('li');
  //   lis.forEach((li, index) => {
  //     const aText = li.find('a').first().text();
  //     expect(aText).to.be.equal(lots[index].title);
  //   });
  // });
  //
  // it('should list lot link for each items', () => {
  //   const el = shallow(<LotList lots={lots}/>);
  //   const lis = el.find('li');
  //   lis.forEach((li, index) => {
  //     const href = li.find('a').first().prop('href');
  //     expect(href).to.be.equal(`/lot/${lots[index]._id}`);
  //   });
  // });
});
