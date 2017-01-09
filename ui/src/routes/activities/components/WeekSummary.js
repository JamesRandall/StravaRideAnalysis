import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { ResponsiveContainer, BarChart, Bar, XAxis, Tooltip } from 'recharts'
import ChartTooltip from '../../common/components/ChartTooltip.js'

export default ({weekData}) => {
    return <Row bsClass="row row-no-padding">
        <Col xs={3} style={{height:"100px"}}>
            <div style={{ display: "table", height: "100px", overflow: "hidden", width: "100%", textAlign: "center" }}>
                <div  style={{display: "table-cell", verticalAlign: "middle"}}>
                    {Math.round(weekData.map(dp => dp.distance).reduce( (p,c) => p+c, 0)*10)/10} km
                </div>
            </div> 
        </Col>
        <Col xs={9} style={{height:"100px"}}>
            <ResponsiveContainer minHeight={100}>
                <BarChart data={weekData}>
                    <XAxis dataKey="label" axisLine={false} tickLine={false} tickFormatter={(s) => s.substring(0,1)} />
                    <Tooltip content={ <ChartTooltip /> } />
                    <Bar dataKey="distance" fill="rgb(4,117,111)" />
                </BarChart>
            </ResponsiveContainer>
        </Col>
    </Row>
}
