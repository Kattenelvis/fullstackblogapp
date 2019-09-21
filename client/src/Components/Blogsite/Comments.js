import React from "react";

export default function Comments(test) {
  const comments = comments => {
    if (comments !== undefined) {
      return comments.map(com => {
        return (
          <div key={com.id} className="comment">
            <h2>{com.name}</h2>
            <p>{com.comment}</p>
          </div>
        );
      });
    } else {
      return <div>No Comments Found</div>;
    }
  };

  return <div className="comments">{comments(test.comments)}</div>;
}
