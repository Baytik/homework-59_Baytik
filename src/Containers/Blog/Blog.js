import React from 'react';
import './Blog.css'

const Blog = props => {
    return (
        <div className="Blog">
            <input type="text" className="main-input" onChange={props.changed}/>
            <button className="btn" onClick={props.add}>Add</button>
            <h3>To watch list: </h3>
        </div>
    );
};

export default Blog;