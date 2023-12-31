import React, { useContext, useState } from 'react'
import { CartContext } from '../context/context';   //likhna baki
import { logincontext } from '../../context/context'
import { decodeToken } from 'react-jwt';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import Swal from 'sweetalert2'


export default function Cart() {


  const { cart_state, cart_dispatch } = useContext(CartContext)
  const { state, dispatch } = useContext(logincontext)


  //   console.log(state)             token araha
  const user = decodeToken(state.token)
  // console.log(user)


  const total = cart_state.cart.reduce((accumulator, product) => accumulator + (product.ProductPrice * product.ProductQuantity), 0)

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [TrackingId,setTrackingId]=useState("")

  const [customerAddress, setcustomerAddress] = useState("")
  const [customerContact, setcustomerContact] = useState("")


  const OrderDetailSubmission = (e) => {
    e.preventDefault();


    const payload = {
      customerName: user.Username,
      customerEmail: user.Email,
      customerAddress: customerAddress,
      customerContact: customerContact,
      customerId: user._id,
      items: cart_state.cart,
      totalBill: total,
    }
    console.log(payload)

    axios.post(`http://localhost:1234/api/place-order`,payload)
    .then((json)=>{setTrackingId(json.data.TrackingId)
    
    
    Swal.fire({
      title: 'Thank you for placing order',
      text: `Your Order Tracking id is: ${TrackingId}`,
      icon: 'success',
      confirmButtonText: 'Continue Shopping'
    })}
    
    
    )
    .catch((error)=>console.log(error))



  }

  return (
    <>
      <div className="container">
        <h1 className="text-center">Your Cart</h1>
      </div>
      {/* table */}
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Product</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Subtotal</th>
            </tr>
          </thead>
          <tbody>

            {
              cart_state.cart?.map((value, index) =>
                <tr key={index}>
                  <th scope="row"><img src={value.ProductThumbnail} alt="" style={{ height: '5vh', objectFit: 'contain' }} />--{value.ProductName}</th>
                  <td>{value.ProductPrice}</td>
                  <td >
                    {value.ProductQuantity}
                  </td>
                  <td>{value.TotalPrice}</td>
                </tr>

              )
            }

          </tbody>
        </table>
      </div>


      {/* price and order detail taking  */}

      <div className="container">
        <span>Total Price:---- {total}</span>
        <Button variant="btn btn-outline-warning" className='mx-5 text-dark' onClick={handleShow}>
          Proceed to Fill details to order
        </Button>

        <Modal show={show} onHide={handleClose} centered backdrop="static" className='border border-danger'>
          <Modal.Header closeButton>
            <Modal.Title className='text-center'>Shipment Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={OrderDetailSubmission}>


              <div className="container">
                <div >
                  <FloatingLabel controlId="customerAddress" label="Your Adress Please" className="mb-3 text-secondary"                                >
                    <Form.Control type="text" placeholder="customerAddress" value={customerAddress} onChange={(e) => setcustomerAddress(e.target.value)} />
                  </FloatingLabel>
                </div>
                <div >
                  <FloatingLabel controlId="customerContact" label="Your Contact No Please" className="mb-3 text-secondary"                                >
                    <Form.Control type="text" placeholder="customerContact" value={customerContact} onChange={(e) => setcustomerContact(e.target.value)} />
                  </FloatingLabel>
                </div>

                <div>
                  Total Bill: --- {total}
                </div>

              </div>
               
              <button type="submit" className="btn btn-outline-warning mx-5 text-dark">
                Submit
              </button>
            </form>

          </Modal.Body>


        </Modal>
      </div>





    </>
  )
}
