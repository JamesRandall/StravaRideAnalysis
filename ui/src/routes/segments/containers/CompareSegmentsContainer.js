import { connect } from 'react-redux'
import { compose } from 'redux'
import { applyLifecycle } from 'react-lifecycle-component'
import CompareSegments from '../components/CompareSegments'
import fetchSegments from '../../../state/segments/actions/fetchSegments'
import fetchBestEfforts from '../../../state/segments/actions/fetchBestEfforts'

const mapStateToProps = (state, props) => {
    const componentProps = {
        activityId: 1 * props.params.id,
        activity: undefined,
        segmentData: undefined
    }

    // TODO:
    // 1. Add cumulative times i.e. the total elapsed time in each segment summed as we iterate along
    // 2. Link the table to the graph with a click to highlight

    const activity = state.activities.activityDetails[props.params.id]
    if (activity && activity.segmentEfforts && activity.bestEfforts) {
        componentProps.activity = activity            
        componentProps.segmentData = activity.segmentEfforts.map((s,index) => {
            return {
                name: s.name,
                actual: s.elapsedTime,
                best: activity.bestEfforts[index].elapsedTime
            }
        })
    }

    componentProps.isLoading = state.ui.isHttpRequestInProgress || !componentProps.activity || !componentProps.segmentData
    
    return componentProps
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        componentDidMount: () => {
            const activityId = 1 * props.params.id
            dispatch(fetchSegments(activityId)).then((activity) => {
                if (!activity.bestEfforts) {
                    dispatch(fetchBestEfforts(activityId))
                }
            })
        }
    }
}

const composed = compose(connect(mapStateToProps, mapDispatchToProps), applyLifecycle)
export default composed(CompareSegments)
