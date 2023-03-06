import React, { useState, useEffect } from "react";
import MenuProduct from "../components/MenuProduct";
import MenuCss from "./Menu.module.css";
import { useScrollTo } from "react-use-window-scroll";
const Menu = ({
  products,
  categories,
  handelToggle,
  currentCat,
  currentPage,
  setCurrentPage,
  setCategory,
  searchValue,
  cart,
}) => {
  //////scroll to top
  const scroll = useScrollTo();
  useEffect(() => {
    scroll({ top: 0, left: 0, behavior: "smooth" });
  }, [currentPage, searchValue]);
  ////////

  let newProducts = [...products];

  //Search

  newProducts = newProducts.filter((p) =>
    p.strMeal.toUpperCase().includes(searchValue.toUpperCase())
  );

  //Pagination

  const numOfProductsPerPage = 15;
  const numOfPages = Math.ceil(newProducts.length / numOfProductsPerPage);
  let pages = [];
  for (let i = 1; i <= numOfPages; i++) {
    pages.push(i);
  }
  let start = (currentPage - 1) * numOfProductsPerPage;
  newProducts = newProducts.slice(start, start + numOfProductsPerPage);

  return (
    <div className={MenuCss.container}>
      <div className={MenuCss.catContain}>
        {categories.map((c) => (
          <span
            className={
              c.strCategory == currentCat
                ? MenuCss.currentCatStyle
                : MenuCss.cat
            }
            onClick={() => setCategory(c.strCategory)}
            key={c.idCategory}
          >
            {c.strCategory}
          </span>
        ))}
      </div>

      <div className={MenuCss.content}>
        {/* <div className={MenuCss.sortContainer}>
          {sortArray.map((s) => (
            <span
              key={s}
              onClick={() => {
                s == sort.type
                  ? setSort({ type: s, des: sort.des + 1 })
                  : setSort({ type: s, des: 1 });
                setCurrentPage(1);
              }}
              className={
                s == sort.type ? MenuCss.sortSelected : MenuCss.sortItem
              }
            >
              {s.toUpperCase()}
              <span style={{ fontSize: "15px", marginLeft: "5px" }}>
                {sort.des == 1 && s == sort.type
                  ? ">"
                  : sort.des == 2 && s == sort.type
                  ? "<"
                  : ""}
              </span>
            </span>
          ))}
        </div> */}
        {newProducts.length ? (
          <div className={MenuCss.prodContainer}>
            {newProducts.map((p) => (
              <MenuProduct
                pro={p}
                key={p.idMeal}
                handelToggle={handelToggle}
                cart={cart}
              />
            ))}
          </div>
        ) : (
          <span
            style={{
              width: "100%",
              textAlign: "center",
              fontSize: "30PX",
              color: "white",
            }}
          >
            NO RESULT FOUND
          </span>
        )}
      </div>

      {pages.length != 1 && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          {pages.map((p) => (
            <span
              onClick={() => setCurrentPage(p)}
              className={
                p == currentPage
                  ? MenuCss.currentPageNumStyle
                  : MenuCss.pagnationNums
              }
              key={p}
            >
              {p}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default Menu;
