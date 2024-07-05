import React from "react";
import Layout from "../Layout/Layout";
import style from "./home.module.css";

const Home = () => {
  return (
    <Layout>
      <div className={style.container}>
        <div className={style.context}>
          <img src="../../../public/cover.jpg" alt="" />
          <div className={style.title}>
            <h1>
              Discover the world through our news blog! Fresh perspectives and
              breaking stories await you.
            </h1>
            <p>
              Stay informed with the latest updates and insightful articles.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
