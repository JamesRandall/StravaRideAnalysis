import { connect } from 'react-redux'
import WeekSummary from '../components/WeekSummary'
import getWeekChartData from '../selectors/getWeekChartData.js'

const mapStateToProps = (state, props) => {
    return {
        weekData: getWeekChartData(state)
    }
}

const WeekSummaryContainer = connect(mapStateToProps)(WeekSummary)

export default WeekSummaryContainer
