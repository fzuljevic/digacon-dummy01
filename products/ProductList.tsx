import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ProductType } from '../types/ProductData';
import Product from './Product';
import { getProductData, getProductError } from '../redux/connectFunctions';
import { fetchProducts } from '../redux/actions';

function ProductList() {
  // const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  const productsData = useSelector(getProductData);
  const productsError = useSelector(getProductError);

  // useEffect(() => {
  //   fetch('https://fakestoreapi.com/products')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setProducts(data);
  //     });
  // }, []);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  if (!productsError) return <div>{productsError}</div>;

  return (
    <>
      {/* {productsData.map((product: ProductType) => (
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
      ))} */}
    </>
  );
}

export default ProductList;
