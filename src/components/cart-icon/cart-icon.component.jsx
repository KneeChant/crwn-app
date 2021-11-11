import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import * as CartIconStyles from './cart-icon.styles';
import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <CartIconStyles.StyledCartIcon onClick={toggleCartHidden}>
    <CartIconStyles.StyledShoppingIcon />
    <CartIconStyles.ItemCount> {itemCount} </CartIconStyles.ItemCount>
  </CartIconStyles.StyledCartIcon>
);

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = state => ({
  itemCount: selectCartItemsCount(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
