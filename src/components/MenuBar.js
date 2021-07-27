import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';


const MenuBar = (props) => {
  return (
<>

  <Navbar bg="dark" variant="dark" fixed="top" id='nav'>
    
    <Navbar.Brand href="#home">          CjD          </Navbar.Brand>
   
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      
        <Navbar.Collapse id="basic-navbar-nav">
        
          <Nav className="ml-auto" id='navbar'>
    
            <Nav.Link href="#projects">Projects</Nav.Link>
            
            <Nav.Link href="#about">About Me</Nav.Link>
            <Nav.Link href="#blog">My Blog</Nav.Link>
  
          </Nav>
           
        </Navbar.Collapse>
       
    </Navbar>
  
  < />
  );
}
export default MenuBar
