import React from 'react'
import Header from './Header'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

describe('components', () => {
    describe('<Header />', () => {
        it('renders with a sign out link when authenticated', () => {
            const component = shallow(<Header isAuthenticated={true} />)
            const tree = toJson(component)
            expect(tree).toMatchSnapshot()
        })
    })

    describe('<Header />', () => {
        it('renders with no sign out link when unauthenticated', () => {
            const component = shallow(<Header isAuthenticated={false} />)
            const tree = toJson(component)
            expect(tree).toMatchSnapshot()
        })
    })
})
