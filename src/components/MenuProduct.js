import { Link, NavLink } from "react-router-dom";

import MenuCss from "../pages/Menu.module.css";

const MenuProduct = ({ pro, cart, handelToggle }) => {
  return (
    <span className={MenuCss.prod}>
      <div
        style={{
          height: "280px",
          width: "280px",

          marginBottom: "20px",
        }}
      >
        <NavLink to={`/product/${pro.idMeal}`}>
          <img
            src={pro.strMealThumb}
            style={{ width: "100%", height: "100%", borderRadius: "30px" }}
          />
        </NavLink>
      </div>
      <div style={{ height: "50px" }}>{pro.strMeal}</div>
      <p>
        {pro.strArea} {pro.strCategory}
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <span>${pro.price}</span>
        <button
          onClick={() => handelToggle(pro)}
          style={
            cart.findIndex((pr) => pr.idMeal == pro.idMeal) == -1
              ? {
                  height: "25px",
                  backgroundColor: "#609ea2",
                  color: "#cae9f8",
                  cursor: "pointer",
                  border: "none",
                }
              : {
                  height: "25px",
                  backgroundColor: "red",
                  color: "#cae9f8",
                  cursor: "pointer",
                  border: "none",
                }
          }
        >
          {cart.findIndex((pr) => pr.idMeal == pro.idMeal) == -1
            ? "Add To Cart"
            : "Remove From Cart"}
        </button>
      </div>
    </span>
  );
};

export default MenuProduct;
