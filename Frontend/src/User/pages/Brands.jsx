import React, { useState, useEffect } from 'react'
import axios from 'axios'
import BrandsCard from '../components/BrandsCard'

export default function Brands() {

  const [Brand, setBrands] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:1234/api/get-all-brands`)
      .then((res) => setBrands(res.data.Brands))
      .catch((error) => { console.log(error.message) })
  }, [])

  return (
    <>

      <h2 className='text-center my-3'>OUR COLLABORATIVE BRANDS</h2>
      <div className="container">
        <div className="row">

          {
            Brand.map((value, index) =>
              <BrandsCard key={index} BrandsImage={value.BrandImage} BrandName={value.BrandName} />
            )
          }
        </div>

      </div>




    </>
  )
}
