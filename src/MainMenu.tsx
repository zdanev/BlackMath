import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const MainMenu = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">Black Math</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/factors">Prime Factors</Nav.Link>
                <Nav.Link href="/fractions">Fractions</Nav.Link>
                <Nav.Link href="/game3">(math game 3)</Nav.Link>
                <Nav.Link href="/game4">(math game 4)</Nav.Link>
                <Nav.Link href="/game5">(math game 5)</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default MainMenu;