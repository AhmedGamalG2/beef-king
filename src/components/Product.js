import React from "react";
import productStyle from "./Product.module.css";

const Product = (props) => {
  let { strMeal, price, count, strMealThumb, idMeal } = props.data;
  return (
    <div className={productStyle.cart}>
      <div className={productStyle.content}>
        <div className={productStyle.firstHalf}>
          <button
            onClick={() => props.handelToggle(props.data)}
            className={productStyle.xBtn}
          >
            X
          </button>
          <img src={strMealThumb} style={{ height: "80px", width: "80px" }} />
        </div>
        <div>
          <div style={{ fontSize: "20px", fontWeight: "bold" }}>{strMeal}</div>
          <div>$ {price}</div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          width: "70%",
          columnGap: "20%",
          justifyContent: "center",
        }}
      >
        <div className={productStyle.lastHalf}>
          <button
            onClick={() => props.handelIncrement(idMeal)}
            style={{
              borderRadius: "50%",
              height: "30px",
              width: "30px",
              border: "none",
              backgroundColor: "#171717",
              cursor: "pointer",
              color: "#cae9f8",
            }}
          >
            +
          </button>
          <span style={{ width: "20px", textAlign: "center" }}>{count}</span>
          <button
            onClick={() => props.handelDecrement(idMeal)}
            style={{
              borderRadius: "50%",
              height: "30px",
              width: "30px",
              border: "none",
              backgroundColor: "#171717",
              cursor: "pointer",
              color: "#cae9f8",
            }}
          >
            -
          </button>

          <div style={{ width: "40px" }}>$ {price * count}</div>
        </div>
      </div>
    </div>
  );
};

export default Product;
