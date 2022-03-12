import { useQuery } from "react-query";
import axios from "axios";

const fetchSinglePost = ({ queryKey }) => {
  const postId = queryKey[1];
  return axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
};

export const SinglePostData = (postId) => {
  return useQuery(["postData", postId], fetchSinglePost);
};
