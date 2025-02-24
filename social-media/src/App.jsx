// import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import SideBar from "./Components/SideBar";
import CreatePost from "./Components/CreatePost";
import PostList from "./Components/PostList";

import { useState } from "react";
import PostListProvider from "./store/Posts-List-store";

const App = () => {
  const [selectedTab , setSelectedTab] = useState("Create-Post"); {/* Default tab is Home , tab can be Home or Create-Post */} {/** and if space is also included then it is error so use trim() */}
  return (
    <PostListProvider>
      <div className="main-container">
        <SideBar selectedTab = {selectedTab} setSelectedTab = {setSelectedTab}/>
        <div className="content-container">
          <Header/>
          {selectedTab === "Home" ? <PostList/> : <CreatePost/>}
          <Footer/>
        </div>
      </div>
    </PostListProvider>
      
  )
}

export default App
