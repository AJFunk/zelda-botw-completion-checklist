import React from 'react';
// import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/lib/Nav';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavItem from 'react-bootstrap/lib/NavItem';

const Navigation = ({ changeComp }) => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a>Zelda</a>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <NavItem eventKey={1}  onClick={() => changeComp('shrines')}>Shrines</NavItem>
      <NavItem eventKey={2}  onClick={() => changeComp('towers')}>Towers</NavItem>
    </Nav>
  </Navbar>
);

export default Navigation;
