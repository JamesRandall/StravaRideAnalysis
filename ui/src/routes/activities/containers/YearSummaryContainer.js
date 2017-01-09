import { connect } from 'react-redux'
import YearSummary from '../components/YearSummary'
import getYearChartData from '../selectors/getYearChartData'


const mapStateToProps = (state, props) => {
    return {
        yearData: getYearChartData(state)
    }
}

const YearSummaryContainer = connect(mapStateToProps)(YearSummary)

export default YearSummaryContainer