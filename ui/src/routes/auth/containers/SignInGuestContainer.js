import { connect } from 'react-redux'
import SignInGuest from '../components/SignInGuest'
import receiveTranslatedToken from '../../../state/auth/actions/receiveTranslatedToken'
import { withRouter } from 'react-router'

const mapStateToProps = (state, props) => {
    return {
        
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        signInAsGuest: (router) => {
            dispatch(receiveTranslatedToken('GUEST', 'Guest', 15753730))
            router.push('/dashboard')
        }
    }
}

const SignInGuestContainer = connect(mapStateToProps, mapDispatchToProps)(withRouter(SignInGuest))

export default SignInGuestContainer
