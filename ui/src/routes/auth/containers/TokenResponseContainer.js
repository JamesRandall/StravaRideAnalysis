import { connect } from 'react-redux'
import TokenResponse from '../components/TokenResponse'
import translateAccessToken from '../../../state/auth/actions/translateAccessToken'

const mapStateToProps = (state, props) => {
    return {
        
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        translateAccessToken: (token) => dispatch(translateAccessToken(token))
    }
}

const TokenResponseContainer = connect(mapStateToProps, mapDispatchToProps)(TokenResponse)

export default TokenResponseContainer