import { Post } from "@/types";
import React from "react";

const Posts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 100,
    },
  });

  await new Promise((resolve) => setTimeout(resolve, 6000));
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const posts: Post[] = await res.json();

  return (
    <div>
      <h2>Posts</h2>
      {/* Posts data */}
      <ul>
        {posts.map((post) => {
          return <h3 key={post.id}>{post.title}</h3>;
        })}
      </ul>
    </div>
  );
};

export default Posts;
