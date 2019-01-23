import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch,Redirect } from "react-router-dom";

import Header from './Header';
import Footer from './Footer';
import Movies from './Movies';
import Home from './Home';


import News from './News';
import Topics from './Topics';
import Contact from './Contact';
import About from './About';
import Products from './Products';


/*
for understanding react-router-dom , go to : https://blog.logrocket.com/react-router-dom-set-up-essential-components-parameterized-routes-505dc93642f1
 */

// import {additionalMovies} from '../data/movies-data';


import './App.css';



class App extends Component {
    constructor() {
        super();

        this.state = {
            data: []
        };
    }
  render() {
      var  headerText = 'welcome';

      return (
          <Router>
              <div className="App">
                <Header text={headerText} />

                <div className='app-content'>
                    <Switch>
                        <Route exact path="/" component={Home} />

                        <Route path="/movies" component={Movies} />
                        <Route path="/news" component={News} />
                        <Route path="/topics" component={Topics} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/about" component={About} />
                        <Route path="/products" component={Products} />
                        <Redirect to="/" />
                    </Switch>
                </div>
                <Footer/>

              </div>
          </Router>
    );
  }
}

export default App;
