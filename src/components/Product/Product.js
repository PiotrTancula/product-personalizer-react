import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import { useState } from 'react';

const Product = props => {

  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);

  const prepareColorClassName = color => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
  }

  const updateSize = size => {
   return setCurrentSize(size);
  }

  const updateColor = color => {
    return setCurrentColor(color);
  }

  const getPrice = () => {
    // console.log(props.sizes);
    const sizeData = props.sizes.find(size => size.name === currentSize);
    return sizeData.additionalPrice + props.basePrice;
  }

  const collectName = (name) => {
    const capitalized = name.charAt(0).toUpperCase() + name.slice(1) + ` shirt`;
    // console.log(capitalized);
    return capitalized;
  }



  const addToCart = (event) => {
    event.preventDefault();
    console.log('Summary');
    console.log('========');
    console.log(`name : ${ collectName(props.name) }`);
    console.log(`price : ${getPrice()}`);
    console.log(`color : ${currentColor}`);
    console.log(`size : ${currentSize}`);
  }

  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          alt={`${props.title}`}
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${props.name}--${currentColor}.jpg`} />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price : {getPrice()}$</span>
        </header>
        <form onSubmit={addToCart}>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {props.sizes.map(size => <li key={size.name} name={size.name} additionalPrice={size.additionalPrice}>
                <button type='button' className={size.name === currentSize ? styles.active : undefined} onClick={() => updateSize(size.name)}>{size.name}</button></li>)}

            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {props.colors.map(color => <li key={color}><button type='button' onClick={() => updateColor(color)} className={clsx(prepareColorClassName(color), currentColor === color && styles.active)} ></button></li>)}
              {/* <li><button type="button" className={clsx(styles.colorBlack, styles.active)} /></li>
              <li><button type="button" className={clsx(styles.colorRed)} /></li>
              <li><button type="button" className={clsx(styles.colorWhite)} /></li> */}
            </ul>
          </div>
          <Button type='submit' className={styles.button} >
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
      </div>
    </article>
  )
};

// Product.propTypes = {
//   props: PropTypes.func.isRequired
// };

export default Product;