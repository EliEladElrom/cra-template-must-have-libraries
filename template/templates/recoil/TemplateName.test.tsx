/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/component/TemplateName/TemplateName.test.tsx

Created with;
$ npx generate-react-cli component TemplateName --type=recoil

*/

import React from 'react'
import { shallow } from 'enzyme'
import { RecoilRoot } from 'recoil'
import TemplateName from './TemplateName'

describe('<TemplateName />', () => {
  let component

  beforeEach(() => {
    component = shallow(<RecoilRoot><TemplateName /></RecoilRoot>)
  })

  test('It should mount', () => {
    expect(component.length).toBe(1)
  })
})
