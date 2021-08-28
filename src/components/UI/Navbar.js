import React from 'react';
import CartButton from '../Cart/CartButton';

const Navbar = () => {
  return (
    <header>
      <nav className="navbar navbar-light bg-success">
        <div className="container">
          <div className="d-flex align-items-center">
            <h3 className="mt-2 mb-2 text-light fw-bolder">CoffeeBucks</h3>
          </div>
          <CartButton />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
