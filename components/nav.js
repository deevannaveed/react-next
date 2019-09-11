import React from 'react'
import Link from 'next/link'
import '../styles/scss/app.scss'
import { Navbar, Nav as TheNav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'

const Nav = () => (
  <Navbar bg="success" variant="dark" expand="lg">
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <TheNav className="mr-auto">
        <Link href="/index">
          <TheNav.Link href="/index">Home</TheNav.Link>
        </Link>
        <Link href="/about">
          <TheNav.Link href="/about">About</TheNav.Link>
        </Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </TheNav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-light">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Navbar>
)

export default Nav
