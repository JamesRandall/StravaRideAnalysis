import React from 'react'
import {shallow} from 'enzyme'
import ChartTooltip from './ChartTooltip'
import toJson from 'enzyme-to-json'

describe('components', () => {
    describe('<ChartTooltip />', () => {
        it('renders as expected', () => {
            const component =  shallow(<ChartTooltip label="hello world" payload={[ { value: 10 }]} />)
            const tree = toJson(component)
            expect(tree).toMatchSnapshot()
        })
    })
})

