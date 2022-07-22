import styles from '../Product/Product.module.scss';
import PropTypes from 'prop-types';

const OptionSize = (props) => {

  return (
    <div className={styles.sizes}>
      <h3 className={styles.optionLabel}>Sizes</h3>
    <ul className={styles.choices}>
    {props.sizes.map(size => <li key={size.name} name={size.name} additionalPrice={size.additionalPrice}>
      <button type='button' className={size.name === props.currentSize ? styles.active : undefined} onClick={() => props.updateSize(size.name)}>{size.name}</button></li>)}
    </ul>
    </div>
  )
}

OptionSize.propTypes = {
  sizes: PropTypes.array.isRequired,
  currentSize: PropTypes.string.isRequired,
  updateSize: PropTypes.func.isRequired,
};

export default OptionSize;