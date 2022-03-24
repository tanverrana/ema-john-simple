import React from 'react';
import "./Products.css"

const Products = (props) => {
    const { name, img, seller, price, ratings } = props.product;
    return (
        <div className="product">
            <img src={img} alt=""></img>
            <p>{name}</p>
        </div>
    );
};

export default Products;