import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';
import CustomButton from '../custom-button/custom-button.component';
import './collection-item.styles.scss';

const CollectionItem = ({ item, addItem }) => {
  return (
    <div className='collection-item'>
      <div
        style={{ backgroundImage: `url(${item.imageUrl})` }}
        className='image'
      />
      <div className='collection-footer'>
        <span className='name'>{item.name}</span>
        <span className='price'>{item.price}</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>
        Add to Cart
      </CustomButton>
    </div>
  );
};
const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});
export default connect(null, mapDispatchToProps)(CollectionItem);
