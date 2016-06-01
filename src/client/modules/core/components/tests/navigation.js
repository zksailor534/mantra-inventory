const { describe, it } = global;
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Navigation from '../navigation';

describe('components.navigations', () => {
  it('should contain a link to home', () => {
    const el = shallow(<Navigation />);
    const homeLink = el.find('a').at(0);
    expect(homeLink.text()).to.be.equal('Home');
    expect(homeLink.prop('href')).to.be.equal('/');
  });

  it('should contain a link to inventory', () => {
    const el = shallow(<Navigation />);
    const homeLink = el.find('a').at(0);
    expect(homeLink.text()).to.be.equal('Inventory');
    expect(homeLink.prop('href')).to.be.equal('/inventory/list');
  });

  it('should contain a link to create a new lot', () => {
    const el = shallow(<Navigation />);
    const newPostLink = el.find('a').at(1);
    expect(newPostLink.text()).to.be.equal('New Lot');
    expect(newPostLink.prop('href')).to.be.equal('/inventory/new');
  });
});
