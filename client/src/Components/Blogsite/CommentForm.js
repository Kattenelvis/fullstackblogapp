import React, { useState } from "react";

export default function Comments({ commentSubmit }) {
  let [name, setName] = useState("");
  let [comment, setComment] = useState("");

  const onNameChange = e => {
    setName(e.target.value);
  };

  const onCommentChange = e => {
    setComment(e.target.value);
  };

  return (
      <form className="commentForm" onSubmit={commentSubmit}>
        <h1>Leave a comment</h1>
        <label className="nameField">
          Name: <input maxLength="30" required onChange={onNameChange} value={name} type="text"></input>
        </label>
        <br/>
        <label className="commentField">
          Comment:{'  '}
          <br/>
          <textarea maxLength="1000" required onChange={onCommentChange} value={comment}></textarea>
        </label>
        <button  type="submit" className="actionButton">Send Comment</button>
      </form>
  );
}
