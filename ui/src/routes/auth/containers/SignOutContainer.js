import { connect } from 'react-redux'
import SignOut from '../components/SignOut'
import { signOutLocal } from '../../../state/auth/actions/signOut'

const mapStateToProps = (state, props) => {
    return {
        
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        signOut: () => dispatch(signOutLocal())
    }
}

const SignOutContainer = connect(mapStateToProps, mapDispatchToProps)(SignOut)

export default SignOutContainer