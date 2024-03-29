import React, { useState, useEffect } from "react";
import Menu from "./Menu";
import Order from "./Order";

export default function App() {
  const [mainCourse, setMainCourse] = useState({ price: 0 });
  const [sideOne, setSideOne] = useState({ price: 0 });
  const [sideTwo, setSideTwo] = useState({ price: 0 });
  const [totalPrice, setTotalPrice] = useState(0);
  const [comment, setComment] = useState("");
  const [clicked, setClicked] = useState([]);
  const [reset, setReset] = useState(false);

  const generateComment = (title) => {
    const waitressComments = [
      `That is a great choice! I love the ${title}`,
      `${title} is really good!`,
      `The ${title} goes great with a drink!`,
    ];

    setComment(
      waitressComments[Math.floor(Math.random() * waitressComments.length)]
    );
  };

  const selectFoodItem = (FoodItem) => {
    reset === true ? setReset(false) : null;
    if (mainCourse.price === 0) {
      setMainCourse(FoodItem);
    } else if (sideOne.price === 0) {
      setSideOne(FoodItem);
    } else if (sideTwo.price === 0) {
      setSideTwo(FoodItem);
    }
    setClicked([FoodItem.id, ...clicked]);
  };

  const calculateTotalPrice = () =>
    Number(mainCourse.price) + Number(sideOne.price) + Number(sideTwo.price);

  useEffect(() => {
    setTotalPrice(calculateTotalPrice());
    if (reset === true) {
      setReset(false);
    }
  }, [mainCourse, sideOne, sideTwo, comment]);

  const resetItems = () => {
    setMainCourse({ price: 0 });
    setSideOne({ price: 0 });
    setSideTwo({ price: 0 });
    setComment("");
    setClicked([]);
    setReset(true);
  };

  return (
    <div className="app">
      <h2 className="diner-title">Bottega Diner</h2>
      <div className="all-menus">
        <Menu
          type={"breakfast"}
          selectFoodItem={selectFoodItem}
          generateComment={generateComment}
          clicked={clicked}
          reset={reset}
        />
        <Menu
          type={"lunch"}
          selectFoodItem={selectFoodItem}
          generateComment={generateComment}
          clicked={clicked}
          reset={reset}
        />
        <Menu
          type={"dinner"}
          selectFoodItem={selectFoodItem}
          generateComment={generateComment}
          clicked={clicked}
          reset={reset}
        />
      </div>
      <Order
        totalPrice={totalPrice.toFixed(2)}
        mainCourse={mainCourse}
        sideOne={sideOne}
        sideTwo={sideTwo}
        resetItems={resetItems}
      />
      <div className="waitress-comment">Waitress Comment: {comment}</div>
    </div>
  );
}
