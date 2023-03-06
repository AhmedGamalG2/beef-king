import React, { useEffect, useState } from "react";
import CatInHome from "../components/CatInHome";
import HomeStayle from "./Home.module.css";

const Home = ({ categories, products, setCategory }) => {
  let [newShuffled, setNewShuffled] = useState([]);
  useEffect(() => {
    const shuffled = [...categories].sort(() => 0.5 - Math.random());
    let shuffledArray = shuffled.slice(0, 5);
    setNewShuffled(shuffledArray);
  }, [categories]);

  return (
    <div className={HomeStayle.container}>
      <div>
        <div className={HomeStayle.phara}>
          <div>Cola With Burger</div>
          <button className={HomeStayle.orderBtn}>Order Now</button>
        </div>
        <img
          className={HomeStayle.imag}
          src="https://www.c-store.com.au/wp-content/uploads/2020/04/Chicken-Burgers-Takeaway-4098x2308px-Burger-With-Chips-and-Coca-Cola-No-Sugar-600mL-scaled.jpg?resize=1200,676"
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          rowGap: "15px",
          padding: "10px",
        }}
      >
        {newShuffled.map((cat) => (
          <CatInHome
            categories={cat}
            products={products}
            setCategory={setCategory}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
