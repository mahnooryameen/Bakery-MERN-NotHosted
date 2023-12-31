import React from 'react'
import img1 from '../../images/wepik-hand-drawn-loving-bakery-blog-banner-20230831013251UIeG.png'
import Category from '../../Guest/components/Category'
import Brand from '../../Guest/components/Brand'
import Aboutus from '../../Guest/components/Aboutus'


export default function Home() {
  return (
    <>
    
    {/* main image */}
    <div style={{width:'100%'}} className='backgroundcolor'>
        <img src={img1} alt="" className='img-fluid' style={{width:'100%'}}/>
      </div>
<Aboutus/>
      <Category />
      <Brand />
    
    </>
  )
}
