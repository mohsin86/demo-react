import React, { Component } from 'react';

import store  from "./store/index";

import  ProductThumbList  from './product/ProductThumbList';

// import { Base64 } from 'js-base64';


// import axios from 'axios';

/*
for fatching Data from api : i followed this url
https://blog.hellojs.org/fetching-api-data-with-react-js-460fe8bbf8f2
 */



class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            token:this.props.token,
            loginIn:false,
            user:[],
            cart:[],
        };

     //   this.getToken() ;
      //  this.fetchProductFromwooApi = this.fetchProductFromwooApi.bind(this);
    }


    componentDidMount() {
        console.log("token"+this.state.token);
        if(this.state.token !=='') {
            this.fetchProductFromwooApi();
        }else{
            this.getToken(this);
        }
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
 //  var url = 'https://dev.sebpo.net/theme.sebpo.net/wp-restapi-test/wp-json/wp/v2/posts';
        fetch(url,{
            method: "GET",
            headers: headers,
         //   mode: 'no-cors',

        }).then(function(response){
            return response.json();

        }).then(function(result){
             //   console.log(result)
         //   if(typeof result.data != "undefined"){
                    parent.setState({
                        products: result
                    });
       //     }

        }).catch(function(error) {
            // If there is any error you will catch them here
            console.log(error);
        });

    }

    getToken(){
        //
        let parent = this;
        //  var parent = this; // for removing TypeError: "this is undefined"

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
                parent.setState({
                    token: responseData

                }) ;

                parent.fetchProductFromwooApi();

            }).catch(function(error) {

            console.log(error);
        });


    }


    addProductToCart =(product)=>{

        let src = '';
        if( typeof product !='undefined' && typeof product.images !=='undefined' && typeof product.images[0] !=='undefined' &&  typeof product.images[0].src != 'undefined'){
            src = product.images[0].src;
        }
        const add_cart = {type:'ADD_CART', cart:{id:product.id,name:product.name,image:src}};
        store.dispatch(add_cart);

    }


    render() {
        return (
            <div className="container products">
                <h2>Product List </h2>

                <div className="row list-group">
                {

                    Object.entries(this.state.products).map(entry =>{

                        return(
                            <ProductThumbList key={entry[0]} listing={entry[1]} addProductToCart={this.addProductToCart} />
                        )
                    } )
                }
                </div>
            </div>
        );
    }
}



export default Products;
