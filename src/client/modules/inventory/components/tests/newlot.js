const { describe, it } = global;
import { expect } from 'chai';
import { shallow } from 'enzyme';
import NewLot from '../newlot';

describe('components.newlot', () => {
  it('should show the error if there are any', () => {
    const error = 'TheError';
    const el = shallow(<NewLot error={error} />);
    expect(el.html()).to.match(/TheError/);
  });

  it('should display the create lot form', () => {
    const el = shallow(<NewLot />);
    const recordId = el.find('input').first();
    const productName = el.find('textarea').first();
    const button = el.find('button').first();

    expect(recordId.node.ref).to.be.equal('titleRef');
    expect(productName.node.ref).to.be.equal('contentRef');
    expect(button.prop('onClick')).to.be.a('function');
  });

  it('should create a new lot when click on the button', done => {
    const recordId = 'AB-0001';
    const productName = 'Product 1';

    const onCreate = (r, p) => {
      expect(r).to.be.equal(recordId);
      expect(p).to.be.equal(productName);
      done();
    };

    const el = shallow(<NewLot create={onCreate} />);
    const instance = el.instance();

    instance.refs = {
      recIdRef: {value: recordId},
      prodNameRef: {value: productName}
    };

    el.find('button').simulate('click');
  });
});
