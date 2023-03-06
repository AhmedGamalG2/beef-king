import React, { useState } from "react";
import Product from "../components/Product";
import cartCss from "./Cart.module.css";

const Cart = ({
  cart,
  handelIncrement,
  handelDecrement,
  handelToggle,
  handelReset,
}) => {
  ///// Calc Total
  let total = 0;
  cart.forEach((index) => {
    total += index.count * index.price;
  });

  return (
    <div className={cartCss.container}>
      {cart.map((p) => (
        <Product
          data={p}
          key={p.id}
          handelIncrement={handelIncrement}
          handelDecrement={handelDecrement}
          handelToggle={handelToggle}
        />
      ))}
      {cart.length ? (
        <button onClick={handelReset} className={cartCss.reset}>
          Reset
        </button>
      ) : (
        <h1 style={{ color: "rgb(158 158 158 )" }}>No items in the cart</h1>
      )}
      <div
        style={{
          width: "80%",

          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            width: "47%",
            backgroundColor: "#f0eeed",
            padding: "10px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
        >
          <div style={{ paddingBottom: "5px", fontWeight: "bold" }}>
            Promotion Code
          </div>
          <div style={{ width: "100%" }}>
            <input
              placeholder="COUPON CODE"
              type="text"
              style={{
                width: "60%",
                minWidth: "120px",
                marginBottom: "10px",
                marginInlineEnd: "10px",
                height: "25px",
                color: "gray",
              }}
            />

            <button
              style={{
                width: "35%",
                minWidth: "120px",
                height: "30px",

                border: "none",
                backgroundColor: "rgb(23, 23, 23)",
                color: "rgb(202, 233, 248)",
                cursor: "pointer",
              }}
            >
              APPLY COUPON
            </button>
          </div>
        </div>
        <div
          style={{ width: "47%", backgroundColor: "#f0eeed", padding: "10px" }}
        >
          <div style={{ paddingBottom: "5px", fontWeight: "bold" }}>Totals</div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "10px",
              border: "1px solid gray",
              borderBottom: "none",
            }}
          >
            <span style={{}}>Subtotal</span>
            <span style={{}}>${total}</span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "10px",
              border: "1px solid gray",
            }}
          >
            <span>Total</span>
            <span>${total}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
