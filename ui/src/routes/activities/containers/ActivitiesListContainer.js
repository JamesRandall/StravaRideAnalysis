import { connect } from 'react-redux'
import ActivitiesList from '../components/ActivitiesList'

const mapStateToProps = (state, props) => {
    const pageSize = props.pageSize
    const pageNumber = props.page
    const page = state.activities.summaries.slice(pageNumber * pageSize, pageNumber * pageSize + pageSize)

    return {
        activities: page,
        canMoveNext: (pageNumber+1) < state.activities.summaries.length/pageSize,
        canMovePrevious: pageNumber > 0,
        moveNext: props.moveNext,
        movePrevious: props.movePrevious
    }
}

const ActivitiesListContainer = connect(mapStateToProps)(ActivitiesList)

export default ActivitiesListContainer
