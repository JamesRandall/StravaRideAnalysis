import React from 'react'
import { withRouter } from 'react-router'

class TokenResponse extends React.Component {
    
    componentDidMount() {
        const accessCode = this.props.location.query.code
        this.props.translateAccessToken(accessCode).then(() => this.props.router.push('/dashboard'))        
    }

    render() {
        return null
    }
}

TokenResponse.propTypes = {
    translateAccessToken: React.PropTypes.func.isRequired,
    location: React.PropTypes.object.isRequired,
    router: React.PropTypes.object.isRequired
}

export default withRouter(TokenResponse)
