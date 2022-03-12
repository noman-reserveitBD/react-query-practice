import React from "react";
import { useParams } from "react-router-dom";

import { SinglePostData } from "../hooks/useSinglePostData";

const PostDetails = () => {
  const { postID } = useParams();
  console.log(postID);
  const { isLoading, isError, error, data } = SinglePostData(postID);

  if (isLoading) <div>Loading ........</div>;

  if (isError) <div>Error ......{error.message}</div>;

  return (
    <div>
      <h1> Post details page {postID}</h1>
      {data?.data.title}
    </div>
  );
};

export default PostDetails;
