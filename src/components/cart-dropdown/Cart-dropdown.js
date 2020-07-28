import React from 'react';
import { connect } from 'react-redux';

import CustomButtom from '../custom-button/Custom-button';
import CartItem from '../cart-item/Cart-Item';

import './cart-dropdown.styles.scss';

const CartDropDown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButtom>GO TO CHECKOUT</CustomButtom>
  </div>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems
});
export default connect(mapStateToProps)(CartDropDown);
