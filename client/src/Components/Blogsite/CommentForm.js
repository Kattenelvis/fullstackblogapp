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
    <div className="commentForm" onSubmit={commentSubmit}>
      <form>
        <label>
          Name: <input onChange={onNameChange} value={name} type="text"></input>
        </label>
        <label>
          Comment:{" "}
          <textarea onChange={onCommentChange} value={comment}></textarea>
        </label>
        <button type="submit">Send Comment</button>
      </form>
    </div>
  );
}
