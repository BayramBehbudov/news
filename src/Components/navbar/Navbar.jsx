import React from "react";
import { Link } from "react-router-dom";
import style from "./navbar.module.css";
const Navbar = () => {
  return (
    <div className={style.container}>
      <Link to={"/"} className={style.item}>
        Home
      </Link>
      <Link to={"/News"} className={style.item}>
        News
      </Link>
      <Link to={"/CreatePage"} className={style.item}>
        Create
      </Link>
    </div>
  );
};

export default Navbar;
