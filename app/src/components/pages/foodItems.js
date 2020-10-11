import React, { Component } from "react";
import FoodItem from '../foodItem';

const items = [
  {
    name: "Chicken Momo",
    description: "Very Delicious Momo",
    image: "https://64.media.tumblr.com/b78c8b3351ffe2c6cae70e09be2a5448/tumblr_n47eg0KXWs1tyi1qro1_r1_1280.jpg"
  },
  {
    name: "Veg Momo",
    description: "Very Delicious Momo",
    image: "https://64.media.tumblr.com/b78c8b3351ffe2c6cae70e09be2a5448/tumblr_n47eg0KXWs1tyi1qro1_r1_1280.jpg"
  }
];

class FoodItems extends Component {

  render() {
    return (
      <div>
        <h2>Our Menu</h2>
        {
          items.map(item => (
            <FoodItem name={item.name} image={item.image} description={item.description}></FoodItem>
           // <li>{item.name}</li>
          ))
        }

      </div>
    );
  }
}

export default FoodItems;