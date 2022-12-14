import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap';
import React from 'react';

function HeaderNav() {
  return (

    <div>
      <Navbar bg="danger" expand="lg">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>Ekonnet.com</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">

              <NavDropdown title="Buy Crypto" id="basic-nav-dropdown">
             <LinkContainer to="/one_click_buy"> <NavDropdown.Item >One-Click Buy</NavDropdown.Item> </LinkContainer>
                <NavDropdown.Divider />
                <LinkContainer to="/p2p_trading_Fees"> <NavDropdown.Item > P2P Trading(0 Fees)</NavDropdown.Item> </LinkContainer>
  
                <NavDropdown.Divider />
                <LinkContainer to="/fiat_deposite"> <NavDropdown.Item >Fiat Deposite</NavDropdown.Item> </LinkContainer>
               
              </NavDropdown>

              <NavDropdown title="Markets" id="basic-nav-dropdown">
              <LinkContainer to="/market_overview"> <NavDropdown.Item >Market Overview</NavDropdown.Item> </LinkContainer>

                <NavDropdown.Divider />
                <LinkContainer to="/market_data"> <NavDropdown.Item >Market Data</NavDropdown.Item> </LinkContainer>
                
              </NavDropdown>
              <LinkContainer to="/future"> <NavDropdown.Item >Future</NavDropdown.Item> </LinkContainer>
             
              <NavDropdown title="Traders" id="basic-nav-dropdown">
              <LinkContainer to="/features"> <NavDropdown.Item >Features</NavDropdown.Item> </LinkContainer>
                
                <NavDropdown.Divider />
                <LinkContainer to="/mobile_app"> <NavDropdown.Item >Mobile App</NavDropdown.Item> </LinkContainer>
               
                <NavDropdown.Divider />
                <LinkContainer to="/security"> <NavDropdown.Item >Security</NavDropdown.Item> </LinkContainer>
                
                <NavDropdown.Divider />
                <LinkContainer to="/wallet"> <NavDropdown.Item >Wallet</NavDropdown.Item> </LinkContainer>
              
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>

  );
}

export default HeaderNav;