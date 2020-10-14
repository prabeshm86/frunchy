import React from 'react';
import logo from './images/logo.jpg';
import './App.css';
import Menu from './components/menu';
import {
    Route,
    HashRouter
} from "react-router-dom";
import Home from "./components/pages/home";
import FoodItems from "./components/pages/foodItems";
import Contact from "./components/pages/contact";
import Fooditemlist from "./components/pages/fooditemlist";

function App() {
    return (
        <HashRouter >
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <Menu></Menu>
                </header>
                <div className="content">
                    <Route exact path="/" component={Home} />
                    <Route path="/fooditems" component={FoodItems} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/fooditemlist" component={Fooditemlist} />
                </div>
                <footer >
                    Frunchy Restro 2020. All rights reserved. </footer> </div>
        </HashRouter>
    );
}

export default App;