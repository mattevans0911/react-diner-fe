import React, { useState, useEffect } from "react";
import Menu from "./Menu";

export default function App() {
  const [mainCourse, setMainCourse] = useState({ price: 0 });
  const [sideOne, setSideOne] = useState({ price: 0 });
  const [sideTwo, setSideTwo] = useState({ price: 0 });
  const [totalPrice, setTotalPrice] = useState(0);

  const selectFoodItem = (FoodItem) => {
    if (mainCourse.price === 0) {
      setMainCourse(FoodItem);
    } else if (sideOne.price === 0) {
      setSideOne(FoodItem);
    } else if (sideTwo.price === 0) {
      setSideTwo(FoodItem);
    }
  };

  const calculateTotalPrice = (mainCourse, sideOne, sideTwo) =>
    mainCourse + sideOne + sideTwo;

  useEffect(() => {
    setTotalPrice(
      calculateTotalPrice(
        Number(mainCourse.price),
        Number(sideOne.price),
        Number(sideTwo.price)
      )
    );
  }, [mainCourse, sideOne, sideTwo]);

  return (
    //naming our props with the "type" call. Calling the props by name in the curly braces.
    <div className="app">
      <Menu type={"breakfast"} selectFoodItem={selectFoodItem} />
      <Menu type={"lunch"} selectFoodItem={selectFoodItem} />
      <Menu type={"dinner"} selectFoodItem={selectFoodItem} />

      <div>{totalPrice.toFixed(2)}</div>
    </div>
  );
}
