import { createSelector } from 'reselect'

const getMonthlySummary = (state) => state.activities.monthlySummary

const getYearChartData = createSelector(
    [getMonthlySummary],
    (monthlySummary) => {
        const monthData = [
            monthlySummary.january,
            monthlySummary.february,
            monthlySummary.march,
            monthlySummary.april,
            monthlySummary.may,
            monthlySummary.june,
            monthlySummary.july,
            monthlySummary.august,
            monthlySummary.september,
            monthlySummary.october,
            monthlySummary.november,
            monthlySummary.december
        ]
        const cumulativeMonthData = []
        for (let monthIndex = 0; monthIndex < monthData.length; monthIndex++) {
            cumulativeMonthData.push(monthData.slice(0, monthIndex+1).reduce((p,c) => p+c, 0))
        }

        const yearLabels = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        const result = cumulativeMonthData.map((d,i) => { return { distance: Math.round(d/100)/10, label: yearLabels[i] } } )
        return result
    }
)

export default getYearChartData