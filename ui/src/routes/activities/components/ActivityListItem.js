import React from 'react'
import {Row,Col} from 'react-bootstrap'
import TitleLabel from '../../common/components/TitleLabel'
import { Link } from 'react-router'

export default ({activity, includeHyperlinks}) => {
    const compareSegmentsLink = '/compareSegments/' + activity.id
    const compareSegments = activity.hasSegments ? <Link className='m-r-2' to={compareSegmentsLink}>Compare Segments</Link> : undefined
    const routeProfileLink = '/routeProfile/' + activity.id
    const routeProfile = activity.hasSegments ? <Link className='m-r-2' to={routeProfileLink}>3D Route Profile</Link> : undefined
    return <div className='m-b-3'>
        <Row>
            <Col xs={12}>
                <TitleLabel text={activity.name} subtitle={activity.startDate.toDateString() + ' (' + activity.type + ')'} className='m-b' />
                <table>
                    <tbody>
                        <tr>
                            <td width="0"><span className='m-r'><em>Distance</em></span></td>
                            <td width="0"><span className='m-r'>{Math.floor(activity.distance/100)/10} km</span></td>
                            <td width="0"><span className='m-r'><em>Elapsed Time</em></span></td>
                            <td width="0"><span className='m-r'>{Math.floor(activity.elapsedTime/60)} minutes</span></td>
                            <td className="m-r-2"><span className='m-r'><em>Type</em></span></td>
                            <td>{activity.type}</td>
                        </tr>
                        <tr>
                            <td width="0"><span className='m-r'><em>Avg Speed</em></span></td>
                            <td width="0"><span className='m-r'>{Math.floor(activity.averageSpeed*10)/10} kph</span></td>
                            <td width="0"><span className='m-r'><em>Max Speed</em></span></td>
                            <td>{Math.floor(activity.maxSpeed*10)/10} kph</td>
                            <td className="m-r-2"><span className='m-r'><em>Trainer</em></span></td>
                            <td>{activity.trainer}</td>
                        </tr>
                    </tbody>
                </table>
                {!includeHyperlinks ? undefined :
                    <div className="m-t">
                        {compareSegments}
                        {routeProfile}               
                    </div>
                }
            </Col>
        </Row>
        <hr/>
    </div>
}