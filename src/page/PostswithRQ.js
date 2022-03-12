import React from "react";
import { Link } from "react-router-dom";

// Custom hooks
import useSuperHerosData from "../hooks/useSuperHerosData";

// const posts = () => {
//   return axios.get("https://jsonplaceholder.typicode.com/posts");
// };

const PostswithRQ = () => {
  // call when successfully data fetching.
  const onSuccess = (data) => {
    console.log("Call after api data fetch in done.", data);
  };

  // call when error is occure
  const onError = (e) => {
    console.log("Call when occure any error.", e);
  };

  // Call either success on data fetching or fail to fetching data.
  const onSettled = () => {
    console.log("onSettled function is calling");
  };

  // WE can do any type of filtering on select method.

  const { isLoading, data, isError, error } = useSuperHerosData(
    onSuccess,
    onError,
    onSettled
  );

  if (isLoading) <h1>Loading....</h1>;
  if (isError) <h1>error is : {error.message}</h1>;

  return (
    <div>
      <h1>Posts with react query</h1>
      {data?.data.map((d) => (
        <Link key={d.id} to={`/post-details/${d.id}`}>
          <h1>{d.title}</h1>
        </Link>
      ))}
      {/* {data?.map((postTitle) => (
        <h1>{postTitle}</h1>
      ))} */}
    </div>
  );
};

export default PostswithRQ;
