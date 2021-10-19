import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';


const MenuBar = (props) => {
  return (
<>

  <Navbar collapseOnSelect bg="dark" variant="dark" fixed="top" id='nav' expand='sm'>
    
    <Navbar.Brand href="#home">   <a href='https://christopherdent.github.io/christopher-dent/'>       CjD</a>         </Navbar.Brand>
   
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      
        <Navbar.Collapse id="basic-navbar-nav">
        
          <Nav className="ml-auto" id='navbar'>
    
            <Nav.Link href="#projects1" className='nav-item nav-link mx-4'>Projects</Nav.Link>
            <Nav.Link href="#about-line" className='nav-item nav-link mx-4'>About Me</Nav.Link>
            <Nav.Link href="#blog-line" className='nav-item nav-link mx-4'>My Blog</Nav.Link>
  
          </Nav>
           
        </Navbar.Collapse>
       
    </Navbar>
  
  < />
  );
}
export default MenuBar
