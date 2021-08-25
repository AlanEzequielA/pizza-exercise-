import React from 'react';
import { CardWrapper, PImage, CardInfo, H3, H4, H5, ProductButton } from './styles';

const Card = ( {product} ) => {
  return (
    <CardWrapper>
      <PImage src={product.img} alt={product.alt} />
      <CardInfo>
        <H3>{product.name}</H3>
        <H5>{product.desc}</H5>
        <H4>{product.price}</H4>
        <ProductButton>{product.button}</ProductButton>
      </CardInfo>
    </CardWrapper>
  )
};

export default Card
