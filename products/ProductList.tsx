import React, { useState, useEffect } from "react";
import Product from "./Product";

function ProductList (){
  
    const [products, setProducts]= useState([])

    interface Prod {
        id:          number;
        title:       string;
        price:       number;
        description: string;
        category:    string;
        image:       string;
        rating:      number;
    }

    useEffect(() => {
      fetch('https://fakestoreapi.com/products')
      .then(res =>{
        return res.json();
      })
      .then((data)=>{
        setProducts(data)
      });
    }, []);
  
    if (!products) return <div>Loading ...</div>

    console.log(products)

    return(
    <>
      {products.map((product: Prod)=> (
          <Product key={product.id}
          title={product.title}
          category={product.category}
          price={product.price}
          id={product.id}
          image={product.image}
          />   
      ))}
    </>
    )
  
}

export default ProductList
