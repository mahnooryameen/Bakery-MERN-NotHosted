import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../../App.css'


export default function GuestCard({ Name, image }) {
    return (
        <>

            <div className="col-md-3" style={{ width:'20vw'}}>
                <Link to={`/${Name.split(' ').join('-')}`} className='text-decoration-none'>
                    <Card >
                        <Card.Img variant="top" src={`${image}/100px100`} alt={Name} />
                        <Card.Body>
                            <Card.Title>{Name}</Card.Title>
                        </Card.Body>
                    </Card>
                </Link>
            </div>



        </>
    )
}
