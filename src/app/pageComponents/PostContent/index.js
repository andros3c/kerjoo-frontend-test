import React from "react";
import PostsRenderer from "./PostsRenderer";

const fetchData = async () => {
 
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
};

const PostContent = async () => {
  const posts = await fetchData(); // Fetch data in server component

  return (
    <div className="flex-col">
      <PostsRenderer posts={posts} /> {/* Pass posts to client component */}
    </div>
  );
};

export default PostContent;
