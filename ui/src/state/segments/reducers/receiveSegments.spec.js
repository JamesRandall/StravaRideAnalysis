import receiveSegments from './receiveSegments'
import { RECEIVE_SEGMENTS } from '../constants'

describe('process segments into store', () => {
    it('adds new activity when not exists', () => {
        const existingState = {
            activityDetails: { }
        }
        const newState = receiveSegments(existingState, { type: RECEIVE_SEGMENTS, activity: { id: 123, title: 'hello' }})
        expect(existingState.activityDetails[123]).toBeUndefined()
        expect(newState.activityDetails[123].title).toBe('hello')
    }),
    it('sets route property on existing activity', () => {
        const existingState = {
            activityDetails: {
                '123': { id: 123, title: 'hello' }
            }
        }
        const newState = receiveSegments(existingState, { type: RECEIVE_SEGMENTS, activity: { id: 123, title: 'hello', segmentEfforts: 'something' }})
        expect(existingState.activityDetails[123].route).toBeUndefined()
        expect(newState.activityDetails[123].segmentEfforts).toBe('something')
    })
})
