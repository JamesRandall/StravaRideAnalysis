import React from 'react'
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Legend} from 'recharts'

const CompareSegmentsChart = ({chartData}) => <div>
        <ResponsiveContainer minHeight={300}>
            <BarChart data={chartData}>
                <YAxis />
                <XAxis tick={false} />
                <Legend/>
                <Bar type="monotone" dataKey="actual" fill="rgba(4,117,111,0.2)" stroke="rgb(4,117,111)" activeDot={{r: 8}}/>
                <Bar type="monotone" dataKey="best" fill="rgba(217,0,0,0.2)" stroke="rgb(217,0,0)" activeDot={{r: 8}}/>
            </BarChart>
        </ResponsiveContainer>
    </div>

CompareSegmentsChart.propTypes = {
    chartData: React.PropTypes.array.isRequired
}

export default CompareSegmentsChart
