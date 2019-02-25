import React, { Component } from 'react';

import {  NavLink } from "react-router-dom";

/*
First : You need to install react-router-dom . It is the package used to implement the routing process in your web application.

<NavLink exact to="/url">Menu item</NavLink>

NavLink is different from Link because it handles the active class-naming. It lets you customize appearance of active links based on the current URL, automatically.

The exact property will tell React Router to add active to the link only if the path is identical as the one given in the to property.
 */


class Header extends Component {
    render() {
        return (

            <header className="App-header">

                <div className="topnav">
                    <NavLink to="/" exact >Home</NavLink>
                    <NavLink to="/products" exact >Products</NavLink>
                    <NavLink to="/news"  >News</NavLink>
                    <NavLink to="/topics"  >Topics</NavLink>
                    <NavLink to="/movies">Movies</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/contact">Contact</NavLink>

                    <div className="topnav-right">
                        <input type="text" placeholder="Search.."/>

                    </div>
                </div>
                <main>

                </main>

                {/*{this.props.text}*/}
                {this.props.cart}
            </header>


    );
    }
}

export default Header;