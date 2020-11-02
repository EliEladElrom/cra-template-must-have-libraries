// src/App.test.tsx
import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

describe('<App />', () => {
  let component

  beforeEach(() => {
    component = shallow(<App />)
  })
  test('It should mount', () => {
    expect(component.length).toBe(1)
  })
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
