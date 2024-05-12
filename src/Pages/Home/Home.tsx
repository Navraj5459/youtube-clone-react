import React, { useContext, useState } from "react";
import {SidebarContext} from "../../App";
import Sidebar from "../../Components/Sidebar/Sidebar";
import "./Home.css";
import Feed from "../../Components/Feed/Feed";

const Home = () => {
    const sidebar = useContext<boolean>(SidebarContext);
    const [category, setCategory] = useState(0);
  return (
    <>
      <Sidebar category={category} setCategory={setCategory}/>
      <div className={`container ${sidebar ? "" : "large-container"}`}>
        <Feed category={category}/>
      </div>
    </>
  );
};

export default Home;
