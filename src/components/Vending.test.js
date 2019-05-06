import React from 'react';
import Vending from './Vending';
import  {configure, shallow }from 'enzyme';
import  Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


describe('<Vending />', () => {

  it('Available chocolate test $1', () => {
    const wrapper = shallow(<Vending />);

    wrapper.instance().showAvailableChocolate(1);

    expect(wrapper.instance().state.chocolates[0].enoughMoney).toBe(false);
    expect(wrapper.instance().state.chocolates[1].enoughMoney).toBe(false);
    expect(wrapper.instance().state.chocolates[2].enoughMoney).toBe(false);
    expect(wrapper.instance().state.chocolates[3].enoughMoney).toBe(false);
    expect(wrapper.instance().state.chocolates[4].enoughMoney).toBe(false);
  });

  it('Available chocolate test $2.1', () => {
    const wrapper = shallow(<Vending />);

    wrapper.instance().showAvailableChocolate(2.1);

    expect(wrapper.instance().state.chocolates[0].enoughMoney).toBe(false);
    expect(wrapper.instance().state.chocolates[1].enoughMoney).toBe(false);
    expect(wrapper.instance().state.chocolates[2].enoughMoney).toBe(true);
    expect(wrapper.instance().state.chocolates[3].enoughMoney).toBe(false);
    expect(wrapper.instance().state.chocolates[4].enoughMoney).toBe(false);
  });

  it('Available chocolate test $3.3', () => {
    const wrapper = shallow(<Vending />);

    wrapper.instance().showAvailableChocolate(3.3);

    expect(wrapper.instance().state.chocolates[0].enoughMoney).toBe(true);
    expect(wrapper.instance().state.chocolates[1].enoughMoney).toBe(true);
    expect(wrapper.instance().state.chocolates[2].enoughMoney).toBe(true);
    expect(wrapper.instance().state.chocolates[3].enoughMoney).toBe(false);
    expect(wrapper.instance().state.chocolates[4].enoughMoney).toBe(false);
  });

  it('Available chocolate test $4', () => {
    const wrapper = shallow(<Vending />);

    wrapper.instance().showAvailableChocolate(4);

    expect(wrapper.instance().state.chocolates[0].enoughMoney).toBe(true);
    expect(wrapper.instance().state.chocolates[1].enoughMoney).toBe(true);
    expect(wrapper.instance().state.chocolates[2].enoughMoney).toBe(true);
    expect(wrapper.instance().state.chocolates[3].enoughMoney).toBe(true);
    expect(wrapper.instance().state.chocolates[4].enoughMoney).toBe(true);
  });

});
