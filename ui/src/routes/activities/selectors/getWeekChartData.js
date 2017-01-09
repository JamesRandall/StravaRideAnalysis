import { createSelector } from 'reselect'

const getWeeklySummary = (state) => state.activities.weeklySummary

const getWeekChartData = createSelector(
    [getWeeklySummary],
    (weeklySummary) => {
        const weekLabels = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" ]
        const weekData = [
            Math.round(weeklySummary.monday/100)/10,
            Math.round(weeklySummary.tuesday/100)/10,
            Math.round(weeklySummary.wednesday/100)/10,
            Math.round(weeklySummary.thursday/100)/10,
            Math.round(weeklySummary.friday/100)/10,
            Math.round(weeklySummary.saturday/100)/10,
            Math.round(weeklySummary.sunday/100)/10]
        return weekData.map((d,i) => {
            return { 'distance': d, label: weekLabels[i] }
        })
    }
)

export default getWeekChartData