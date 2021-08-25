import React from 'react';
import Card from './card';
import { productData } from './data';
import { ProductsWrapper, ProductsHeader, ProductsContent } from './styles';

const Products = () => {
  return (
    <ProductsWrapper>
      <ProductsHeader>
        <h1>Elige tu favorita</h1>
      </ProductsHeader>
      <ProductsContent>
        {productData.map((product, index) => <Card key={index} product={product} />)}
      </ProductsContent>
    </ProductsWrapper>
  )
};

export default Products;
