import styles from './Product.module.scss';
import { ProductType } from '../types/ProductData';
import React from 'react';

function Product(props: ProductType) {
  const { title, category, price, image } = props;

  return (
    <div className={styles.card}>
      <img className={styles.card__img} src={image} alt={title} />
      <div className={styles.card__text}>
        <h2>{title}</h2>
        <h3>{category}</h3>
        <span className={styles.card__price}>$ {price}</span>
      </div>
    </div>
  );
}

export default Product;
