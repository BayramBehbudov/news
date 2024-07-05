import React from "react";
import style from "./header.module.css";
import Navbar from "../navbar/Navbar";

const Header = () => {
  return (
    <div className={style.container}>
      <div>NEWS BLOG</div>
      <div>
        <Navbar />
      </div>
    </div>
  );
};

export default Header;
