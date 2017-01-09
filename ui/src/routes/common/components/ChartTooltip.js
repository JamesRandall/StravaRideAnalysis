import React from 'react'
import { Panel } from 'react-bootstrap'

const ChartTooltip = ({payload, label}) => {
    return <Panel>
            {label}: {payload[0].value}km
        </Panel>
}

ChartTooltip.propTypes = {
    label: React.PropTypes.string,
    payload: React.PropTypes.array
}

export default ChartTooltip
