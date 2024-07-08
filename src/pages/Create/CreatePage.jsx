import React, { useRef } from "react";
import Layout from "../Layout/Layout";
import style from "./create.module.css";
import timer from "../../../helper/timer";
import { addNewNews } from "../../../store/newsSlice";
import { useDispatch } from "react-redux";

const CreatePage = () => {
  const { dateToMilliseconds } = timer();
  const dispatch = useDispatch();

  const titleRef = useRef();
  const imgRef = useRef();
  const descRef = useRef();
  const authorRef = useRef();
  const categoryRef = useRef();

  function addNews() {
    const title = titleRef.current.value;
    const img = imgRef.current.value;
    const description = descRef.current.value;
    const author = authorRef.current.value;
    const category = authorRef.current.value;

    if (
      title.trim() != "" &&
      author.trim() != "" &&
      category.trim() != "" &&
      img.trim() != "" &&
      description.trim() != ""
    ) {
      const newNews = {
        img,
        title,
        description,
        publishedAt: dateToMilliseconds(new Date()),

        author,
        category,

        like: 0,
        comment: 0,
        share: 0,
      };
      dispatch(addNewNews(newNews));
    }
    titleRef.current.value = "";
    authorRef.current.value = "";
    categoryRef.current.value = "";
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
            <input
              type="text"
              ref={authorRef}
              placeholder="Author"
              className={style.input}
            />
            <input
              type="text"
              ref={categoryRef}
              placeholder="Category"
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
