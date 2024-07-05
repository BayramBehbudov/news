import React from "react";
import style from "../news.module.css";
import ActionBtn from "./ActionBtn";
import timer from "../../../../hook/timer";

const NewsItem = ({ news, index }) => {
  const { timeDifference } = timer();

  return (
    <div className={style.newsItem}>
      <img src={news.img} alt="" />
      <div className={style.description}>
        <h3>{news.title}</h3>
        <p>{news.description}</p>
      </div>
      <div className={style.footSection}>
        <div className={style.time}>{timeDifference(news.date)} ago</div>
        <div className={style.action}>
          <ActionBtn action="like" index={index} news={news} />
          <ActionBtn action="comment" index={index} news={news} />
          <ActionBtn action="share" index={index} news={news} />
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
