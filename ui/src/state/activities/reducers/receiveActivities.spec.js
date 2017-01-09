import receiveActivities from './receiveActivities'
import { RECEIVE_ACTIVITIES } from '../constants'
import { getActivitiesTestData } from '../../../testing/testData.js'

describe('process activities into store', () => {
    function addDays(date, days) {
        var result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
    }

    it('replaces existing activities', () => {
        const now = new Date()
        const existingState = { summaries: [ 1 ] }
        const result = receiveActivities(existingState, {
            type: RECEIVE_ACTIVITIES,
            activities: [{
                startDate: now,
                distance: 1
            }],
            replace: true
        })

        expect(existingState.summaries.length).toBe(1)
        expect(existingState.summaries[0]).toBe(1)
        expect(result.summaries.length).toBe(1)
        expect(result.summaries).toContainEqual({distance: 1, startDate: now})
    })

    it('appends to existing activities', () => {
        const now = new Date()
        const yesterday = addDays(now, -1)
        const existingState = {
            summaries: [
                {
                    startDate: yesterday,
                    distance: 2
                }
            ]
        }
        
        const result = receiveActivities(existingState, {
            type: RECEIVE_ACTIVITIES,
            activities: [{
                startDate: now,
                distance: 1
            }],
            replace: false
        })

        expect(existingState.summaries.length).toBe(1)
        expect(existingState.summaries[0].distance).toBe(2)
        expect(result.summaries.length).toBe(2)
        expect(result.summaries).toContainEqual({distance: 1, startDate: now})
        expect(result.summaries).toContainEqual({distance: 2, startDate: yesterday})
    })

    it('builds week summaries', () => {
        const result = receiveActivities({}, {
            type: RECEIVE_ACTIVITIES,
            activities: [
                { startDate: new Date(2016,10,28), distance: 3 }, // monday 
                { startDate: new Date(2016,10,29), distance: 10 }, // tuesday
                { startDate: new Date(2016,10,30), distance: 2 }, // wednesday
                { startDate: new Date(2016,11,1), distance: 9 }, // thursday
                { startDate: new Date(2016,11,2), distance: 20 }, // friday
                { startDate: new Date(2016,11,3), distance: 12 }, // saturday
                { startDate: new Date(2016,11,4), distance: 5 }, // sunday
            ],
            replace: true,
            effectiveDate: new Date(2016,11,4)
        })

        expect(result.weeklySummary.monday).toBe(3)
        expect(result.weeklySummary.tuesday).toBe(10)
        expect(result.weeklySummary.wednesday).toBe(2)
        expect(result.weeklySummary.thursday).toBe(9)
        expect(result.weeklySummary.friday).toBe(20)
        expect(result.weeklySummary.saturday).toBe(12)
        expect(result.weeklySummary.sunday).toBe(5)
    })

    it ('builds monthly totals', () => {
        const result = receiveActivities({}, {
            type: RECEIVE_ACTIVITIES,
            activities: getActivitiesTestData(),
            replace: true,
            effectiveDate: new Date(2016,11,4)
        })
        
        expect(result.monthlySummary.january).toBe(2)
        expect(result.monthlySummary.february).toBe(4)
        expect(result.monthlySummary.march).toBe(6)
        expect(result.monthlySummary.april).toBe(8)
        expect(result.monthlySummary.may).toBe(10)
        expect(result.monthlySummary.june).toBe(12)
        expect(result.monthlySummary.july).toBe(14)
        expect(result.monthlySummary.august).toBe(16)
        expect(result.monthlySummary.september).toBe(18)
        expect(result.monthlySummary.october).toBe(20)
        expect(result.monthlySummary.november).toBe(22)
        expect(result.monthlySummary.december).toBe(24)
    })
})