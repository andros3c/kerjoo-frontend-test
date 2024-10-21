import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addPost, setLoading } from "../postSlice";

export const TextArea = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      dispatch(setLoading(true));
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          body: JSON.stringify({
            title: data.postTitle,
            body: data.postContent,
            userId: 1,
          }),
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const json = await response.json();
      dispatch(addPost(json));
      reset();
    } catch (error) {
      console.error("Failed to post:", error);
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-5 flex w-full bg-white rounded-lg flex-col items-start gap-4 "
    >
      <div className="flex content-center gap-2">
        <div className="rounded-full p-4 bg-stone-200"></div>
        <span>1</span>
      </div>
      <input
        {...register("postTitle")}
        className="w-full p-4 border-2 rounded-lg focus:border-sky-600 focus:outline-none"
        placeholder="Write title..."
      />
      <textarea
        {...register("postContent")}
        className="w-full h-32 p-4 border-2 rounded-lg focus:border-sky-600 focus:outline-none"
        placeholder="Write your post here..."
      />
      <button
        className="bg-green-800 w-20 p-2 rounded-lg text-white rounded-lg self-end"
        type="submit"
      >
        Post
      </button>
    </form>
  );
};
