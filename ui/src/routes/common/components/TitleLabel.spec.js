import React from 'react'
import {shallow} from 'enzyme'
import TitleLabel from './TitleLabel'
import toJson from 'enzyme-to-json'

describe('components', () => {
    describe('<TitleLabel />', () => {
        it('renders as expected', () => {
            const component =  shallow(<TitleLabel text="Hello World" subtitle="Too" className="aclass" />)
            const tree = toJson(component)
            expect(tree).toMatchSnapshot()
        })
    })
})

