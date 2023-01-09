import React, { Fragment, useEffect, useState } from "react";

import Status from "../components/home/Status";
import Posts from "../components/home/Posts";
import RightSideBar from "../components/home/RightSideBar";

import { useSelector } from "react-redux";
import LoadIcon from "../images/loading.gif";
import Chatbot from "../components/chatbot/chatbot";


let scroll = 0;

const Home = () => {
  const { homePosts } = useSelector((state) => state);
  const [isChatbot, setIsChatBot ] = useState(false);

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
  const handleChatbot = () => {
    setIsChatBot(true)
  }
  return (    
    <Fragment>

    <div className="home row mx-0">
 
      <div className="col-md-8">
        <Status />
        {homePosts.loading ? (
          <img src={LoadIcon} alt="loading" className="d-block mx-auto" />
        ) : homePosts.result === 0 && homePosts.posts.length === 0 ? (
          <h2 className="text-center">No Post</h2>
        ) : (
          <Posts />
        )}
      </div>

      <div className="col-md-4">
        <RightSideBar />
       {isChatbot && <Chatbot/>} 
        <img src={require('../images/notice.png')} width="80" height="80"
          onClick={() => setIsChatBot(!isChatbot)}
        />
      </div>
    </div>
    </Fragment> 
  
  );
};

export default Home;
