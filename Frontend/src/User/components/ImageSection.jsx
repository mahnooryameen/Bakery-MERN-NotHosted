import React from 'react'
import { useState } from 'react'

export default function ImageSection({ images }) {
  
  const [img, setImg] = useState(images[0] ? images[0] : null)

  const changeimage=(index)=>{
    setImg(images[index])  //link bhejny k liye yeh likha
  }

  return (
    <>
    {/* MAIN IMAGE */}
    <div className="container w-75">
      <img src={img} alt="" className='img-fluid' />
    </div>

    {/* SLIDER */}

    <div className='d-flex justify-content-center'>
      {images?.map((val,index)=>  
      <div key={index}  className={img == images[index] ? ('border border-dark rounded-circle p-2') : (null) } onClick={()=>{changeimage(index)}}>
        <img src={val} className='img-fluid rounded-circle' alt={`img-${index}`} />
      </div>
      )}
    </div>
    
    </>
  )
}
