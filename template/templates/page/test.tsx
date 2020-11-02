import React from 'react';
import { shallow } from 'enzyme';
import TemplateName from './TemplateName';

const routeComponentPropsMock = {
  history: {
    location: {
      pathname: '/TemplateName'
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } as any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  location: {} as any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  match: {} as any,
}
describe('<TemplateName />', () => {
  let component

  beforeEach(() => {
    component = shallow(<TemplateName {...routeComponentPropsMock} />)
  })

  test('It should mount', () => {
    expect(component.length).toBe(1)
  })
})
