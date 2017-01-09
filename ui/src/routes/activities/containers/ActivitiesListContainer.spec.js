import React from 'react'
import { Provider } from 'react-redux'
import { mount } from 'enzyme'
import ActivitiesListContainer from './ActivitiesListContainer'
import ActivitiesList from '../components/ActivitiesList'
import { getActivitiesTestData } from '../../../testing/testData'
import storeMock from '../../../testing/storeMock'

describe("containers", () => {
    const storeState = {
        activities: {
            summaries: getActivitiesTestData()
        }
    }

    describe("ActivitiesListContainer", () => {
        it("configures component for first page", () => {
            const moveNext = () => 0
            const movePrevious = () => 0
            const wrapper = mount(<Provider store={storeMock(storeState)}><ActivitiesListContainer pageSize={2} page={0} moveNext={moveNext} movePrevious={movePrevious} /></Provider>)
            const activitiesList = wrapper.find(ActivitiesList)

            expect(activitiesList.props().canMovePrevious).toBe(false)
            expect(activitiesList.props().canMoveNext).toBe(true)
            expect(activitiesList.props().moveNext).toBe(moveNext)
            expect(activitiesList.props().movePrevious).toBe(movePrevious)
            expect(activitiesList.props().activities.length).toBe(2)
        })

        it("configures component for last page", () => {
            const moveNext = () => 0
            const movePrevious = () => 0
            const wrapper = mount(<Provider store={storeMock(storeState)}><ActivitiesListContainer pageSize={2} page={11} moveNext={moveNext} movePrevious={movePrevious} /></Provider>)
            const activitiesList = wrapper.find(ActivitiesList)

            expect(activitiesList.props().canMovePrevious).toBe(true)
            expect(activitiesList.props().canMoveNext).toBe(false)
            expect(activitiesList.props().moveNext).toBe(moveNext)
            expect(activitiesList.props().movePrevious).toBe(movePrevious)
            expect(activitiesList.props().activities.length).toBe(2)
        })
    })
})
