import React from 'react';
import { useDispatch } from 'react-redux';

import { cartActions } from '../../store/cart-slice';

const CartItem = props => {
  const dispatch = useDispatch();

  const addItemHandler = () => {
    dispatch(
      cartActions.addToCart({
        id: props.id,
        quantity: 1,
        price: props.price
      })
    );
  };
  const removeItemHandler = () => {
    dispatch(cartActions.removeFromCart(props.id));
  };

  return (
    <div className="me-4">
      <div className="d-flex justify-content-between">
        <div>
          <h5 className="card-title">{props.name}</h5>

          <p className="card-text flex-end text-success fw-bold">
            $ {props.price}
          </p>
        </div>
        <div className="d-flex justify-content-between">
          <h4 className="me-4">x {props.quantity}</h4>
          <div>
            <button
              className="btn btn-outline-success me-4"
              onClick={addItemHandler}
            >
              +
            </button>
            <button
              className="btn btn-outline-danger"
              onClick={removeItemHandler}
            >
              -
            </button>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default CartItem;
