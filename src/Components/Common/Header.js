import React from 'react';
import { Button, Container, Image, Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import { GiFoodTruck } from 'react-icons/gi';


const Header = () => {
 const {user,logOut} = useAuth();
    return (
      <div className="bg-dark">
        <div className="container">
        <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg">
    <Container>
    <Navbar.Brand href="/home" className="fw-bold"><GiFoodTruck size="30px" color="red"/> <span className="text-success">Food</span><span className="text-danger">Mood</span></Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
    <Nav.Link as={Link} to="/home" className="text-light" >Home</Nav.Link>
                
      {
        user.email? <Navbar.Text>
        <Nav.Link as={Link} to="/myOrder" > My Order </Nav.Link>
      </Navbar.Text>
      :
      <Navbar.Text>
       
      </Navbar.Text>
                }
                
      {
        user.email? <Navbar.Text>
        <Nav.Link as={Link} to="/manageOrder" > Manage Order </Nav.Link>
      </Navbar.Text>
      :
      <Navbar.Text>
       
      </Navbar.Text>
                }
                {
        user.email? <Navbar.Text>
        <Nav.Link as={Link} to="/addMenu" > Add Menu </Nav.Link>
      </Navbar.Text>
      :
      <Navbar.Text>
       
      </Navbar.Text>
                }

      {user?.email ?
      <Button onClick={logOut} variant="success" className="me-1"> Log Out </Button> :
      <Nav.Link as={Link} to="/login" className="text-light">Log In</Nav.Link>
    }
      <Navbar.Text>
        <a href="#login">{user?.displayName}</a>
      </Navbar.Text>
      {
        
        user.email? <Navbar.Text>
        <Image className="ms-3" style={{width:30}} src={user.photoURL} roundedCircle />
        
      </Navbar.Text>
       
      :
      <Navbar.Text>
        
      </Navbar.Text>
      }
      
    </Navbar.Collapse>
    </Container>
  </Navbar>
        </div>
        </div>
    );
};

export default Header;