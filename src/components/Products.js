import React, { Component } from 'react';

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
    }


    render() {
        return (
            <div className="product">
                Product

            </div>
        );
    }
}

export default Products;