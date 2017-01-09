import receiveRoute from './receiveRoute'
import { RECEIVE_ROUTE } from '../constants'

describe('process route into store', () => {
    it('adds new activity when not exists', () => {
        const existingState = {
            activityDetails: { }
        }
        const newState = receiveRoute(existingState, { type: RECEIVE_ROUTE, activity: { id: 123, title: 'hello' }})
        expect(existingState.activityDetails[123]).toBeUndefined()
        expect(newState.activityDetails[123].title).toBe('hello')
    }),
    it('sets route property on existing activity', () => {
        const existingState = {
            activityDetails: {
                '123': { id: 123, title: 'hello' }
            }
        }
        const newState = receiveRoute(existingState, { type: RECEIVE_ROUTE, activity: { id: 123, title: 'hello', route: 'something' }})
        expect(existingState.activityDetails[123].route).toBeUndefined()
        expect(newState.activityDetails[123].route).toBe('something')
    })
})