import React from 'react'
import {shallow} from 'enzyme'
import SignInButton from './SignInButton'
import toJson from 'enzyme-to-json'

describe('components', () => {
    describe('<SignInButton />', () => {
        it('renders as expected', () => {
            const component =  shallow(<SignInButton />)
            const tree = toJson(component)
            expect(tree).toMatchSnapshot()
        })
    })
})