import React, { Component } from 'react';
import { Base64 } from 'js-base64';
/*
for fatching Data from api : i followed this url
https://blog.hellojs.org/fetching-api-data-with-react-js-460fe8bbf8f2
 */



class Products extends Component {
    constructor() {
        super();

        this.state = {
            products: []
        };
        this.fetchProductFromApi();
    }

    fetchProductFromApi(){

        let url = 'https://dev.sebpo.net/theme.sebpo.net/wp-restapi-test/wc-api/v3/products?filter[limit] =7';
        let username = 'ck_637c1da25e69980d738d6a5c3ebd52e175290ce3';
        let password = 'cs_062b938a3a3481e7820312b7d160cc52d724ee6c';

        let headers = new Headers();

      //  headers.append('Access-Control-Allow-Origin', 'Origin');
      //  headers.append('Access-Control-Allow-Credentials', 'true');
       headers.append('Content-Type', 'application/json; charset=utf-8');

      //  headers.append('Origin','http://localhost:3000');

        headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
        headers.append('Access-Control-Allow-Credentials', 'true');
        headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
        headers.append('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');

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
            <div className="product">
                Product
                {this.state.products}
            </div>
        );
    }
}

export default Products;
