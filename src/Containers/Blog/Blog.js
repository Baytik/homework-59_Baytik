import React, {Component} from 'react';
import './Blog.css'

class Blog extends Component {

    state = {

    };

    render() {
        return (
            <div className="Blog">
                <input type="text" className="main-input"/>
                <button className="btn">Add</button>
                <h3>To watch list: </h3>
            </div>
        );
    }
}

export default Blog;