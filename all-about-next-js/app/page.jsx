import { getAllUsers } from "@/utils/features";
import Link from "next/link";
import React from "react";
export const metadata = {
  title: "Users",
};
const page = async () => {
  const users = await getAllUsers();
  console.log(users);
  return (
    <div className="flex col gp-4">
      {users?.map((user) => (
        <Link key={user.id} href={`/user/${user.id} `}>
          {user.name}
        </Link>
      ))}
    </div>
  );
};

export default page;
