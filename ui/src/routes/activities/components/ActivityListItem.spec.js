import React from 'react'
import renderer from 'react-test-renderer'
import ActivityListItem from './ActivityListItem'
import { getActivity } from '../../../testing/testData'

describe('components', () => {
    describe('<ActivityListItem />', () => {
        it('renders with hyperlinks', () => {
            const activity = getActivity()
            const component = renderer.create(<ActivityListItem activity={activity} includeHyperlinks={true} />)
            const tree = component.toJSON()
            expect(tree).toMatchSnapshot()
        })

        it('renders without hyperlinks when there are no segments', () => {
            const activity = getActivity()
            activity.hasSegments = false
            const component = renderer.create(<ActivityListItem activity={activity} includeHyperlinks={true} />)
            const tree = component.toJSON()
            expect(tree).toMatchSnapshot()
        })

        it('renders without hyperlinks when there are segments but includeHyperlinks is false', () => {
            const activity = getActivity()
            const component = renderer.create(<ActivityListItem activity={activity} includeHyperlinks={false} />)
            const tree = component.toJSON()
            expect(tree).toMatchSnapshot()
        })
    })
})
