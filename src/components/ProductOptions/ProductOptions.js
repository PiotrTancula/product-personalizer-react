import styles from '../Product/Product.module.scss';
import Button from '../Button/Button';
import OptionSize from '../OptionSize/OptionSize';
import OptionColor from '../OptionColor/OptionColor';
import PropTypes from 'prop-types';

const ProductOptions = (props) => {

  return (

    <form onSubmit={props.addToCart}>
      <OptionSize sizes={props.sizes} currentSize={props.currentSize} updateSize={props.updateSize} />
      <OptionColor colors={props.colors} currentColor={props.currentColor} updateColor={props.updateColor} prepareColorClassName={props.prepareColorClassName} />
      <Button type='submit' className={styles.button} >
        <span className="fa fa-shopping-cart" />
      </Button>
    </form>
  )
}

ProductOptions.propTypes = {
  prepareColorClassName: PropTypes.func.isRequired,
  currentColor: PropTypes.string.isRequired,
  currentSize: PropTypes.string.isRequired,
  addToCart: PropTypes.func.isRequired,
  sizes: PropTypes.array.isRequired,
  colors: PropTypes.array.isRequired,
  updateSize: PropTypes.func.isRequired,
  updateColor: PropTypes.func.isRequired,

};

export default ProductOptions;