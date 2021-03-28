import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, NavDropdown, Form, Button, Nav, FormControl } from "react-bootstrap";

function Navbaren() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand className="nav-link-brand" href="/home">
          Out Of Boundaries
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/arenor">Arenor</Nav.Link>
            <NavDropdown title="COVID19" id="basic-nav-dropdown">
              <NavDropdown.Item href="/covid">Globalt</NavDropdown.Item>
              <NavDropdown.Item href="/covidCountry">Per Land</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Hotell SeaSharp" id="basic-nav-dropdown">
              <NavDropdown.Item href="/loginHotell">Logga In</NavDropdown.Item>
              <NavDropdown.Item href="/users">Admin Konton</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Fortnite-Shopen" id="basic-nav-dropdown">
              <NavDropdown.Item href="/fortniteStore">
                Visa rutlät
              </NavDropdown.Item>
              <NavDropdown.Item href="/fortniteStoreList">
                Visa i lista
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl
              type="text"
              placeholder="Sök på sidan" /* Denna sökfunktion är ej i funktion, endast där för utsende */
              className="mr-sm-2"
            />
            <Button variant="outline-success">Sök</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>

      {/*  
       Gammal Navbar, används ej!
       
       <div className="Navbar">
          <ul>
       <li><Link to="/home">Home</Link></li>
       <li><Link to="/arenor">Arenor</Link></li>
       <li><Link to="/weather">Väder</Link></li>
       <li><Link to="/covid">COVID19-Globalt</Link></li>
       <li><Link to="/covidCountry">COVID19-per-land</Link></li>
       <li><Link to="/Users">Konton-Hotell</Link></li>
       <li><Link to="/fortniteStore">Fortnite-Shop</Link></li>
       <li><Link to="/loginHotell">Logga in-Hotell</Link></li>
       <li><Link to="/fortniteStoreList">Fortnite-Shop-Lista</Link></li>
       </ul>  */}
    </div>
  );
}

export default Navbaren;
