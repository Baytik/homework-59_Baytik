import React, {Component} from 'react';
import './Post.css'

class ToWatchList extends Component {

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if (nextProps.value !== this.props.value) {
            return true;
        } else {
            return false;
        }
    }

    render() {
        return (
            <div>
                <input type="text" value={this.props.value} onChange={this.props.changed} className="input"/>
                <button onClick={this.props.remove} className="btn-remove">X</button>
            </div>
        );
    }
}

export default ToWatchList;