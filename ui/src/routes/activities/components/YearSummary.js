import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { ResponsiveContainer, AreaChart, Area, XAxis, Tooltip } from 'recharts'
import ChartTooltip from '../../common/components/ChartTooltip.js'

export default ({yearData}) => {
    const totalDistance = yearData && yearData.length > 0 ? yearData[yearData.length-1].distance : 0

    return <Row bsClass="row row-no-padding">
        <Col xs={3} style={{height:"100px"}}>
            <div style={{ display: "table", height: "100px", overflow: "hidden", width: "100%", textAlign: "center" }}>
                <div  style={{display: "table-cell", verticalAlign: "middle"}}>
                    {totalDistance} km
                </div>
            </div> 
        </Col>
        <Col xs={9} style={{height:"100px"}}>
            <div className="m-r">
                <ResponsiveContainer minHeight={100}>
                    <AreaChart data={yearData}>
                        <Tooltip content={ <ChartTooltip /> } />
                        <XAxis dataKey="label" axisLine={false} tickLine={false} tickFormatter={(s) => s.substring(0,1)} />
                        <Area type="monotone" dataKey="distance" stroke="rgba(217,0,0,1)" fill="rgba(217,0,0,0.2)" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </Col>
    </Row>  
}