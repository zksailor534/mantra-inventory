const { describe, it } = global;
import { expect } from 'chai';
import { shallow } from 'enzyme';
import NewOrder from '../neworder';

describe('components.neworder', () => {
  it('should show the error if there are any', () => {
    const error = 'TheError';
    const el = shallow(<NewOrder error={error} />);
    expect(el.html()).to.match(/TheError/);
  });

  it('should display the create order form', () => {
    const el = shallow(<NewOrder />);
    const soNoRef = el.find('input').first();
    const customerNameRef = el.find('textarea').first();
    const button = el.find('button').first();

    expect(soNoRef.node.ref).to.be.equal('soNoRef');
    expect(customerNameRef.node.ref).to.be.equal('customerNameRef');
    expect(button.prop('onClick')).to.be.a('function');
  });

  it('should create a new order when click on the button', done => {
    const salesOrder = '1110001';
    const customerName = 'Company 1';

    const onCreate = (o, c) => {
      expect(o).to.be.equal(salesOrder);
      expect(c).to.be.equal(customerName);
      done();
    };

    const el = shallow(<NewOrder create={onCreate} />);
    const instance = el.instance();

    instance.refs = {
      soNoRef: {value: salesOrder},
      customerNameRef: {value: customerName}
    };

    el.find('button').simulate('click');
  });
});
