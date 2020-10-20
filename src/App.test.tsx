import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

test('renders learn react link', () => {
  const { getByText } = render(<App />)
  const linkElement = getByText(/Eli Elad Elrom - React Tutorials/i)
  expect(linkElement).toBeInTheDocument()
})

/*
Update this file once it's changed.  For instance to check if a component you added
include in App.tsx;

import { shallow } from "enzyme";
import Calculator from "./components/SomeComponent/SomeComponent";

test('should render SomeComponent', () => {
  const wrapper = shallow(<App />);
  const calculator = wrapper.find(SomeComponent);
  expect(calculator.exists()).toBe(true);
})
 */
