import React, {Component} from 'react';
import './Accordion.css';

export default class Accordion extends Component {
    static defaultProps = { sections: [] };
    state = { currentSectionIndex: null };

    handleButtonClick = (sectionIndex) => {
        console.log('clicked');
        this.setState({ currentSectionIndex: sectionIndex })
    }

    renderItem(section, index, currentSectionIndex) {
        return (
            <li className='Acc' key ={index}>
                 <button 
                 type='button'
             onClick={() => this.handleButtonClick(index)}>
                {section.title}
            </button>
            {(currentSectionIndex === index) && <p>{section.content}</p>}
            </li>
        )
        
        }
    
    render() {
        const {currentSectionIndex} = this.state
        const {sections} = this.props
        return (
            <ul className='Accordion'>
                {sections.map((section, index) => 
                this.renderItem(section, index, currentSectionIndex))}
            </ul>
        )
    }

}
