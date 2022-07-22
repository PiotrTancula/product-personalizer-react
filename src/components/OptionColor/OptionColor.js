import styles from '../Product/Product.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const OptionColor = (props) => {

  return (
    <div className={styles.colors}>
    <h3 className={styles.optionLabel}>Colors</h3>
    <ul className={styles.choices}>
    {props.colors.map(color => <li key={color}><button type='button' onClick={() => props.updateColor(color)} className={clsx(props.prepareColorClassName(color), props.currentColor === color && styles.active)} ></button></li>)}
      </ul>
    </div>
  )
}

OptionColor.propTypes = {
  colors: PropTypes.array.isRequired,
  currentColor: PropTypes.string.isRequired,
  updateColor: PropTypes.func.isRequired,
  prepareColorClassName : PropTypes.func.isRequired
};

export default OptionColor;