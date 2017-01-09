import React from 'react'
import { Panel,Grid,Row,Col } from 'react-bootstrap'
import SignInButton from './SignInButton'
import SignInGuestContainer from '../containers/SignInGuestContainer'
import wheel from '../../../images/wheel.jpg'

export default () => {
    return  <Grid fluid style={{ backgroundImage: "url('" + wheel + "')", backgroundSize: "cover" }} className="seamless-banner"> 
                <Grid>
                    <Row className="m-t-2 m-b-2">
                        <Col xs={3}></Col>
                        <Col xs={6}>
                            <Panel>
                                <div className="m-b-2">To analyse your rides please sign in to Strava.</div>
                                <SignInButton className="m-t-2" />
                                <SignInGuestContainer  />
                                <div className="m-t-2"><em>If you don't have a Strava account and want to see a demo just use the guest access button - you won't be asked to create an account or enter any personal details.</em></div>
                            </Panel>
                        </Col>
                        <Col xs={6}></Col>
                    </Row> 
                </Grid>
            </Grid>
}