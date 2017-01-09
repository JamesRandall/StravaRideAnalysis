import React from 'react'
import getYearChartData from '../selectors/getYearChartData.js'

describe('selectors', () => {
    describe('getYearChartData', () => {
        it('returns rounded week data as array', () => {
            const state = {
                activities: {
                    monthlySummary: {
                        january: 1000,
                        february: 2000,
                        march: 4000,
                        april: 8000,
                        may: 16000,
                        june: 32000,
                        july: 64000,
                        august: 128000,
                        september: 256000,
                        october: 512000,
                        november: 1024000,
                        december: 2048000
                    }
                }
            }

            const result = getYearChartData(state)
            expect(result.map(x => x.distance)).toMatchArray([1,3,7,15,31,63,127,255,511,1023,2047,4095])
            expect(result.map(x => x.label)).toMatchArray([
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
                'August',
                'September',
                'October',
                'November',
                'December'
            ])
        })
    })
})
