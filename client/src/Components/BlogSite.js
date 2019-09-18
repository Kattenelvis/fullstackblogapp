import React, { Component } from "react";
import Blog from "./Blog";
import Comments from "./Comments";
import CommentForm from "./CommentForm";
import Axios from "axios";

class BlogSite extends Component {
  state = { comments: [] };

  changeComments = comments => {
    this.setState({ ...this.state, comments });
  };

  commentSubmit = e => {
    e.preventDefault();
    // Axios.post('http://localhost:5000/api/blogposts')

    console.log(e.target[0].value);
    console.log(e.target[1].value);
  };

  render() {
    return (
      <div className="BlogSite">
        <Blog
          id={this.props.match.params.id}
          changeComments={this.changeComments.bind(this)}
        />
        <Comments comments={this.state.comments} />
        <CommentForm commentSubmit={this.commentSubmit.bind(this)} />
      </div>
    );
  }
}

export default BlogSite;
