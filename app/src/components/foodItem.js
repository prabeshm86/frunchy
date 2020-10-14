import React, { Component } from "react";

class FoodItem extends Component {
    render() {
      return (
        <div className="food-item">
          <h1>{this.props.name}</h1>
          <img src={this.props.image}></img>
          <p>{this.props.description}</p>
        </div>
      );
    }
  }

  export default FoodItem;
  
  // Example usage: <MenuItem name="" image="" description="" />