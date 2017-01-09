import React from 'react'
import { Provider } from 'react-redux'
import { mount } from 'enzyme'
import storeMock from '../../../testing/storeMock'
import getRouterMock from '../../../testing/getRouterMock'
import SignInGuest from '../components/SignInGuest'
import SignInGuestContainer from './SignInGuestContainer'

describe('containers', () => {
    describe('<SignInGuestContainer />', () => {
        it('sign in redirects to dashboard', () => {
            const storeState= {
                
            }
            const store = storeMock(storeState)
            const pushMock = jest.fn()
            let redirectPath
            const context = {
                router: getRouterMock({
                    push: jest.fn(p => {
                        redirectPath=p
                    })
                })
            }

            const wrapper = mount(<Provider store={store}><SignInGuestContainer router={context.router} /></Provider>, {context})
            const signInGuest = wrapper.find(SignInGuest)
            signInGuest.simulate('click')

            expect(redirectPath).toBe('/dashboard')
        })
    })
})
