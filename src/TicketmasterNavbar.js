import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';


function TicketmasterNavbar() {
  return(
    <Navbar bg="dark" variant="dark" sticky="top">
      <Navbar.Brand to="/">Ticketmaster</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav" >
        <Nav className="mr-auto">
          <Nav.Link class="nav-item nav-link ml-5" to="/concerts">Concerts</Nav.Link>
          <Nav.Link class="nav-item nav-link ml-5" to="/sports">Sports</Nav.Link>
          <Nav.Link class="nav-item nav-link ml-5"to="/arttheater">Art &amp; Theater</Nav.Link>
          <Nav.Link class="nav-item nav-link ml-5" to="/family">Family</Nav.Link>
          <NavDropdown title="More" id="basic-nav-dropdown">
            <NavDropdown.Item to="/deals">Deals</NavDropdown.Item>
            <NavDropdown.Item to="/entertainment">Entertainment Guides</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link to="/signin">Sign In</Nav.Link>
            <NavDropdown title="Sell" id="basic-nav-dropdown">
              <NavDropdown.Item to="/selltickets">Sell Tickets</NavDropdown.Item>
              <NavDropdown.Item to="/mylistings">My Listings</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link to="/giftcards">Gift Cards</Nav.Link>
            <Nav.Link to="/help">Help</Nav.Link>
          </Nav>
          </Navbar.Collapse>
      </Navbar.Collapse>

    </Navbar>
  )
}

export default TicketmasterNavbar;