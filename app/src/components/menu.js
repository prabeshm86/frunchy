import React, {Component} from 'react';
import {
    NavLink
} from "react-router-dom";

class Menu extends Component {
    render() {
        return (
            <div className="menu">
                <ul className="header">
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li><NavLink to="/foodItems">Menu</NavLink></li>
                    <li>Gallery</li>
                    <li>Our Story</li>
                    <li><NavLink to="/contact">Find Us</NavLink></li>
                </ul>
            </div>
        );
    }
}

export default Menu;