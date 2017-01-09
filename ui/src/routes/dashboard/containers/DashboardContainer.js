import { connect } from 'react-redux'
import { compose } from 'redux'
import { applyLifecycle } from 'react-lifecycle-component'
import Dashboard from '../components/Dashboard'
import fetchActivitiesIfNeeded from '../../../state/activities/actions/fetchActivitiesIfNeeded'
import updateDashboardPageNumber  from '../../../state/dashboard/actions/updateDashboardPageNumber'

const mapStateToProps = (state, props) => {
    return {
        isLoading: state.ui.isHttpRequestInProgress && state.activities.summaries.length === 0,
        pageSize: state.dashboard.pageSize,
        page: state.dashboard.page
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        componentDidMount: () => dispatch(fetchActivitiesIfNeeded()),
        moveNext: () => dispatch(updateDashboardPageNumber(1)),
        movePrevious: () => dispatch(updateDashboardPageNumber(-1))
    }
}

const composed = compose(connect(mapStateToProps, mapDispatchToProps), applyLifecycle)
export default composed(Dashboard)
