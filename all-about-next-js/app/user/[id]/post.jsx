import { getUserPosts } from "@/utils/features";
import React from "react";
const post = async ({ id }) => {
  const userPostPromise = await getUserPosts(id);
  return (
    <>
      {userPostPromise?.map((uPost) => (
        <h1 key={uPost.id}>{uPost.title}</h1>
      ))}
    </>
  );
};

export default post;
