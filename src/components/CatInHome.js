import React from "react";

import { Link } from "react-router-dom";
import style from "./CatInHome.module.css";
const CatInHome = ({ categories, setCategory }) => {
  console.log(categories);

  return (
    <div className={style.product}>
      <img src={categories?.strCategoryThumb} className={style.productImg} />
      <div className={style.title}>{categories.strCategory}</div>
      <div className={style.content}>
        <div style={{ color: "#cae9f8", fontSize: "20px" }}>
          {categories.strCategoryDescription}
        </div>
        <Link
          to="/menu"
          className={style.btn}
          onClick={() => setCategory(categories.strCategory)}
        >
          Go Menu
        </Link>
      </div>
    </div>
  );
};

export default CatInHome;
