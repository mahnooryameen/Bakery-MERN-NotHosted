import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

//product by brand name page

export default function SingleBrandDynamic({ProductBrand}) {

  const { BrandName } = useParams();

// yahan product data ayega from api
const [branddetail, setbranddetail] = useState([])
// api fetching
useEffect(() => {
  axios.get(`http://localhost:1234/api/get-product-by-brandname?ProductBrand=${BrandName}`)
      .then(json => setbranddetail(json.data.ProductByBrandName))
      .catch(err => console.log(err))
},[])
  return (
    <>
    
    
<div className="container">
  <div className="row">
    {
      branddetail.map((val,index)=>
      <div className="col-md-3" key={index}>
     <Link to={`/get-product-by-id/${val._id}`} className='text-decoration-none'>
         <Card>
             <Card.Img variant="top" src={val.ProductThumbnail} />
             <Card.Body>
                 <Card.Title>{val.ProductName}</Card.Title>
                 <Card.Subtitle className="mb-2 text-muted">Price: {val.ProductPrice}</Card.Subtitle>
                 <Card.Subtitle className="mb-2 text-muted">{val.ProductCategory}-{val.ProductBrand}</Card.Subtitle>

                 <Card.Text>
                 {val.ProductDescription}
                 </Card.Text>
                 <Button variant="primary">Add TO CART</Button>
             </Card.Body>
         </Card>
     </Link>
</div>
      )

    }
     
     
    
  </div>
</div>
   
    
    </>
  )
}
