import React from 'react'
import renderer from 'react-test-renderer'
import { getActivity } from '../../../testing/testData'

describe('components', () => {
    describe('<ActivitySummary />', () => {
        jest.mock('../containers/YearSummaryContainer', () => () => 
            <div>Year Summary</div>
        )
        require('../containers/YearSummaryContainer')
        jest.mock('../containers/WeekSummaryContainer', () => () => 
            <div>Week Summary</div>
        )
        require('../containers/WeekSummaryContainer')

        const ActivitySummary = require('./ActivitySummary').default

        it('renders as expected', () => {
            const component = renderer.create(<ActivitySummary />)
            const tree = component.toJSON()
            expect(tree).toMatchSnapshot()
        })
    })
})
