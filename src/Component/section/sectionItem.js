import React, {Component} from 'react';

class sectionItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item : this.props.item,
        }
    }

    onSetBackground = (background) => {
        return {
            backgroundSize: 'cover',
            backgroundImage: "url(" + background.default + ")"
        }
    }

    render() {
        return (
            <div className="section-item-block">
                <div className='item-image' style={this.onSetBackground(this.state.item.icon)}/>
                <div>{this.state.item.title}</div>
                {this.state.item.ext ?
                    <div className='item1-image' style={this.onSetBackground(this.state.item.ext)}/> :""
                }
            </div>
        )
    }
}

export default sectionItem;