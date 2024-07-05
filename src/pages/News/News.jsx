import React, { useEffect } from "react";
import Layout from "../Layout/Layout";
import style from "./news.module.css";
import NewsItem from "./components/NewsItem";
import { useDispatch, useSelector } from "react-redux";
import { setNews } from "../../../store/newsSlice";

import data from "../../../store/config";

const News = () => {
  const news = useSelector((state) => state.news.allNews);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setNews(data));
  }, []);

  return (
    <Layout>
      <div className={style.container}>
        <div className={style.context}>
          {news.map((news, index) => (
            <NewsItem news={news} index={index} key={"news" + index} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default News;
