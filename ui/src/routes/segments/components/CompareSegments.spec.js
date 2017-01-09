import React from 'react'
import {shallow} from 'enzyme'
import CompareSegments from './CompareSegments'
import toJson from 'enzyme-to-json'

describe('components', () => {
    describe('<CompareSegments />', () => {
        it('renders content loaded', () => {
            const component =  shallow(<CompareSegments isLoading={false} segmentData={[]} activity={{}} />)
            const tree = toJson(component)
            expect(tree).toMatchSnapshot()
        })

        it('renders empty when not loaded', () => {
            const component =  shallow(<CompareSegments isLoading={true} />)
            const tree = toJson(component)
            expect(tree).toMatchSnapshot()
        })
    })
})

