import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { selectCartHidden } from '../../redux/cart/cart.selectors';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import * as headerStyles from './header.styles';

const Header = ({ currentUser, hidden }) => (
  <headerStyles.HeaderContainer>
    <headerStyles.LogoContainer to='/'>
      <Logo className='logo'></Logo>
    </headerStyles.LogoContainer>
    <headerStyles.OptionsContainer>
      <headerStyles.OptionLink to='/shop'>SHOP</headerStyles.OptionLink>
      <headerStyles.OptionLink to='/contact'>CONTACT</headerStyles.OptionLink>
      {
        currentUser ? (
          <headerStyles.OptionLink as='div' onClick={() => auth.signOut()}>
            SIGN OUT
          </headerStyles.OptionLink>
        ) : (
          <headerStyles.OptionLink to='/signin'>
            {' '}
            SIGNIN
          </headerStyles.OptionLink>
        ) /* <Link to='/signin' */
      }
      <CartIcon />
    </headerStyles.OptionsContainer>
    {hidden ? null : <CartDropdown />}
  </headerStyles.HeaderContainer>
);
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});
export default connect(mapStateToProps)(Header);
//a
