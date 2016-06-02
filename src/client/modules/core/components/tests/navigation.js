const { describe, it } = global;
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Navigation from '../navigation';

describe('components.navigation', () => {
  it('should contain a link to home', () => {
    const el = shallow(<Navigation />);
    const homeLink = el.find('a').at(0);
    expect(homeLink.text()).to.be.equal('Home');
    expect(homeLink.prop('href')).to.be.equal('/');
  });

  it('should contain a link to inventory', () => {
    const el = shallow(<Navigation />);
    const inventoryLink = el.find('a').at(0);
    expect(inventoryLink.text()).to.be.equal('Inventory');
    expect(inventoryLink.prop('href')).to.be.equal('/inventory/list');
  });

  it('should contain a link to create a new lot', () => {
    const el = shallow(<Navigation />);
    const newLotLink = el.find('a').at(1);
    expect(newLotLink.text()).to.be.equal('New Lot');
    expect(newLotLink.prop('href')).to.be.equal('/inventory/new');
  });
});
