import React, { Component } from 'react';


class ProductThumbList extends Component {


    addToCart =(e,product)=>{
        e.preventDefault();

        this.props.addProductToCart(product);
    }

    render() {

        let src = '';
        if( typeof this.props.listing !='undefined' && typeof this.props.listing.images !=='undefined' && typeof this.props.listing.images[0] !=='undefined' &&  typeof this.props.listing.images[0].src != 'undefined'){
            src = this.props.listing.images[0].src;
        }
        //  console.log(this.props.listing[1]);
        const product = this.props.listing;

        return (
                <div className="item  col-xs-4 col-lg-4 " id={"product-"+product.id }>
                    <div className="thumbnail">
                        <img className="group list-group-image" src={src} alt={this.props.listing.name} />
                        <div className="caption">
                            <h4 className="group inner list-group-item-heading">
                                {this.props.listing.name}</h4>
                            <p className="group inner list-group-item-text">
                                {product.short_description}
                            </p>
                            <div className="row">
                                <div className="col-xs-12 col-md-6">
                                    <p className="lead">
                                        $ {product.price}</p>
                                </div>
                                <div className="col-xs-12 col-md-6">
                                    <button className="btn btn-success" onClick={(e)=>this.addToCart(e,this.props.listing)}  >Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}

export default ProductThumbList;