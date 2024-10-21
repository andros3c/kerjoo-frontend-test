"use client";

import { setPosts } from "@/app/postSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";

const POSTS_PER_PAGE = 5;

const PostsRenderer = ({ posts }) => {
  const store = useStore();
  const loading = useSelector((state) => state.posts.loading);
  const dispatch = useDispatch();
  console.log(store.getState);
  useEffect(() => {
    dispatch(setPosts(posts));
  }, [dispatch, posts]);

  const postsContent = useSelector((state) => state.posts.posts); // Select all posts from Redux store
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(postsContent.length / POSTS_PER_PAGE); // Calculate total pages
  const currentPosts = posts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  // Change page
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <div className="flex flex-col gap-4 ">
      {loading ? "Loading..." : ""}
      {currentPosts
        .slice()
        .sort((a, b) => b.id - a.id) //sorting descending
        .map((post) => (
          <div
            key={post.id}
            className=" flex post bg-white p-4 rounded-lg gap-2 flex-col"
          >
            <div className="flex content-center gap-2">
              <div className="rounded-full p-4 bg-stone-200"></div>
              <span>{post.userId}</span>
            </div>
            <h2 className="text-lg font-semibold">{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      <div className="flex justify-between mt-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="bg-blue-500 text-white p-2 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="bg-blue-500 text-white p-2 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PostsRenderer;
