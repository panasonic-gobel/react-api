import React from 'react'
import { Navbar, Nav, Button } from 'react-bootstrap'
import Logo1 from './logo.png'

export const Navbar1 = () => (
    <Navbar bg='light' expand='lg'>
        <Navbar.Brand href='/Recipe'>
            <img
                alt='logo'
                src={Logo1}
                width='30'
                height='30'
                className='d-inline-block align-top'
            />
            {' Find Recipe'}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
                <Nav.Link href='/about'>About</Nav.Link>
                <Button href='/' variant='outline-success' className='mr-2'>
                    Log Out
                </Button>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)
