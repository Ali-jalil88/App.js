import React, {Component} from 'react';
import SectionItem from "./sectionItem";

class Section extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: this.props.items,
            title: this.props.title
        }
    }

    render() {
        console.log(this.state)
        return (
            <div className="section-block">
                <div className='title'>{this.state.title}</div>
                {this.state.items.map((item, i) => <SectionItem key={i} item={item}/>)}
            </div>
        )
    }
}

export default Section;