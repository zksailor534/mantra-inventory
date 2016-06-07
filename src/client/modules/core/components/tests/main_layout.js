const { describe, it } = global;
import { expect } from 'chai';
import { shallow } from 'enzyme';
import MainLayout from '../main_layout';
import Navigation from '../navigations';

describe('components.layouts.main', () => {
  it('should contain navigation', () => {
    const el = shallow(<MainLayout />);
    expect(el.contains(<Navigation />)).to.be.equal(true);
  });

  it('should render children', () => {
    const Comp = () => (<p>Hello</p>);
    const el = shallow(
      <MainLayout content={() => (<Comp />)}/>
    );

    expect(el.contains(<Comp />)).to.be.equal(true);
  });
});
