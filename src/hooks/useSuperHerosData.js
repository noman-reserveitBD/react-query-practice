import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

const posts = () => {
  return axios.get("https://jsonplaceholder.typicode.com/posts");
};

const useSuperHerosData = (onSuccess, onError, onSettled) => {
  return useQuery("postsRQ", posts, {
    // cacheTime: 5000,
    onSuccess,
    onError: onError,
    onSettled,
    // select: (data) => {
    //   const postTitle = data.data.map((postTitle) => postTitle.title);
    //   return postTitle;
    // },
  });
};

export default useSuperHerosData;
