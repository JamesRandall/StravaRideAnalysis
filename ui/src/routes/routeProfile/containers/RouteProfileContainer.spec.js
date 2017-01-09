import React from 'react'
import { Provider } from 'react-redux'
import { mount } from 'enzyme'
import storeMock from '../../../testing/storeMock'

describe('containers', () => {
    describe('<RouteProfileContainer />', () => {
        jest.mock('../components/RouteProfile', () => () => 
            <div>Route profile</div>
        )
        const routeProfileMock = require('../components/RouteProfile')
        const RouteProfileContainer = require('./RouteProfileContainer').default

        it('sets undefined activity when there is no route for the activity', () => {
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
            const wrapper = mount(<Provider store={storeMock(storeState)}><RouteProfileContainer params={{id: 1}} /></Provider>)
            const routeProfile = wrapper.find(routeProfileMock)
            expect(routeProfile.props().activity).toBeUndefined()
        })

        it('sets activity when there is a route for the activity', () => {
            const storeState= {
                ui: {
                    isHttpRequestInProgress: true
                },
                activities: {
                    activityDetails: {
                        1: { name: 'An activity', route: [] }
                    }
                }
            }
            const wrapper = mount(<Provider store={storeMock(storeState)}><RouteProfileContainer params={{id: 1}} /></Provider>)
            const routeProfile = wrapper.find(routeProfileMock)
            expect(routeProfile.props().activity).toBeDefined()
        })

        it('sets isLoading to true when http request in progress', () => {
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
            const wrapper = mount(<Provider store={storeMock(storeState)}><RouteProfileContainer params={{id: 1}} /></Provider>)
            const routeProfile = wrapper.find(routeProfileMock)
            expect(routeProfile.props().isLoading).toBe(true)
        })

        it('sets isLoading to false when there is no http request in progress', () => {
            const storeState= {
                ui: {
                    isHttpRequestInProgress: false
                },
                activities: {
                    activityDetails: {
                        1: { name: 'An activity'}
                    }
                }
            }
            const wrapper = mount(<Provider store={storeMock(storeState)}><RouteProfileContainer params={{id: 1}} /></Provider>)
            const routeProfile = wrapper.find(routeProfileMock)
            expect(routeProfile.props().isLoading).toBe(false)
        })
    })
})
