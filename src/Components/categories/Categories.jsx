import style from "./categories.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedCategory } from "../../../store/newsSlice";

const Categories = ({ category }) => {
  const dispatch = useDispatch();
  const selected = useSelector((state) => state.news.selectedCategory);
  const keys = Object.keys(category);

  return (
    <div className={style.container}>
      <p
        className={`${style.category} ${selected == "All" && style.selected}`}
        onClick={() => {
          dispatch(setSelectedCategory("All"));
        }}
      >
        All
      </p>
      {keys.map((key, index) => (
        <p
          className={`${style.category} ${selected == key && style.selected}`}
          onClick={() => {
            dispatch(setSelectedCategory(key));
          }}
          key={key + index}
        >
          {key}
        </p>
      ))}
    </div>
  );
};

export default Categories;
