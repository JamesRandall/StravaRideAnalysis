import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import ActivityListItem from '../../activities/components/ActivityListItem'
import CompareSegmentsTable from './CompareSegmentsTable'
import CompareSegmentsChart from './CompareSegmentsChart'

export default ({activity, segmentData, isLoading }) => isLoading ? <div></div> : <Grid>
    <Row>
        <Col xs={12}>
            <ActivityListItem activity={activity} includeHyperlinks={false} />
        </Col>
    </Row>
    <Row>
        <Col xs={12}>
            <CompareSegmentsChart chartData={segmentData} />
        </Col>
    </Row>
    <Row>
        <Col xs={12}>
            <CompareSegmentsTable tableData={segmentData} />
        </Col>
    </Row>
</Grid>
