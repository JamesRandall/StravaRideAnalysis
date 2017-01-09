import React from 'react'
import {shallow} from 'enzyme'
import CompareSegmentsChart from './CompareSegmentsChart'
import toJson from 'enzyme-to-json'

describe('components', () => {
    describe('<CompareSegmentsChart />', () => {
        it('renders as expected', () => {
            const component =  shallow(<CompareSegmentsChart chartData={[]} />)
            const tree = toJson(component)
            expect(tree).toMatchSnapshot()
        })
    })
})

