import React, { useEffect } from "react";

import Status from "../components/home/Status";
import Posts from "../components/home/Posts";
import Shoppingg from "../components/shopping/Shopping";

import RightSideBar from "../components/home/RightSideBar";

import { useSelector } from "react-redux";
import LoadIcon from "../images/loading.gif";

let scroll = 0;

const Shopping = () => {
  const { homePosts } = useSelector((state) => state);
  console.log("homePosts", homePosts);
  window.addEventListener("scroll", () => {
    if (window.location.pathname === "/") {
      scroll = window.pageYOffset;
      return scroll;
    }
  });

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: scroll, behavior: "smooth" });
    }, 100);
  }, []);

  return (
    <div className="home row mx-0">
      <div className="col-md-8">
        <Status />
        {homePosts.loading ? (
          <img src={LoadIcon} alt="loading" className="d-block mx-auto" />
        ) : homePosts.result === 0 && homePosts.posts.length === 0 ? (
          <h2 className="text-center">No Post</h2>
        ) : (
          <Shoppingg />
        )}
      </div>

      <div className="col-md-4">
        <RightSideBar />
      </div>
    </div>
  );
};

export default Shopping;
