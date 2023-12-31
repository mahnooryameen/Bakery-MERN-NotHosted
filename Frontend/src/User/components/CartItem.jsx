import React from 'react'

export default function CartItem({ dataa }) {
    if (!dataa) {
        return null; // or some loading indicator
    }
    console.log(dataa)
    return (
        <>
            <div className='card mb-3 shadow-sm'>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={dataa.ProductThumbnail} alt="image"
                            style={{
                                width: '100%',
                                height: '20vh',
                                objectfit: 'contain'
                            }}
                            className='img-fluid rounded-start bg-dark' />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-center mb-2">
                                <h6 className="card-title">{dataa.ProductName.length > 20 ? dataa.ProductName.slice(0, 20) + '...' : dataa.ProductName}</h6>
                            </div>
                            <span className="badge bg-secondary">{dataa.ProductPrice}</span>

                        </div>
                        <p className="card-text">{dataa.ProductDescription}</p>
                        <p className="card-text">Last updates 3 Minutes ago</p>
                    </div>
                </div>
            </div>
        </>


    )
}
