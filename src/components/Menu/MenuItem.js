import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';

const MenuItem = props => {
  const dispatch = useDispatch();
  const quantityInputRef = useRef();

  const submitHanlder = event => {
    event.preventDefault();

    const enteredQuantity = quantityInputRef.current.value;
    const enteredQuantityNumber = +enteredQuantity;

    if (
      enteredQuantity.trim().length === 0 ||
      enteredQuantityNumber < 1 ||
      enteredQuantityNumber > 5
    ) {
      //invalid amount
      return;
    }
    //valid amount
    dispatch(
      cartActions.addToCart({
        id: props.id,
        name: props.name,
        price: props.price,
        quantity: enteredQuantityNumber
      })
    );
  };

  return (
    <div className=" col col-xs-12 col-md-6 col-lg-4 d-flex align-items-stretch">
      <div className="card card-body mb-4 border-2 border-success">
        <img
          src={props.image}
          className="card-img-top"
          style={{
            width: '100%',
            height: '15rem'
          }}
          alt="..."
        />
        <div className="mt-2">
          <h5>{props.name}</h5>
          <h5 className="text-success fw-bolder">$ {props.price}</h5>
        </div>
        <form onSubmit={submitHanlder}>
          <div className="d-flex mb-4 justify-content-between align-items-center">
            <span className="fw-bold me-2">Amount :</span>
            <input
              ref={quantityInputRef}
              defaultValue="1"
              type="number"
              className="form-control"
              style={{ width: '70%' }}
            />
          </div>
          <button type="submit" className="btn btn-success fw-bold ">
            Add to Cart
          </button>
        </form>
      </div>
    </div>
  );
};

export default MenuItem;
