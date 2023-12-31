import React from 'react'
import { Link } from 'react-router-dom'

export default function BrandCard({ brandName, brandImage }) {
    return (
        <>

            <div className="col-md-3">
                <Link to={`/${brandName.split(' ').join('-')}`} className='text-decoration-none'>
                    <div className="card" >
                        <img src={brandImage} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text">
                                {brandName}
                            </p>
                        </div>
                    </div>
                </Link>
            </div>



        </>
    )
}
