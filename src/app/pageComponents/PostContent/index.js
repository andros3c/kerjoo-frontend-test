import React, { useEffect } from "react";
import PostsRenderer from "./PostsRenderer";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "@/app/postSlice";

const fetchData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
};

const PostContent = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  useEffect(() => {
    const fetchAndSetPosts = async () => {
      const postsData = await fetchData();
      dispatch(setPosts(postsData));
    };

    fetchAndSetPosts();
  }, [dispatch]);

  return (
    <div className="flex-col">
      <PostsRenderer posts={posts.posts} />
    </div>
  );
};
export default PostContent;
