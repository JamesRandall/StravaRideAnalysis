import React from 'react'
import {mount} from 'enzyme'
import TokenResponse from './TokenResponse'
import toJson from 'enzyme-to-json'
import getRouterMock from '../../../testing/getRouterMock'

describe('components', () => {
    describe('<TokenResponse />', () => {
        it('redirects to dashboard after token translation', () => {
            let redirectPath
            const context = {
                router: getRouterMock({
                    push: jest.fn(p => redirectPath=p)
                })
            }
            const then = { then: (fn) => fn() }
            const mockTranslateAccessToken = jest.fn(token => then)
            const component =  mount(<TokenResponse location={{ query: { code: 'abc' }}} translateAccessToken={mockTranslateAccessToken} />, {context})
            expect(redirectPath).toBe('/dashboard')
        })
    })
})
