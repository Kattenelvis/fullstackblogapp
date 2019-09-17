import React from "react";
import Blog from "./Blog";
import Comments from "./Comments";
import CommentForm from "./CommentForm";

export default function BlogSite({ match }) {
  return (
    <div className="BlogSite">
      <Blog id={match.params.id} />
      <Comments />
      <CommentForm />
    </div>
  );
}
