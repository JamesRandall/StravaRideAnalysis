import React from 'react'
import YearSummary from './YearSummary'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

describe('components', () => {
    describe('<WeekSummary />', () => {
        it('renders as expected', () => {
            const yearData = [
                { distance: 1, label: 'January' },
                { distance: 2, label: 'February' },
                { distance: 3, label: 'March' },
                { distance: 4, label: 'April' },
                { distance: 5, label: 'May' },
                { distance: 6, label: 'June' },
                { distance: 7, label: 'July' },
                { distance: 12, label: 'August' },
                { distance: 13, label: 'September' },
                { distance: 14, label: 'October' },
                { distance: 15, label: 'November' },
                { distance: 16, label: 'December' },
            ]

            const component = shallow(<YearSummary yearData={yearData} />)
            const tree = toJson(component)
            expect(tree).toMatchSnapshot()
        })
    })
})