import React from 'react'
import {mount, shallow} from 'enzyme'
import renderer from 'react-test-renderer'
import ActivitiesList from './ActivitiesList'
import { getActivitiesTestData } from '../../../testing/testData'
import { Button } from 'react-bootstrap' 

describe('components', () => {
    describe('<ActivitiesList />', () => {
        it('renders as expected', () => {
            const activities = getActivitiesTestData().slice(0,5)
            const component =  renderer.create(<ActivitiesList
                activities={activities}
                canMoveNext={true}
                canMovePrevious={true}
                moveNext={() => 0}
                movePrevious={() => 0} />)
            const tree = component.toJSON()
            expect(tree).toMatchSnapshot()
        })

        it('calls move next when canMoveNext is true', () => {
            let eventFired = false
            const activities = getActivitiesTestData().slice(0,5)
            const component = mount(<ActivitiesList
                activities={[]}
                canMoveNext={true}
                moveNext={() => eventFired=true}
                 />)
            component.find(Button).last().simulate('click')
            expect(eventFired).toBe(true)
        })

        it('does not call move next when canMoveNext is false', () => {
            let eventFired = false
            const component = mount(<ActivitiesList
                activities={[]}
                canMoveNext={false}
                moveNext={() => eventFired=true}
                 />)
            component.find(Button).last().simulate('click')
            expect(eventFired).toBe(false)
        })

        it('calls move previous when canMovePrevious is true', () => {
            let eventFired = false
            const component = mount(<ActivitiesList
                activities={[]}
                canMovePrevious={true}
                movePrevious={() => eventFired=true}
                 />)
            component.find(Button).first().simulate('click')
            expect(eventFired).toBe(true)
        })

        it('does not call move previous when canMovePrevious is false', () => {
            let eventFired = false
            const component = mount(<ActivitiesList
                activities={[]}
                canMovePrevious={false}
                movePrevious={() => eventFired=true}
                 />)
            component.find(Button).first().simulate('click')
            expect(eventFired).toBe(false)
        })
    })
})