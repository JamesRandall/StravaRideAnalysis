import React from 'react'
import { withRouter } from 'react-router'

class SignOut extends React.Component {
    componentDidMount() {
        this.props.signOut()
        this.props.router.push('/')
    }

    render() {
        return null
    }
}

SignOut.propTypes = {
    signOut: React.PropTypes.func.isRequired,
    router: React.PropTypes.object.isRequired
}

export default withRouter(SignOut)
