import { getSingleUser } from "@/utils/features";
import React, { Suspense } from "react";
import Posts from "./post";
import { notFound } from "next/navigation";
export const generateMetadata = async ({ params }) => {
  const user = await getSingleUser(params.id);
  return {
    title: `${user.name}'s Profile`,
  };
};
export const generateStaticParams = async () => {
  //reserved function
  return [{ id: "1" }, { id: "2" }, { id: "3" }, { id: "4" }];
};

const page = async ({ params }) => {
  const user = await getSingleUser(params.id);
  if (!user.id) return notFound();
  return (
    <>
      <div>
        <h1>{user.name}</h1>
        <h3>{user.email}</h3>
      </div>
      <Suspense fallback={<p>Loading rawan day.....</p>}>
        <Posts id={params.id} />
      </Suspense>
    </>
  );
};

export default page;
