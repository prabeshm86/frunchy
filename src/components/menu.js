import React from 'react';
import {
    NavLink
} from "react-router-dom";

class Menu extends React.Component {
    render() {
        return (
            <div className="menu">
                <ul className="header">
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li><NavLink to="/foodItems">Menu</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                    <li><NavLink to="/fooditemlist">Food List</NavLink></li>
                </ul>
            </div>
        );
    }
}

export default Menu;