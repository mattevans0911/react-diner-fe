//blue print for how we want our food items to look

import React from "react";

const FoodItem = (props) => {
  const { title, price } = props.FoodItem; //destructuring and placing the two properties into the FoodItem

  return (
    <div
      className="FoodItem-container"
      onClick={() => props.selectFoodItem(props.FoodItem)}
    >
      <h3>{title}</h3>
      <div>{price}</div>
    </div>
  );
};

export default FoodItem;
