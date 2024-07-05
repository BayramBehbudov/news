import React, { useRef } from "react";
import Layout from "../Layout/Layout";
import style from "./create.module.css";
import timer from "../../../hook/timer";
import { addNewNews } from "../../../store/newsSlice";
import { useDispatch } from "react-redux";

const CreatePage = () => {
  const { dateToMilliseconds } = timer();
  const dispatch = useDispatch();

  const titleRef = useRef();
  const imgRef = useRef();
  const descRef = useRef();

  function addNews() {
    const title = titleRef.current.value;
    const img = imgRef.current.value;
    const description = descRef.current.value;
    if (title.trim() != "" && img.trim() != "" && description.trim() != "") {
      const newNews = {
        title,
        img,
        description,
        like: 0,
        comment: 0,
        share: 0,
        date: dateToMilliseconds(),
      };
      dispatch(addNewNews(newNews));
    }
    titleRef.current.value = "";
    imgRef.current.value = "";
    descRef.current.value = "";
  }

  return (
    <Layout>
      <div className={style.container}>
        <div className={style.context}>
          <h1>Create Post</h1>
          <div className={style.inputs}>
            <input
              type="text"
              ref={titleRef}
              placeholder="Title"
              className={style.input}
            />
            <input
              type="text"
              ref={imgRef}
              placeholder="Image Url"
              className={style.input}
            />
          </div>
          <textarea rows={10} ref={descRef}></textarea>
          <button onClick={addNews}>Add News</button>
        </div>
      </div>
    </Layout>
  );
};

export default CreatePage;
