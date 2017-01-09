import React from 'react'
import { Provider } from 'react-redux'
import { mount } from 'enzyme'
import storeMock from '../../../testing/storeMock'

describe('containers', () => {
    describe('<HeaderContainer />', () => {
        jest.mock('../components/Header', () => () => 
            <div>Header</div>
        )
        const headerMock = require('../components/Header')
        const HeaderContainer = require('./HeaderContainer').default

        it('sets isAuthenticated to true when there is an access token', () => {
            const storeState= {
                auth: {
                    accessToken: 'atoken'
                }
            }
            const wrapper = mount(<Provider store={storeMock(storeState)}><HeaderContainer /></Provider>)
            const header = wrapper.find(headerMock)
            expect(header.props().isAuthenticated).toBe(true)
        })

        it('sets isAuthenticated to true when there is no access token', () => {
            const storeState= {
                auth: {
                    
                }
            }
            const wrapper = mount(<Provider store={storeMock(storeState)}><HeaderContainer /></Provider>)
            const header = wrapper.find(headerMock)
            expect(header.props().isAuthenticated).toBe(false)
        })
    })
})
