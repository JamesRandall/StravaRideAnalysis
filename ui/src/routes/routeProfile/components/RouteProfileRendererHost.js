import React from 'react'
import routeProfileRenderer from '../js/routeProfileRenderer'

export default class RouteProfileRendererHost extends React.Component {
    componentDidMount() {
        this.webGlRenderer = routeProfileRenderer(this.renderContainer, this.props.activity.route)
    }
    
    componentWillUnmount() {
        if (this.webGlRenderer) {
            this.webGlRenderer.detach()
            this.webGlRenderer = null
        }
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.activity !== null && this.props.activity === null
    }   

    render() {
        return <div ref={renderContainer => this.renderContainer = renderContainer }></div>
    }
}

RouteProfileRendererHost.propTypes = {
    activity: React.PropTypes.object
}
