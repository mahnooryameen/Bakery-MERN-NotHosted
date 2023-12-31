import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


export default function BrandsCard({ BrandsImage, BrandName }) {
    return (
        <>
            <div className="col-md-3">
                <Link to={`/brands/${BrandName}`} className='text-decoration-none'>
                    <div className="card" >
                        <img src={BrandsImage} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text">
                                {BrandName}
                            </p>
                        </div>
                    </div>
                </Link>
            </div>


        </>
    )
}
