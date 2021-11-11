import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
//import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import * as cartDropdownStyles from './cart-dropdown.styles';

import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <cartDropdownStyles.CartDropdown>
    <cartDropdownStyles.CartItems>
      {cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <cartDropdownStyles.EmptyMessage>
          Cart Is Empty
        </cartDropdownStyles.EmptyMessage>
      )}
    </cartDropdownStyles.CartItems>
    <cartDropdownStyles.CustomButtonStyles
      onClick={() => {
        history.push('/checkout');
        dispatch(toggleCartHidden());
      }}
    >
      Go to Checkout
    </cartDropdownStyles.CustomButtonStyles>
  </cartDropdownStyles.CartDropdown>
);
const mapStateToProps = state => ({
  cartItems: selectCartItems(state)
});
export default withRouter(connect(mapStateToProps)(CartDropdown));
