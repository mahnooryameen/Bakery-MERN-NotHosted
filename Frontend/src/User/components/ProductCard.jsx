import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom'

export default function ProductCard({ ProductID,ProductImage, ProductName, ProductBrand, ProductCategory, ProductPrice, ProductDescription, ProductImageArray }) {

    return (
        <>
            <div className="col-md-3">
                <Link to={`/get-product-by-id/${ProductID}`} className='text-decoration-none'>
                    <Card>
                        <Card.Img variant="top" src={ProductImage} />
                        <Card.Body>
                            <Card.Title>{ProductName}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Price: {ProductPrice}</Card.Subtitle>
                            <Card.Subtitle className="mb-2 text-muted">{ProductCategory}-{ProductBrand}</Card.Subtitle>

                            <Card.Text>
                            {ProductDescription}
                            </Card.Text>
                            
                        </Card.Body>
                    </Card>
                </Link>
            </div>

        </>
    )
}
