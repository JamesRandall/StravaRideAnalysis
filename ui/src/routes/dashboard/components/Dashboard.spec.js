import React from 'react'
import {shallow} from 'enzyme'
import Dashboard from './Dashboard'
import toJson from 'enzyme-to-json'

describe('components', () => {
    describe('<Dashboard />', () => {
        it('renders as expected when loaded', () => {
            const component =  shallow(<Dashboard isLoading={true} pageSize={10} page={0} page={[]} moveNext={() => 0} movePrevious={() => 0}  />)
            const tree = toJson(component)
            expect(tree).toMatchSnapshot()
        })

        it('renders as expected when not loaded', () => {
            const component =  shallow(<Dashboard isLoading={false} pageSize={10} page={0} page={[]} moveNext={() => 0} movePrevious={() => 0}  />)
            const tree = toJson(component)
            expect(tree).toMatchSnapshot()
        })
    })
})

