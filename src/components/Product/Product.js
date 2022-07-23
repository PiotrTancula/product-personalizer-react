import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import { useMemo, useState } from 'react';
import ProductImage from '../ProductImage/ProductImage';
import ProductOptions from '../ProductOptions/ProductOptions';

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

  const getPrice = useMemo(() => {
    // console.log(props.sizes);
    const sizeData = props.sizes.find(size => size.name === currentSize);
    return sizeData.additionalPrice + props.basePrice;
  }, [currentSize]);

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
      <ProductImage currentColor={currentColor} name={props.name} />
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price : {getPrice}$</span>
        </header>
        <ProductOptions sizes={props.sizes} colors={props.colors} addToCart={addToCart} currentSize={currentSize} updateColor={updateColor} updateSize={updateSize} prepareColorClassName={prepareColorClassName} />
      </div>
    </article>
  )
};

export default Product;