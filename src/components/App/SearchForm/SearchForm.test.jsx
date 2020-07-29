import React from 'react';
import { shallow } from 'enzyme';
import SearchForm from './SearchForm';

describe('SearchForm component', () => {
  let handleChange;
  let handleSubmit;
  let wrapper;

  beforeEach(() => {
    handleChange = jest.fn();
    handleSubmit = jest.fn();
    wrapper = shallow(<SearchForm
      artistName="beyonce"
      onChange={handleChange}
      onSubmit={handleSubmit}
    />);
  });

  it('has an input with a value set to artistName', () => {
    expect(wrapper.find('input[name="artistName"]').prop('value')).toEqual('beyonce');
  });

  it('invokes an onChange prop when the artistName input changes', () => {
    wrapper.find('input[name="artistName"]').simulate('change');
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('invokes an onSubmit prop when submit button is clicked', () => {
    wrapper.find('form').simulate('submit');
    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });

  it('renders the SearchForm component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
