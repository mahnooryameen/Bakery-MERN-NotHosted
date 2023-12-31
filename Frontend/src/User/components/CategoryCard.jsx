import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


export default function CategoryCard({ CategoryImage, CategoryName }) {
    return (
        <>
            <div className="col-md-4 py-2">
                <Link to={`/category/${CategoryName}`} className='text-decoration-none'>
                    <div className="card" >
                        <img src={CategoryImage} className="card-img-top img-thumbnail"  alt="..." />
                        <div className="card-body">
                            <p className="card-text">
                                {CategoryName}
                            </p>
                        </div>
                    </div>
                </Link>
            </div>


        </>
    )
}
