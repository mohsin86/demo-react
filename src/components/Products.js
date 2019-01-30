import React, { Component } from 'react';
import { Base64 } from 'js-base64';

import axios from 'axios';

/*
for fatching Data from api : i followed this url
https://blog.hellojs.org/fetching-api-data-with-react-js-460fe8bbf8f2
 */



class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: {},
            token:this.props.token
        };
        console.log("token = "+this.props.token);
     //   this.getToken() ;
      //  this.fetchProductFromwooApi = this.fetchProductFromwooApi.bind(this);
    }

    componentDidMount() {
            this.fetchProductFromwooApi();
      // this.fetchProductFromwooApiByaxios();
    }


    fetchProductFromwooApi(){
        var parent = this;

        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        headers.append('Authorization', 'Bearer '+this.state.token);

       //
          headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Credentials', true);
       headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
       headers.append('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
         headers.append('Origin','http://localhost:3000');


   var url = 'https://dev.sebpo.net/theme.sebpo.net/wp-restapi-test/wp-json/igloo/products/';
  //  var url = '/wp-json/igloo/products/';
 //  var url = 'https://dev.sebpo.net/theme.sebpo.net/wp-restapi-test/wp-json/wp/v2/posts';
        fetch(url,{
            method: "GET",
            headers: headers,
         //   mode: 'no-cors',

        }).then(function(response){
          //  console.log(response);
            return response.json();

        }).then(function(result){
             console.log(result);
            // if (result.data.status === 200) {
            //     parent.setState({
            //          products: result
            //     });
            // }
                parent.setState({
                     products: result
                });

        }).catch(function(error) {
            // If there is any error you will catch them here
            console.log(error);
        });

    }

    fetchProductFromwooApiByaxios(){
        var parent = this;

        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        headers.append('Authorization', 'Bearer '+this.state.token);


     //  headers.append('Access-Control-Allow-Origin', '*');
       //  headers.append('Access-Control-Allow-Credentials', true);
    //     headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    //     headers.append('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
     //     headers.append('Origin','http://localhost:3000');

        axios.get('https://dev.sebpo.net/theme.sebpo.net/wp-restapi-test/wp-json/igloo/products/',{
            method: 'GET',
            headers: headers,

        }).then(results => console.log(results))
    }

    fetchProductFromApi(){
        let url = 'https://dev.sebpo.net/theme.sebpo.net/wp-restapi-test/wc-api/v3/products?filter[limit] =7';
        let username = 'ck_637c1da25e69980d738d6a5c3ebd52e175290ce3';
        let password = 'cs_062b938a3a3481e7820312b7d160cc52d724ee6c';

        let headers = new Headers();
        headers.append('Authorization', 'Basic '+Base64.encode(username + ":" + password));
      //  headers.append('Access-Control-Allow-Origin', 'Origin');
      //  headers.append('Access-Control-Allow-Credentials', 'true');
       headers.append('Content-Type', 'application/json; charset=utf-8');

      //  headers.append('Origin','http://localhost:3000');

        headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
        headers.append('Access-Control-Allow-Credentials', 'true');
        headers.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
        headers.append('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

        headers.append('Authorization', 'Basic '+Base64.encode(username + ":" + password));

       // console.log(Base64.encode(username + ":" + password));
         fetch(url, {
            method: 'GET',
            headers: headers,
            credentials: 'include',
            mode: 'no-cors',
      //      redirect: 'follow'

        }).then(response => {
             return response.json();
         }).then(function(data) {
            // Here you get the data to modify as you please
             console.log(JSON.stringify(data));
        }).catch(function(error) {
        // If there is any error you will catch them here
            console.log(error);
        });


    // console.log(responseJson);
        //
        // this.setState({
        //     products: responseJson
        // })


    }

    render() {

        return (


            <div className="products">




            </div>
        );
    }
}

export default Products;
