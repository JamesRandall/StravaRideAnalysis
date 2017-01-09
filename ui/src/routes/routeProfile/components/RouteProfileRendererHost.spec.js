import React from 'react'
import {shallow} from 'enzyme'
import RouteProfileRendererHost from './RouteProfileRendererHost'
import toJson from 'enzyme-to-json'

describe('components', () => {
    describe('<RouteProfileRendererHost />', () => {
        it('renders as expected', () => {
            const component =  shallow(<RouteProfileRendererHost activity={{ activityId: 1 }} />)
            const tree = toJson(component)
            expect(tree).toMatchSnapshot()
        })
    })
})


