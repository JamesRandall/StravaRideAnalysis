import React from 'react'
import {shallow} from 'enzyme'
import RouteProfile from './RouteProfile'
import toJson from 'enzyme-to-json'

describe('components', () => {
    describe('<RouteProfile />', () => {
        it('renders content when activity set', () => {
            const component =  shallow(<RouteProfile activity={{ activityId: 1 }} />)
            const tree = toJson(component)
            expect(tree).toMatchSnapshot()
        })

        it('renders empty when no activity', () => {
            const component =  shallow(<RouteProfile />)
            const tree = toJson(component)
            expect(tree).toMatchSnapshot()
        })
    })
})

