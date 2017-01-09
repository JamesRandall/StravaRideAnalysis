import { connect } from 'react-redux'
import { compose } from 'redux'
import { applyLifecycle } from 'react-lifecycle-component'
import RouteProfile from '../components/RouteProfile'
import fetchRoute from '../../../state/routes/actions/fetchRoute'

const mapStateToProps = (state, props) => {
    const activity = state.activities.activityDetails[props.params.id]
    return {
        isLoading: state.ui.isHttpRequestInProgress,
        activity: activity ? (activity.route ? activity : undefined) : undefined
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        componentDidMount: () => dispatch(fetchRoute(1 * props.params.id))
    }
}

const composed = compose(connect(mapStateToProps, mapDispatchToProps), applyLifecycle)
export default composed(RouteProfile)
