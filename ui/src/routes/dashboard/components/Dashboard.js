import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import ActivitySummary from '../../activities/components/ActivitySummary'
import ActivitiesListContainer from '../../activities/containers/ActivitiesListContainer'

const Dashboard = ({isLoading, pageSize, page, moveNext, movePrevious}) => isLoading ? <div></div> : <Grid>
    <Row>
        <Col xs={12} sm={7}>
            <ActivitiesListContainer pageSize={pageSize} page={page} moveNext={moveNext} movePrevious={movePrevious} />
        </Col>
        <Col xs={12} sm={5}>
            <ActivitySummary />
        </Col>
    </Row>
</Grid>

Dashboard.propType = {
    isLoading: React.PropTypes.bool.isRequired,
    pageSize: React.PropTypes.number.isRequired,
    page: React.PropTypes.number.isRequired,
    moveNext: React.PropTypes.func.isRequired,
    movePrevious: React.PropTypes.func.isRequired
}

export default Dashboard