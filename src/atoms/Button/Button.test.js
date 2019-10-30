import Button from './index'
import React from 'react'
import {shallow} from 'enzyme'

describe('Button', () => {
  it('should snapshot the button', () => {
    const component = shallow(<Button />)
    expect(component).toMatchSnapshot()
  })
})
