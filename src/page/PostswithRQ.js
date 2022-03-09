import React from "react";
import axios from "axios";
import { useQuery } from "react-query";

const posts = () => {
  return axios.get("https://jsonplaceholder.typicode.com/posts");
};

const PostswithRQ = () => {
  const { isLoading, data, isError, error } = useQuery("postsRQ", posts, {
    // cacheTime: 5000,
  });

  if (isLoading) <h1>Loading....</h1>;

  return (
    <div>
      <h1>Posts with react query</h1>
      {data?.data.map((d) => (
        <h1>{d.title}</h1>
      ))}
    </div>
  );
};

export default PostswithRQ;
