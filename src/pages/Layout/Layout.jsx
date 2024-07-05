import React from "react";
import style from "./layout.module.css";
import Header from "../../Components/header/Header";

const Layout = ({ children }) => {
  return (
    <div className={style.container}>
      <div className={style.headerSection}>
        <Header />
      </div>
      <div className={style.context}>{children}</div>
    </div>
  );
};

export default Layout;
