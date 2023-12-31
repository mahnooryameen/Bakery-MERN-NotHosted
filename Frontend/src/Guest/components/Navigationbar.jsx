import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function Navigationbar() {
  const myStyle = {
    backgroundColor: '#FFF7EC',
  };
  return (
    <Navbar expand="lg" style={myStyle} >
      <div className="container rounded-pill">

      <Link to="/home" className='nav-link'>

          <div className="d-flex align-items-center" >
            <img
              alt=""
              src="https://i.pinimg.com/originals/37/34/76/3734768772d9332a7ad1b20a03cf1abc.jpg"
              width="40"
              height="40"
              className="d-inline-block align-top rounded-circle"
            />{'  '}
            BakeHype
          </div>
          </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/home" className='nav-link'>Home</Link>
            <Link to="/login" className='nav-link'>Login</Link>
            <Link to="/signup" className='nav-link'>Sign Up</Link>



          </Nav>
        </Navbar.Collapse>

      </div>
    </Navbar>
  );
}

export default Navigationbar;