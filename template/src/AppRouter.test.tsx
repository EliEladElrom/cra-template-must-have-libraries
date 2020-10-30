import React from 'react'
import { shallow } from 'enzyme'
import AppRouter from './AppRouter'

describe('<AppRouter />', () => {
  let component

  beforeEach(() => {
    component = shallow(<AppRouter />)
  })

  test('renders without crashing', () => {
    const div = document.createElement('div')
    expect(component.length).toBe(1)
  })
})
