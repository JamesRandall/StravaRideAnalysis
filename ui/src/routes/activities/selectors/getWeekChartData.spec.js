import React from 'react'
import getWeekChartData from '../selectors/getWeekChartData.js'

describe('selectors', () => {
    describe('getWeekChartData', () => {
        it('returns rounded week data as array', () => {
            const state = {
                activities: {
                    weeklySummary: {
                        monday: 1500,
                        tuesday: 1750,
                        wednesday: 6000,
                        thursday: 600,
                        friday: 12000,
                        saturday: 10000,
                        sunday: 15000
                    }
                }
            }

            const result = getWeekChartData(state)
            expect(result.map(x => x.distance)).toMatchArray([1.5,1.8,6,0.6,12,10,15])
            expect(result.map(x => x.label)).toMatchArray([
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday',
                'Sunday'
            ])
        })
    })
})
