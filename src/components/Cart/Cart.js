import React from 'react';

const Cart = (props) => {
    const { cart } = props
    return (
        <div>
            <h4>Order Summary in Cart</h4>
            <p>Selected Items:{cart.length}</p>
        </div>
    );
};

export default Cart;