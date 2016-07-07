const { describe, it } = global;
import { expect } from 'chai';
import { shallow } from 'enzyme';
import OrderDetail from '../orderdetail';

describe('components.orderdetail', () => {
  it('should display the order number', () => {
    const order = {orderNo: '111001'};
    const el = shallow(<OrderDetail order={order} />);
    expect(el.find('h2').text()).to.be.match(/111001/);
  });

  it('should display the order customer name', () => {
    const order = {customerName: 'Company 1'};
    const el = shallow(<OrderDetail order={order} />);
    expect(el.find('p').text()).to.be.match(/Company 1/);
  });

  it('should display saving indicator if saving prop is there', () => {
    const order = {saving: true};
    const el = shallow(<OrderDetail order={order} />);
    expect(el.find('p').first().text()).to.be.match(/saving/i);
  });
});
