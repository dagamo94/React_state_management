import React from "react";

function PostView({ post, deletePost }) {
  console.log(post);
  return (
    <div className="post">
        <div>
          {post.type === "Text" ? (
            <p>{post.content}</p>
          ) : (
            <img src={post.content} width="300" alt={post.content} />
          )}
        </div>
        <button name="delete" onClick={deletePost}>
          Delete
        </button>
    </div>
  );
}

export default PostView;
