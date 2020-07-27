import React from 'react';

import CustomButtom from '../custom-button/Custom-button';

import './cart-dropdown.styles.scss';

const CartDropDown = () => (
  <div className="cart-dropdown">
    <div className="cart-items" />
    <CustomButtom>GO TO CHECKOUT</CustomButtom>
  </div>
);

export default CartDropDown;
