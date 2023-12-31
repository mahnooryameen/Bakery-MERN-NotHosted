import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ProductCard from '../components/ProductCard'


export default function Products() {

  const [Product, setProduct] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:1234/api/get-all-product`)
      .then((res) => setProduct(res.data.Products))
      .catch((error) => { console.log(error.message) })
  }, [])

  return (
    <>

      <h2 className='text-center my-3'>Products page</h2>
      <div className="container">
        <div className="row">

          {
            Product.map((value, index) =>
              <ProductCard key={index} ProductID={value._id} ProductBrand={value.ProductBrand} ProductImage={value.ProductThumbnail} ProductCategory={value.ProductCategory} ProductName={value.ProductName} ProductPrice={value.ProductPrice} ProductDescription={value.ProductDescription} ProductImageArray={value.ProductImageArray}  />
            )
          }
        </div>

      </div>




    </>
  )
}
