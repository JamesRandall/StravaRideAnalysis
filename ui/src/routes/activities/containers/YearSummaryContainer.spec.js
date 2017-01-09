import React from 'react'
import { Provider } from 'react-redux'
import { mount } from 'enzyme'
import { getActivitiesTestData } from '../../../testing/testData'
import storeMock from '../../../testing/storeMock'

describe('containers', () => {
    describe('<YearSummaryContainer />', () => {
        it('sets state properties for child component', () => {
            // set up a mock for the selector
            const result = [{distance: 1, label: 'January'}]
            const selectorFn = jest.fn((state) => result)
            jest.mock('../selectors/getYearChartData', () => selectorFn)
            require('../selectors/getYearChartData')
            // mock out the child component (required because of the rendering code in recharts)
            jest.mock('../components/YearSummary', () => () => 
                <div></div>
            )
            const mock = require('../components/YearSummary')
            const YearSummaryContainer = require('./YearSummaryContainer').default

            const wrapper = mount(<Provider store={storeMock({})}><YearSummaryContainer /></Provider>)
            const yearSummary = wrapper.find(mock)

            expect(selectorFn).toHaveBeenCalled()
            expect(yearSummary.props().yearData).toBe(result)
        })        
    })
})
