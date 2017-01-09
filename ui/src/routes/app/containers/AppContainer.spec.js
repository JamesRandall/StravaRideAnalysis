import React from 'react'
import { Provider } from 'react-redux'
import { mount } from 'enzyme'
import storeMock from '../../../testing/storeMock'

describe('containers', () => {
    describe('<AppContainer />', () => {
        jest.mock('../components/App', () => () => 
            <div>App</div>
        )
        const appMock = require('../components/App')
        const AppContainer = require('./AppContainer').default

        it('sets isAuthenticated to true when there is an access token', () => {
            const storeState= {
                auth: {
                    accessToken: 'atoken'
                }
            }
            const wrapper = mount(<Provider store={storeMock(storeState)}><AppContainer /></Provider>)
            const app = wrapper.find(appMock)
            expect(app.props().isAuthenticated).toBe(true)
        })

        it('sets isAuthenticated to true when there is no access token', () => {
            const storeState= {
                auth: {
                    
                }
            }
            const wrapper = mount(<Provider store={storeMock(storeState)}><AppContainer /></Provider>)
            const app = wrapper.find(appMock)
            expect(app.props().isAuthenticated).toBe(false)
        })
    })
})
