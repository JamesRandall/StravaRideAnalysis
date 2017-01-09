import React from 'react'
import {shallow} from 'enzyme'
import GetStarted from './GetStarted'
import toJson from 'enzyme-to-json'

describe('components', () => {
    describe('<GetStarted />', () => {
        it('renders as expected', () => {
            const component =  shallow(<GetStarted />)
            const tree = toJson(component)
            expect(tree).toMatchSnapshot()
        })
    })
})