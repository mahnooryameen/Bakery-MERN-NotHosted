import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import GuestCard from './GuestCard'
import '../../App.css'





export default function Category() {
const [category,setcategory]=useState([])



// hitting api and applying useEffect, so that whenever component refresh we will get our updated category
useEffect(()=>{
    axios.get(`http://localhost:1234/api/get-all-categories`)
    .then((json)=>setcategory(json.data.Categories))
    .catch((error)=>console.log(error))
 },[])


    return (
        <>
            {/* ek container */}
            <section >

            <div className="container">
                <div className="text-center my-5">
                    <h3 className='font-weight-bold'>HOT CATEGORIES</h3>
<hr />
                </div>
                <div className="row">
                 {
                     category.map((category,index)=>
                     <GuestCard key={index} Name={category.CategoryName} image={category.CategoryImage} />
                     )
                    } 
                </div>
            </div>
                    </section>
        </>
    )
}
