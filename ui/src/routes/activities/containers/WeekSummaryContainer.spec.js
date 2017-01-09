import React from 'react'
import { Provider } from 'react-redux'
import { mount } from 'enzyme'
import { getActivitiesTestData } from '../../../testing/testData'
import storeMock from '../../../testing/storeMock'
/*
describe('containers', () => {
    const storeState = {
        activities: {
            weeklySummary: {
                monday: 1000,
                tuesday: 2000,
                wednesday: 4000,
                thursday: 8000,
                friday: 16000,
                saturday: 32000,
                sunday: 64000
            }
        }
    }

    // we need to use the deep full DOM mount of enzyme to pick up the configured sub-component but we don't
    // want it to render further as it includes chart code that won't work in the non browser dom and so we
    // mock out the component
    jest.mock('../components/WeekSummary', () => () => 
        <div></div>
    )
    const mock = require('../components/WeekSummary')
    const WeekSummaryContainer = require('./WeekSummaryContainer').default

    describe('<WeekSummaryContainer />', () => {
        it('sets property for week data', () => {
            const wrapper = mount(<Provider store={storeMock(storeState)}><WeekSummaryContainer /></Provider>)
            const weekSummary = wrapper.find(mock)
            expect(weekSummary.props().weekData).toMatchArray([1,2,4,8,16,32,64], (v1, v2) => v1.distance === v2)
            expect(weekSummary.props().weekData).toMatchArray(['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'], (v1, v2) => v1.label === v2)            
        })   
    })
})*/

describe('containers', () => {
    describe('<WeekSummaryContainer />', () => {
        it('sets state properties for child component', () => {
            // set up a mock for the selector
            const result = [{distance: 1, label: 'Monday'}]
            const selectorFn = jest.fn((state) => result)
            jest.mock('../selectors/getWeekChartData', () => selectorFn)
            require('../selectors/getWeekChartData')
            // mock out the child component (required because of the rendering code in recharts)
            jest.mock('../components/WeekSummary', () => () => 
                <div></div>
            )
            const mock = require('../components/WeekSummary')
            const WeekSummaryContainer = require('./WeekSummaryContainer').default

            const wrapper = mount(<Provider store={storeMock({})}><WeekSummaryContainer /></Provider>)
            const weekSummary = wrapper.find(mock)

            expect(selectorFn).toHaveBeenCalled()
            expect(weekSummary.props().weekData).toBe(result)
        })        
    })
})
