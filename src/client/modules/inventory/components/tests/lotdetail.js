const { describe, it } = global;
import { expect } from 'chai';
import { shallow } from 'enzyme';
import LotDetail from '../lotdetail';

describe('components.lotdetail', () => {
  it('should display the lot record id', () => {
    const lot = {recordId: 'AB-0001'};
    const el = shallow(<LotDetail lot={lot} />);
    expect(el.find('h2').text()).to.be.match(/AB-0001/);
  });

  it('should display the lot product name', () => {
    const lot = {productName: 'Product 1'};
    const el = shallow(<LotDetail lot={lot} />);
    expect(el.find('p').text()).to.be.match(/Product 1/);
  });

  it('should display saving indicator if saving prop is there', () => {
    const lot = {saving: true};
    const el = shallow(<LotDetail lot={lot} />);
    expect(el.find('p').first().text()).to.be.match(/saving/i);
  });
});
