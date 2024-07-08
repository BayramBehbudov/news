import React from "react";
import Layout from "../Layout/Layout";
import style from "./home.module.css";
import Slider from "./components/slider/Slider";

const Home = () => {
  return (
    <Layout>
      <div className={style.container}>
        <div className={style.context}>
          <div>
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
          {["Breaking", "Sport", "Baku"].map((value) => (
            <div>
              <div className={style.line}>
                <p>{value} News</p>
              </div>
              <div className={style.sliderSection}>
                <Slider value={value} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
