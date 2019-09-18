import React, { Component } from "react";
import Blog from "./Blog";
import Comments from "./Comments";
import CommentForm from "./CommentForm";
import Axios from "axios";

class BlogSite extends Component {
  state = { blog: {} };

  changeComments = blog => {
    this.setState({ blog });
  };

  commentSubmit = e => {
    e.preventDefault();
    Axios.post(
      `http://localhost:5000/api/blogposts/${this.state.blog.id}/comments`,
      { name: e.target[0].value, comment: e.target[1].value }
    ).then(res => {
      console.log(res);
      this.state.blog.comments.push();
      this.changeComments(this.state.blog);
    });
  };

  render() {
    return (
      <div className="BlogSite">
        <Blog
          id={this.props.match.params.id}
          changeComments={this.changeComments.bind(this)}
        />
        <Comments comments={this.state.blog.comments} />
        <CommentForm commentSubmit={this.commentSubmit.bind(this)} />
      </div>
    );
  }
}

export default BlogSite;
