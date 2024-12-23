import React from 'react';

const ProductCard = ({ product }) => (
  <div className="imgba6">
    {product.label && <span>{product.label}</span>}
    <img src={product.imgSrc} alt={product.name} />
    <span>{product.name}</span>
    <p>{product.size}</p>
    <del className="card__preci card__preci--before">{product.oldPrice}</del>
    <span className="card__preci card__preci--now">{product.newPrice}</span>
    <button className="btn">SHOP NOW</button>
  </div>
);

export default ProductCard;
