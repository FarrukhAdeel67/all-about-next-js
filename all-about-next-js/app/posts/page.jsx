import { getAllPosts } from "@/utils/features";
import React from "react";

const page = async () => {
  const posts = await getAllPosts();
  return (
    <>
      {posts?.map((uPost) => (
        <h1 key={uPost.id}>{uPost.title}</h1>
      ))}
    </>
  );
};

export default page;
