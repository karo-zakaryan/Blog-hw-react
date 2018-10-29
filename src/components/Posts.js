import React from 'react';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

const Posts = ({ post }) => {

  return (
    <Router>
      <div className="single-post">
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        <Link to="/c/" className="show-comments-link">
          Show comments
          <span className="show-comments-icon"></span>
        </Link>
      </div>
    </Router>
  )
}

export default Posts;
