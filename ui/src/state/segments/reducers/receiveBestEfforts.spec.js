import receiveBestEfforts from './receiveBestEfforts'
import { RECEIVE_BEST_EFFORTS } from '../constants'

describe('process best efforts into store', () => {
    it('sets efforts on activity', () => {
        const existingState = {
            activityDetails: {
                '123': { id: 123, title: 'hello' }
            }
        }
        const newState = receiveBestEfforts(existingState, { type: RECEIVE_BEST_EFFORTS, activityId: 123, efforts: [1,2]})
        expect(existingState.activityDetails[123].bestEfforts).toBeUndefined()
        expect(newState.activityDetails[123].bestEfforts).toContain(1)
        expect(newState.activityDetails[123].bestEfforts).toContain(2)        
    })

    it('merges best efforts into cache', () => {
        const existingState = {
            activityDetails: {
                '123': { id: 123, title: 'hello' }
            },
            bestSegmentEfforts: { '1': { segmentId: 1, time: 5}, '2': { segmentId: 2, time: 7} }            
        }
        const newState = receiveBestEfforts(existingState, { type: RECEIVE_BEST_EFFORTS, activityId: 123, efforts: [
            { segmentId: 1, time: 10 },
            { segmentId: 3, time: 9}
        ]})
        expect(existingState.bestSegmentEfforts[1].time).toBe(5)
        expect(existingState.bestSegmentEfforts[2].time).toBe(7)
        expect(existingState.bestSegmentEfforts[3]).toBeUndefined()
        expect(newState.bestSegmentEfforts[1].time).toBe(10)
        expect(newState.bestSegmentEfforts[2].time).toBe(7)
        expect(newState.bestSegmentEfforts[3].time).toBe(9)
    })
})