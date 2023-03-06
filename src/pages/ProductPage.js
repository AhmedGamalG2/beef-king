import React, { useEffect, useState } from "react";
import axios from "axios";

import { useParams } from "react-router-dom";
import Spiner from "../components/Spiner";
import Module from "./ProductPage.module.css";

const ProductPage = ({ products, cart, handelToggle }) => {
  const [product, setProduct] = useState({});
  let { id } = useParams();
  useEffect(() => {
    if (
      cart.findIndex((pro) => pro.idMeal == id) == -1 &&
      products.findIndex((pro) => pro.idMeal == id) == -1
    ) {
      console.log("product effect");
      const fetchData = async () => {
        let { data } = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        data.meals[0].price = Math.floor(Math.random() * 100) + 20;
        data.meals[0].count = 0;
        setProduct(data.meals[0]);
      };
      fetchData();
      //
    } else if (cart.findIndex((pro) => pro.idMeal == id) != -1) {
      let index = cart.findIndex((pro) => pro.idMeal == id);
      setProduct(cart[index]);
    } else if (products.findIndex((pro) => pro.idMeal == id) != -1) {
      let index = products.findIndex((pro) => pro.idMeal == id);
      setProduct(products[index]);
    }
  }, []);

  return (
    <div className={Module.container}>
      {product ? (
        <div className={Module.data}>
          <img
            src={`${product.strMealThumb}`}
            style={{ width: "80%", height: "70%", alignSelf: "center" }}
          />

          <div style={{ color: "white" }}>{product.strInstructions}</div>
        </div>
      ) : (
        <Spiner />
      )}
      {product ? (
        <div className={Module.detailsContainer}>
          <div className={Module.details}>
            <div>
              <div className={Module.line}>{product.strMeal}</div>
              <div>
                IS THE BEST {product.strCategory?.toUpperCase()} FOR YOUR HOT
                DAY
              </div>
            </div>
            <div>
              <div className={Module.line}>CATEGORY</div>
              <div>{product.strCategory}</div>
            </div>
            <div>
              <div className={Module.line}>PRICE</div>
              <div>{product.price} $</div>
            </div>
            <div>
              <div className={Module.line}>SOME DETAILS</div>
              <div>{product.strIngredient1}</div>
              <div>{product.strIngredient2}</div>
              <div>{product.strIngredient3}</div>
            </div>
          </div>

          <button
            onClick={() => handelToggle(product)}
            style={
              cart.findIndex((pr) => pr.idMeal == product.idMeal) == -1
                ? {
                    height: "40px",
                    backgroundColor: "#609ea2",
                    color: "#cae9f8",
                    cursor: "pointer",
                    border: "none",
                  }
                : {
                    height: "40px",
                    backgroundColor: "red",
                    color: "#cae9f8",
                    cursor: "pointer",
                    border: "none",
                  }
            }
          >
            {cart.findIndex((pr) => pr.idMeal == product.idMeal) == -1
              ? "Add To Cart"
              : "Remove From Cart"}
          </button>
        </div>
      ) : (
        <Spiner />
      )}
    </div>
  );
};

export default ProductPage;
