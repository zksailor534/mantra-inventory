const { describe, it } = global;
import { expect } from 'chai';
import { shallow } from 'enzyme';
import MainLayout from '../layout.main';
import Navigation from '../navigations';

describe('components.layouts.main', () => {
  it('should contain navigations', () => {
    const el = shallow(<MainLayout />);
    expect(el.contains(<Navigation />)).to.be.equal(true);
  });

  it('should render childrens', () => {
    const Comp = () => (<p>Hello</p>);
    const el = shallow(
      <MainLayout content={() => (<Comp />)}/>
    );

    expect(el.contains(<Comp />)).to.be.equal(true);
  });
});
