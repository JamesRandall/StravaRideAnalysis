import React from 'react'
import { Table } from 'react-bootstrap'

const CompareSegmentsTable = ({tableData}) => <Table striped>  
    <thead>
        <tr>
            <th>Segment</th>
            <th>Ride Time (seconds)</th>
            <th>Best Time (seconds)</th>
        </tr>
    </thead>
    <tbody>
    {tableData.map((item,index) =>
        <tr key={index}>
            <td>{item.name}</td> 
            <td>{item.actual}</td>
            <td>{item.best}</td>
        </tr>
    )}
    </tbody>
    <tfoot>
        <tr>
            <th>Total</th>
            <th>{tableData.map(i => i.actual).reduce((a,b) => a+b)}</th>
            <th>{tableData.map(i => i.best).reduce((a,b) => a+b)}</th>
        </tr>
    </tfoot>
</Table>

CompareSegmentsTable.propTypes = {
    tableData: React.PropTypes.array.isRequired
}

export default CompareSegmentsTable
