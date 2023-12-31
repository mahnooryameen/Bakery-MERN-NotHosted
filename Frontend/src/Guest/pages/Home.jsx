import React from 'react'
import Category from '../components/Category'
import Brand from '../components/Brand'
import img1 from '../../images/wepik-hand-drawn-loving-bakery-blog-banner-20230831013251UIeG.png'
import Aboutus from '../components/Aboutus'
import '../components/guest.css'

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
