import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import PostswithRQ from "./PostswithRQ";
import About from "./PostWithRQ";
import Users from "./Users";
import PostDetails from "./postDetails.page";

const PageRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="suprherosWithRQ" element={<About />} />
        <Route path="users" element={<Users />} />
        <Route path="postwithrq" element={<PostswithRQ />} />
        <Route path="post-details/:postID" element={<PostDetails />} />
      </Routes>
    </>
  );
};

export default PageRoute;
