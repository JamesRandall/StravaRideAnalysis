import React from 'react'
import App from './App'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

describe('components', () => {
    describe('<App />', () => {
        it('renders as expected', () => {
            // the below illustrates how to deal with components that require items in the React context
            const context = { router: { }}
            const component = shallow(<App isAuthenticated={true} />, { context })
            const tree = toJson(component)
            expect(tree).toMatchSnapshot()
        })
    })
})
