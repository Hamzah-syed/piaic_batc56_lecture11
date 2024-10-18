import React from "react";

const page = async ({ params }: { params: { id: string } }) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  return <div>Hello {params.id}</div>;
};

export default page;
