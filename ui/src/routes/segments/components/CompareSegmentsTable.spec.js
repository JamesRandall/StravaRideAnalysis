import React from 'react'
import {shallow} from 'enzyme'
import CompareSegmentsTable from './CompareSegmentsTable'
import toJson from 'enzyme-to-json'

describe('components', () => {
    describe('<CompareSegmentsTable />', () => {
        it('renders as expected', () => {
            const tableData =[
                {
                    name: 'Some Segment',
                    actualTime: 250,
                    bestTime: 220
                },
                {
                    name: 'Another segment',
                    actualTime: 300,
                    bestTime: 200
                }
            ]
            const component =  shallow(<CompareSegmentsTable tableData={tableData} />)
            const tree = toJson(component)
            expect(tree).toMatchSnapshot()
        })
    })
})

