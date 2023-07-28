// export const getAllUsers =async ()=>{
//     //by default ssr: server side rendering

//   const res = await  fetch('https://jsonplaceholder.typicode.com/users');
//   if(!res.ok) return new Error ("Something went wrong!");
//   return await res.json();
// }

export const getAllUsers = async () => {
  //how ssg : server side generation: npm run build,
  //it works when we build the code

  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-cache",
  });
  if (!res.ok) return new Error("Something went wrong!");
  return await res.json();
};

export const getSingleUser = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    cache: "no-cache",
  });
  if (!res.ok) return new Error("Something went wrong!");
  return await res.json();
};

export const getUserPosts = async (id) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${id}`,
    {
      cache: "no-cache",
    }
  );
  if (!res.ok) return new Error("Something went wrong!");
  const data = await res.json();
  return await new Promise((resolve) => setTimeout(() => resolve(data), 3000));
};

//get all posts
export const getAllPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) return new Error("Something went wrong!");
  return await res.json();
};
