import React from 'react'
import { Provider } from 'react-redux'
import { mount } from 'enzyme'
import storeMock from '../../../testing/storeMock'

describe('containers', () => {
    describe('<InProgressBarContainer />', () => {
        jest.mock('../components/InProgressBar', () => () => 
            <div>In Progress</div>
        )
        const inProgressBarMock = require('../components/InProgressBar')
        const InProgressBarContainer = require('./InProgressBarContainer').default

        it('sets inProgress to true when http request in progress', () => {
            const storeState= {
                ui: {
                    isHttpRequestInProgress: true
                }
            }
            const wrapper = mount(<Provider store={storeMock(storeState)}><InProgressBarContainer /></Provider>)
            const inProgressBar = wrapper.find(inProgressBarMock)
            expect(inProgressBar.props().inProgress).toBe(true)
        })

        it('sets inProgress to false when http request not in progress', () => {
            const storeState= {
                ui: {
                    isHttpRequestInProgress: false
                }
            }
            const wrapper = mount(<Provider store={storeMock(storeState)}><InProgressBarContainer /></Provider>)
            const inProgressBar = wrapper.find(inProgressBarMock)
            expect(inProgressBar.props().inProgress).toBe(false)
        })
    })
})
