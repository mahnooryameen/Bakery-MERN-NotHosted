import React, { useState, useEffect } from 'react'
import AddBrandModal from '../components/AddBrandModal'
import UpdateBrand from '../components/UpdateBrand'
import axios from 'axios'


import {GrUpdate} from 'react-icons/gr'
import {MdDelete} from 'react-icons/md'


export default function Brands() {

// API FETCHING
  const [Brands, setBrands] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:1234/api/get-all-brands`)
      .then((json) => setBrands(json.data.Brands))
      .catch((error) => console.log(error))
  }, [])

  // deleting a Brands

  const deleteBrands = (_id) => {
    console.log(_id);
  
    axios.delete(`http://localhost:1234/api/delete-brand`, {
      data: { _id } // Data ko object mein wrap karein
    })
      .then((response) => setBrands(response.data.Brands))
      .catch((error) => console.log(error.message));
  }
  

  // without refresh api field update

  return (
    <div className='container'>

      {/*                      HEADING */}
      <div className="d-flex  rounded my-3 p-2 justify-content-between align-items-center">
        <span className='fs-4 fw-bold text-dark'>Brands</span>

        {/* MOdal hai, ispe click se Brands add hojati */}
        <AddBrandModal  recalllData={setBrands}  />



      </div>


      {/* Table */}
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Brands Name</th>
            <th scope="col">Brands Image</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            Brands?.map((value, index) =>
              <tr key={index}>
                <th scope="row">{value._id}</th>
                <td>{value.BrandName}</td>
                <td >
                  <img src={value.BrandImage} alt=""  style={{height:'5vh', objectFit:'contain' }}/>
                </td>
                <td><UpdateBrand/>
                <button className='btn btn-success mx-2' onClick={()=>deleteBrands(value._id)}><MdDelete /></button>
                </td>
              </tr>

            )
          }

        </tbody>
      </table>



    </div>
  )
}
