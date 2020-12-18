import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Accordion from './Accordion'

const sections = [
    {
      title: 'Section 1',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      title: 'Section 2',
      content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
    },
    {
      title: 'Section 3',
      content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
    },
  ]



describe('Accordion component', () => {
    it('renders empty without any Accordion given without errors', () => {
       const wrapper = shallow(<Accordion />)
       expect(toJson(wrapper)).toMatchSnapshot()
    })


    it('renders no section as default', () => {
        const wrapper = shallow(<Accordion section={sections}/>)
        expect(toJson(wrapper)).toMatchInlineSnapshot()
    })


    it('opens any clicked section', () => {
        const wrapper = shallow(<Accordion section={sections}/>)
        wrapper.find('button').at(1).stimulate('click')
        expect(toJson(wrapper)).toMatchSnapshot()
    } )


    it('opens only one section at a time', () => {
        const wrapper = shallow(<Accordion section={sections}/>)
        wrapper.find('button').at(1).stimulate('click')
        wrapper.find('button').at(2).stimulate('click')
        expect(toJson(wrapper)).toMatchSnapshot()
    })




})


