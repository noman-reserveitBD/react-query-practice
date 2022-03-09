import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import PostswithRQ from "./PostswithRQ";
import About from "./PostWithRQ";
import Users from "./Users";

const PageRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="suprherosWithRQ" element={<About />} />
        <Route path="users" element={<Users />} />
        <Route path="postwithrq" element={<PostswithRQ />} />
      </Routes>
    </>
  );
};

export default PageRoute;
