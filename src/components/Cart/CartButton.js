import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Backdrop from '../UI/Backdrop';
import CartModal from './CartModal';
import { uiActions } from '../../store/ui-slice';

const CartButton = () => {
  const visible = useSelector(state => state.ui.visible);
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const handleModalOpen = () => {
    dispatch(uiActions.toggle());
  };

  const handleModalClose = () => {
    dispatch(uiActions.toggle());
  };

  return (
    <div className="d-flex">
      <button type="button" className="btn btn-light" onClick={handleModalOpen}>
        Your Cart
        <span className="badge ms-4 ps-4 pe-4 pt-2 pb-2 bg-success text-light">
          {items.length}
        </span>
      </button>

      {visible && (
        <Backdrop onModalClose={handleModalClose}>
          <CartModal onModalClose={handleModalClose} />
        </Backdrop>
      )}
    </div>
  );
};

export default CartButton;
