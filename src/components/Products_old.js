import React, { Component } from 'react';
//import  { ProductThumbList } from './product/Productthumblistist';

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
            products: [],
            token:this.props.token
        };

     //   this.getToken() ;
      //  this.fetchProductFromwooApi = this.fetchProductFromwooApi.bind(this);
    }





    componentDidMount() {
        console.log("token"+this.state.token);
        if(this.state.token !='') {
            this.fetchProductFromwooApi();
        }else{

            this.getToken(this);

           this.fetchProductFromwooApi();
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

    getToken(parent){
        //
        //  var parent = this; // for removing TypeError: "this is undefined"
        let token_from_api = '';
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

                token_from_api = responseData;
                parent.setState({
                    token: responseData
                }) ;
            }).catch(function(error) {

            console.log(error);
        });


    }



    render() {

        function ProductThumbList(props){
            let src = '';
            if( typeof props.listing !='undefined' && typeof props.listing.images !=='undefined' && typeof props.listing.images[0] !=='undefined' &&  typeof props.listing.images[0].src != 'undefined'){
                 src = props.listing.images[0].src;
            }
          //  console.log(props.listing[1]);

            return(
                            <div className="item  col-xs-4 col-lg-4">
                                <div className="thumbnail">
                                    <img className="group list-group-image" src={src} alt={props.listing.name} />
                                    <div className="caption">
                                        <h4 className="group inner list-group-item-heading">
                                            {props.listing.name}</h4>
                                        <p className="group inner list-group-item-text">
                                            Product description... Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                                            sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                                        <div className="row">
                                            <div className="col-xs-12 col-md-6">
                                                <p className="lead">
                                                    $21.000</p>
                                            </div>
                                            <div className="col-xs-12 col-md-6">
                                                <a className="btn btn-success" href="http://www.jquery2dotnet.com">Add to cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>



            )
        }


        return (
            <div className="container products">
                <h2>product List </h2>

                <div className="row list-group">
                {


                    Object.entries(this.state.products).map(entry =>{
                        return(
                            <ProductThumbList key={entry[0]} listing={entry[1]} />
                        )
                    } )
                }
                </div>
            </div>
        );
    }
}




export default Products;
