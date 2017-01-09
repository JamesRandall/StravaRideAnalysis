import React from 'react'
import {shallow} from 'enzyme'
import InProgressBar from './InProgressBar'
import toJson from 'enzyme-to-json'

describe('components', () => {
    describe('<InProgressBar />', () => {
        it('renders as expected', () => {
            const component =  shallow(<InProgressBar inProgress={true} />)
            const tree = toJson(component)
            expect(tree).toMatchSnapshot()
        })
    })
})

