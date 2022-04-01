import React from 'react';
import "./Cart.css"

const Cart = (props) => {
    const { cart } = props;
    console.log(cart);
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + shipping + tax;
    console.log(cart);
    return (
        <div className="cart">
            <h4>Order Summary in Cart</h4>
            <p>Selected Items:{quantity}</p>
            <p>Total Price:${total}</p>
            <p>Total Shipping:${shipping}</p>
            <p>Tax:${tax}</p>
            <p>Grand Total:${grandTotal.toFixed(2)}</p>
            {props.children}
        </div>
    );
};

export default Cart;