import React from 'react';
import { useSelector } from 'react-redux';

import CartItem from './CartItem';

const CartModal = props => {
  const CART_ITEMS = useSelector(state => state.cart.items);
  const totalAmount = useSelector(state => state.cart.totalAmount);

  const addItemHandler = item => {};

  const removeItemHanlder = id => {};

  const orderHanlder = async () => {};

  return (
    <div
      className="card border-0"
      style={{
        width: '60%',
        top: '10vh',
        zIndex: '100',
        left: '20%'
      }}
    >
      <div className="card-header bg-success text-light fw-bold border border-success border-4">
        <h4>Your Cart</h4>
      </div>

      <div className="card-body">
        <div style={{ maxHeight: '20rem', overflow: 'scroll' }}>
          {/* <CartItem name="Coffee" price="25" amount="1" />
          <CartItem name="Coffee" price="25" amount="1" />
          <CartItem name="Coffee" price="25" amount="1" /> */}
          {CART_ITEMS.length === 0 && <h4>Your cart is empty</h4>}
          {CART_ITEMS.map(item => (
            <CartItem
              key={item.key}
              name={item.name}
              price={item.price}
              quantity={item.quantity}
              id={item.id}
            />
          ))}
        </div>

        {CART_ITEMS.length >= 1 && (
          <h2 className="mb-4">Total Amount : $ {totalAmount}</h2>
        )}

        <button
          onClick={orderHanlder}
          className="btn btn-success me-4"
          disabled={CART_ITEMS.length === 0}
        >
          Order
        </button>
        <button className="btn btn-outline-danger" onClick={props.onModalClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default CartModal;
