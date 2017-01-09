import React from 'react'
import WeekSummary from './WeekSummary'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

describe('components', () => {
    describe('<WeekSummary />', () => {
        it('renders as expected', () => {
            const weekData = [
                { distance: 1, label: 'Monday' },
                { distance: 2, label: 'Tuesday' },
                { distance: 3, label: 'Wednesday' },
                { distance: 4, label: 'Thursday' },
                { distance: 5, label: 'Friday' },
                { distance: 6, label: 'Saturday' },
                { distance: 7, label: 'Sunday' },
            ]

            const component = shallow(<WeekSummary weekData={weekData} />)
            const tree = toJson(component)
            expect(tree).toMatchSnapshot()
        })
    })
})