import axios from "axios";
import React, { useEffect, useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Product from "./components/Product";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/LoginPage";
import Menu from "./pages/Menu";
import Page404 from "./pages/Page404";
import ProductPage from "./pages/ProductPage";
import Reg from "./pages/Reg";

const App = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [active, setActive] = useState("");
  let [currentCat, setCurrentCat] = useState("");
  let [currentPage, setCurrentPage] = useState(1);
  let [searchValue, setSearchValue] = useState("");
  let [cart, setCart] = useState([]);

  const handelActive = (value) => {
    setActive(value);
  };
  console.log("render");
  console.log(products);
  // Fetch Api
  // useEffect(() => {
  //   console.log("EFFECT");
  //   const fetchData = async () => {
  //     const { data: apiProducts } = await axios.get(
  //       "http://localhost:3000/products"
  //     );
  //     console.log(apiProducts);
  //     setProducts(apiProducts);
  //     const { data: apiCat } = await axios.get(
  //       "http://localhost:3000/categories"
  //     );
  //     setCategories(apiCat);
  //   };
  //   fetchData();
  // }, []);
  ////////

  useEffect(() => {
    console.log("EFFECT");
    const fetchData = async () => {
      let data = [];
      for (let i = 97; i <= 100; i++) {
        let char = String.fromCharCode(i);
        const datab = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/search.php?f=${char}`
        );
        if (datab.data.meals) data = [...data, ...datab.data.meals];
      }
      data.map((d) => {
        d.isInCart = false;
        d.count = 0;
        d.price = Math.floor(Math.random() * 100) + 20;
      });
      console.log(data);
      setProducts(data);
    };
    fetchData();
  }, []);
  useEffect(() => {
    console.log("cat effect");
    const fetchData = async () => {
      var { data } = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/categories.php`
      );

      console.log(data.categories);
      setCategories(data.categories);
    };
    fetchData();
  }, []);
  useEffect(() => {
    if (currentCat != "") {
      console.log(`current cat effect ${currentCat.toLowerCase()}`);
      const fetchData = async () => {
        let { data } = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${currentCat.toLowerCase()}`
        );
        let newData = data.meals;
        newData.map((d) => {
          d.isInCart = false;
          d.count = 0;
          d.price = Math.floor(Math.random() * 100) + 20;
        });
        console.log(newData);
        setProducts(newData);
      };
      fetchData();
    }
  }, [currentCat]);
  ////////
  const handelIncrement = (pID) => {
    //Clone
    const newProducts = [...products];
    //Update
    const index = newProducts.findIndex((prod) => prod.idMeal === pID);
    newProducts[index].count = newProducts[index].count + 1;
    //SetState
    setProducts(newProducts);
  };
  const handelDecrement = (pID) => {
    //Clone
    const newProducts = [...products];
    //Update
    const index = newProducts.findIndex((prod) => prod.idMeal === pID);

    if (newProducts[index].count > 0)
      newProducts[index].count = newProducts[index].count - 1;
    //SetState
    setProducts(newProducts);
  };
  // const handelToggle = (pID) => {
  //   //Clone
  //   const newProducts = [...products];
  //   //Update
  //   const index = newProducts.findIndex((prod) => prod.idMeal === pID);
  //   newProducts[index].isInCart = !newProducts[index].isInCart;
  //   //SetState
  //   setProducts(newProducts);
  // };
  const handelToggle = (p) => {
    console.log(p.idMeal);
    let newCart = [...cart];
    const index = newCart.findIndex((pro) => pro.idMeal == p.idMeal);
    console.log(index);
    if (index == -1) newCart.push(p);
    else newCart.splice(index, 1);
    setCart(newCart);
  };
  const handelReset = () => {
    //Clone
    const newProducts = [...products];
    //Update
    newProducts.map((p) => (p.count = 0));
    //SetState
    setProducts(newProducts);
  };
  //Category

  const setCategory = (catName) => {
    setCurrentCat(catName);
    setCurrentPage(1);
  };

  console.log("renderreturn");
  return (
    <div
      onClick={() => {
        active == "open" && handelActive("");
      }}
    >
      <Router>
        <Header
          active={active}
          handelActive={handelActive}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          setCurrentPage={setCurrentPage}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                categories={categories}
                products={products}
                setCategory={setCategory}
              />
            }
          />
          <Route
            path="/menu"
            element={
              <Menu
                products={products}
                categories={categories}
                handelToggle={handelToggle}
                active={active}
                currentCat={currentCat}
                setCurrentCat={setCurrentCat}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                setCategory={setCategory}
                searchValue={searchValue}
                cart={cart}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                handelIncrement={handelIncrement}
                handelDecrement={handelDecrement}
                handelToggle={handelToggle}
                handelReset={handelReset}
              />
            }
          />
          <Route
            path="/product/:id"
            element={
              <ProductPage
                products={products}
                categories={categories}
                handelToggle={handelToggle}
                cart={cart}
              />
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/reg" element={<Reg />} />
          <Route path="/about" element={<About />} />
          <Route path="/*" element={<Page404 />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
