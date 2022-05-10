import React, { useState, useEffect } from 'react';
import { ProductType } from '../types/ProductData';
import Product from './Product';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  if (!products) return <div>Loading ...</div>;

  return (
    <>
      {products.map((product: ProductType) => (
        <Product
          key={product.id}
          title={product.title}
          category={product.category}
          price={product.price}
          id={product.id}
          image={product.image}
          description={''}
          rating={0}
        />
      ))}
    </>
  );
}

export default ProductList;
