import React from 'react';
import HeaderContainer from '../containers/HeaderContainer'
import InProgressBarContainer from '../../common/containers/InProgressBarContainer'

export default class App extends React.Component {
  constructor(props, context) {
    super(props)
    this.router = context.router
  }

  componentDidMount() {
    if (this.props.isAuthenticated && this.props.location.pathname === '/') {
      this.router.push('/dashboard')
    }
  }

  render() {
    return (
      <div>
        <HeaderContainer></HeaderContainer>
        <InProgressBarContainer></InProgressBarContainer>
          { this.props.children }
      </div>
    );
  }
}

App.contextTypes = {
    router: React.PropTypes.object.isRequired
};

