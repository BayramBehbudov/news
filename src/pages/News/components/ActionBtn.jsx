import React from "react";
import { useDispatch } from "react-redux";
import { setComment, setLike, setShare } from "../../../../store/newsSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faHeart, faShare } from "@fortawesome/free-solid-svg-icons";

const Button = ({ action, index, news }) => {
  const dispatch = useDispatch();

  //   return (
  //     <button
  //       onClick={() => {
  //         dispatch(
  //           (action === "like" && setLike(index)) ||
  //             (action === "comment" && setComment(index)) ||
  //             (action === "share" && setShare(index))
  //         );
  //       }}
  //     >
  //       <FontAwesomeIcon
  //         icon={
  //           (action === "like" && faHeart) ||
  //           (action === "comment" && faComment) ||
  //           (action === "share" && faShare)
  //         }
  //       />
  //       {(action === "like" && news.like) ||
  //         (action === "comment" && news.comment) ||
  //         (action === "share" && news.share)}
  //     </button>
  //   );

  if (action === "like") {
    return (
      <button
        onClick={() => {
          dispatch(setLike(index));
        }}
      >
        <FontAwesomeIcon icon={faHeart} /> 
        {action === "like" && news.like}
      </button>
    );
  } else if (action === "comment") {
    return (
      <button
        onClick={() => {
          dispatch(setComment(index));
        }}
      >
        <FontAwesomeIcon icon={faComment} />
        {news.comment}
      </button>
    );
  } else if (action === "share") {
    return (
      <button
        onClick={() => {
          dispatch(setShare(index));
        }}
      >
        <FontAwesomeIcon icon={faShare} />
        {news.share}
      </button>
    );
  }

};

export default Button;