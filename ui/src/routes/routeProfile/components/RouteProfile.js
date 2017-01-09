import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import RouteProfileRendererHost from './RouteProfileRendererHost'
import ActivityListItem from '../../activities/components/ActivityListItem'

const RouteProfile = ({activity}) => <Grid>
    <Row>
        <Col xs={12}>
            {activity ?
                <div>
                    <ActivityListItem activity={activity} includeHyperlinks={false} />
                        <RouteProfileRendererHost activity={activity} />
                    </div> : <div></div>
            }
        </Col>
    </Row>
</Grid>

RouteProfile.propTypes = {
    activity: React.PropTypes.object
}

export default RouteProfile
