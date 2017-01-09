import React from 'react'
import {shallow} from 'enzyme'
import SignInGuest from './SignInGuest'
import toJson from 'enzyme-to-json'

describe('components', () => {
    describe('<SignInGuest />', () => {
        it('renders as expected', () => {
            const component =  shallow(<SignInGuest />)
            const tree = toJson(component)
            expect(tree).toMatchSnapshot()
        })
    })
})