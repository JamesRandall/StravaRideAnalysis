import React from 'react'
import { Provider } from 'react-redux'
import { mount } from 'enzyme'
import storeMock from '../../../testing/storeMock'

describe('containers', () => {
    describe('<CompareSegmentsContainer />', () => {
        function setupMocks() {
            jest.mock('../../../state/segments/actions/fetchBestEfforts', () => {
                return jest.fn(() => { return { then: (fn) => fn() } })
            })
            const fetchBestEffortsMock = require('../../../state/segments/actions/fetchBestEfforts')
            
            jest.mock('../../../state/segments/actions/fetchSegments', () => {
                return jest.fn(() => { return { then: (fn) => fn({ activity: { }} ) } })
            })
            const fetchSegmentsMock = require('../../../state/segments/actions/fetchSegments')

            jest.mock('../components/CompareSegments', () => () => 
                <div>Route profile</div>
            )
            const compareSegmentsMock = require('../components/CompareSegments')
            const CompareSegmentsContainer = require('./CompareSegmentsContainer').default

            return { compareSegmentsMock, CompareSegmentsContainer, fetchSegmentsMock, fetchBestEffortsMock }
        }
        

        it('sets isloading to true and data to undefined when full state not present in store', () => {
            const { compareSegmentsMock, CompareSegmentsContainer} = setupMocks()

            const storeState= {
                ui: {
                    isHttpRequestInProgress: true
                },
                activities: {
                    activityDetails: {
                        1: { name: 'An activity'}
                    }
                }
            }
            const store = storeMock(storeState, {
                dispatch: (a) => a
            })
            const wrapper = mount(<Provider store={store}><CompareSegmentsContainer params={{id: 1}} /></Provider>)
            const compareSegments = wrapper.find(compareSegmentsMock)
            expect(compareSegments.props().activity).toBeUndefined()
            expect(compareSegments.props().segmentData).toBeUndefined()
            expect(compareSegments.props().isLoading).toBe(true)
        })

        it('correctly builds segment data', () => {
            const { compareSegmentsMock, CompareSegmentsContainer} = setupMocks()

            const storeState= {
                ui: {
                    isHttpRequestInProgress: false
                },
                activities: {
                    activityDetails: {
                        1: {
                            name: 'An activity',
                            segmentEfforts: [{name: 'A segment', elapsedTime: 250 }],
                            bestEfforts: [{name: 'A segment', elapsedTime: 100}]
                        }
                    }
                }
            }
            const store = storeMock(storeState, {
                dispatch: (a) => a
            })
            const wrapper = mount(<Provider store={store}><CompareSegmentsContainer params={{id: 1}} /></Provider>)
            const compareSegments = wrapper.find(compareSegmentsMock)
            const segmentData = compareSegments.props().segmentData
            expect(segmentData.length).toBe(1)
            expect(segmentData[0].actual).toBe(250)
            expect(segmentData[0].best).toBe(100)
            expect(segmentData[0].name).toBe('A segment')
        })

        it('fetches segments when not already loaded', () => {
            const { compareSegmentsMock, CompareSegmentsContainer, fetchSegmentsMock, fetchBestEffortsMock} = setupMocks()

            const storeState= {
                ui: {
                    isHttpRequestInProgress: false
                },
                activities: {
                    activityDetails: {
                        1: {
                            name: 'An activity'
                        }
                    }
                }
            }
            const store = storeMock(storeState, {
                dispatch: (a) => a
            })
            const wrapper = mount(<Provider store={store}><CompareSegmentsContainer params={{id: 1}} /></Provider>)
            const compareSegments = wrapper.find(compareSegmentsMock)

            expect(fetchSegmentsMock).toHaveBeenCalled()
            expect(fetchBestEffortsMock).toHaveBeenCalled()
        })
    })
})
