import axios from "axios";
import React, { useEffect, useState } from "react";
import formattedNews from "../../../../../helper/formatNews";
import style from "./slider.module.css";
import timer from "../../../../../helper/timer";

const Slider = ({ value }) => {
  const { timeDifference } = timer();
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchArticles = async (value) => {
      if (news.length == 0) {
        try {
          const response = await axios.get(
            `https://newsapi.org/v2/everything?q=${value}&apiKey=aa42d63667e143b7b0c7634f034957e4`
          );
          setNews(formattedNews(response.data.articles));
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };

    fetchArticles(value);
  }, []);

  return (
    <div className={style.container}>
      <div className={style.context}>
        {news.map((item, index) => (
          <div className={style.slide} key={`${item.title}-${index}`}>
            <img src={item.img} alt="" />
            <h3>{item.title.substring(0, 50)}</h3>
            <p>{item.description.substring(0, 250)}</p>

            <div className={style.footSection}>
              <div className={style.time}>
                {timeDifference(item.publishedAt)} ago
              </div>
              <div className={style.category}>
                {item.category.substring(0, 13)}
              </div>
              <div className={style.category}>
                {item.author.substring(0, 13)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
