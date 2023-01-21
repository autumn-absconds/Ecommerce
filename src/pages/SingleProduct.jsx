import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useProductContext } from '../context/ProductContext';


const API = "https://api.pujakaitem.com/api/products";

const SingleProduct = () => {
  const { id } = useParams();
  const { getSingleProduct, isSingleLoading, singleProduct } = useProductContext();

  if (isSingleLoading) {
    <div>...loading</div>
  }

  const {
    id: alias,
    name,
    company,
    price,
    description,
    category,
    stock,
    stars,
    reviews,
  } = singleProduct;

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, [])


  return (
    <div>
      SingleProduct{name}
    </div>
  )
}

export default SingleProduct
