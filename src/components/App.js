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
import './App.css';
import ButtonGroup from "./ButtonGroup";


//import axios from 'axios';
/*
for understanding react-router-dom , go to : https://blog.logrocket.com/react-router-dom-set-up-essential-components-parameterized-routes-505dc93642f1
 */

// import {additionalMovies} from '../data/movies-data';


class App extends Component {
    constructor() {
        super();

        this.state = {
            data: [],
            token:''

        };
      //  this.getToken();


    }

    componentDidMount() {
        console.log(this.state.token);
        if(this.state.token ===''){
            this.getToken(this);
        }

    }


    getToken(parent){
        let token_url = 'https://dev.sebpo.net/theme.sebpo.net/wp-restapi-test/wp-json/jwt-auth/v1/token';
        let formData = new FormData();
        formData.append('username', 'mohsin');
        formData.append('password', '123456');
        fetch(token_url,{
            method: 'POST',
            body: formData,
        })
            .then(function(response) {
                return response.json();
            })
            .then(function(myJson) {
                  var responseData = myJson.token;

               //  let token_from_api = responseData;
                    parent.setState({
                        token: responseData
                    }) ;
            }).catch(function(error) {

                    console.log(error);
            });
    }

  render() {
      var  headerText = 'welcome';
   //  this.getToken();


      return (
          <Router>
              <div className="App">
                <Header text={headerText}/>
                  <ButtonGroup key={2} technologies={["React", "Elm", "React-redux"]} />
                  <div className='app-content'>
                    <Switch>
                        <Route exact path="/" component={Home} />

                        <Route path="/movies" component={Movies} />
                        <Route path="/news" component={News} />
                        <Route path="/topics" component={Topics}  />
                        <Route path="/contact" component={Contact} />
                        <Route path="/about" component={About} />
                        <Route path="/products" render={(routeProps)=> (<Products {...routeProps} token={this.state.token} getToken={this.getToken} />) } />


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
