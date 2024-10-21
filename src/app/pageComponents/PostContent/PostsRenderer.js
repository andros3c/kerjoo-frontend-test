"use client"; // This component is a client component

import { setPosts } from "@/app/postSlice";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const PostsRenderer = ({ posts }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPosts(posts)); // Dispatch posts to Redux store
  }, [dispatch, posts]);
  console.log(posts);
  return (
    <div className="flex flex-col gap-4">
      {posts.map((post) => (
        <div
          key={post.id}
          className=" flex post bg-white p-4 rounded-lg gap-2 flex-col"
        >
          <h2 className="text-lg font-semibold">{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default PostsRenderer;
