import { connect } from 'react-redux'
import InProgressBar from '../components/InProgressBar'

const mapStateToProps = (state, props) => {
    return {
        inProgress: state.ui.isHttpRequestInProgress
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        
    }
}

const InProgressBarContainer = connect(mapStateToProps, mapDispatchToProps)(InProgressBar)

export default InProgressBarContainer