import React from 'react'
import {mount} from 'enzyme'
import SignOut from './SignOut'
import toJson from 'enzyme-to-json'
import getRouterMock from '../../../testing/getRouterMock'

describe('components', () => {
    describe('<SignOut />', () => {
        it('signs out when mounted', () => {
            const mockSignOutFn = jest.fn()
            let redirectPath
            const mockRouterPush = jest.fn(p => redirectPath=p)
            const context = {
                router: getRouterMock({
                    push: mockRouterPush
                })
            }
            const component =  mount(<SignOut signOut={mockSignOutFn} />, {context})
            expect(mockSignOutFn).toHaveBeenCalled()
            expect(redirectPath).toBe('/')
        })
    })
})
