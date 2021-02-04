import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';


const MenuBar = (props) => {
  return (
<div>
  <Navbar bg="dark" variant="dark" fixed="top">
    <Navbar.Brand href="#home">CjD</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#projects">   Projects   </Nav.Link>
      <Nav.Link href="#"></Nav.Link>
      <Nav.Link href="#about">   About Me</Nav.Link>
      <Nav.Link href="#"></Nav.Link>
      <Nav.Link href="#blog">My Blog</Nav.Link>
    </Nav>
  </Navbar>
</div>
  );
}
export default MenuBar
