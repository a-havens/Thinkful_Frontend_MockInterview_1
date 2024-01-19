import React, { useState, useEffect } from "react";

function PostDetail({ post }) {
  const [comments, setComments] = useState([]);
  const [clicked, setClicked] = useState(false);
  
  const fetchComments = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
      .then((response) => response.json())
      .then(setComments)
      .catch((error) => {
        console.log(error);
    });
  };
  

  return (
    <div>
      <button onClick={() => {
        setClicked(!clicked);
        if (!comments.length) {
          fetchComments();
        }
      }}>
        {post.body}
      </button>
      {clicked && comments.length > 0 && (
        <div>
          {comments.map((comment) => (
            <div key={`${comment.postId}-${comment.id}`}>
              <p>{comment.body}</p>
              <p>{comment.email}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
export default PostDetail;
