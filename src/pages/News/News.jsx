import React, { useEffect } from "react";
import Layout from "../Layout/Layout";
import style from "./news.module.css";
import NewsItem from "./components/NewsItem";
import { useDispatch, useSelector } from "react-redux";
import { setNews, setBoole } from "../../../store/newsSlice";
import formattedNews from "../../../hook/formatNews";
import axios from "axios";
import Categories from "../../Components/categories/Categories";

const News = () => {
  const news = useSelector((state) => state.news.allNews);
  const boole = useSelector((state) => state.news.boole);
  const selectedCategory = useSelector((state) => state.news.selectedCategory);
  const categories = Object.groupBy(news, ({ category }) => category);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get(
          "https://newsapi.org/v2/everything?q=global&apiKey=aa42d63667e143b7b0c7634f034957e4"
        );
        dispatch(setNews(formattedNews(response.data.articles)));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    boole && fetchArticles();
    dispatch(setBoole(false));
  }, []);

  return (
    <Layout>
      <div className={style.container}>
        <div className={style.context}>
          <Categories category={categories} />
          {news.map((news, index) =>
            selectedCategory == "All" ? (
              <NewsItem news={news} index={index} key={"news" + index} />
            ) : (
              news.category == selectedCategory && (
                <NewsItem news={news} index={index} key={"news" + index} />
              )
            )
          )}
        </div>
      </div>
    </Layout>
  );
};

export default News;
