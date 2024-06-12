'use client';

import Image from 'next/image';
import Link from 'next/link';

import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export const MiNavbar = () => {
  return (
    <Navbar expand='lg'>
      <Container className='text-center'>
        <Navbar.Brand href='/'>
          <Image height={58} width={60} src='/logo.png' alt='Logo' />
          <Image
            className='ms-2'
            height={52}
            width={150}
            src='/logo2.png'
            alt='Logo2'
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto'>
            <Link
              href='/quienes-somos'
              className='nav-link'
              style={{
                border: 'solid',
                borderRadius: 25,
              }}
            >
              ¿Quiénes somos?
            </Link>
            <Link href='/acomp-terapeutico' className='nav-link'>
              ¿Qué es el acompañamiento terapéutico?
            </Link>
            <Link href='/como-trabajamos' className='nav-link'>
              ¿Cómo trabajamos?
            </Link>
            {/* <Link href='/talleres' className='nav-link'>
              Talleres
            </Link> */}
            <Link href='/admisiones' className='nav-link'>
              Admisiones
            </Link>
            <Link href='/trabaja-con-nosotras' className='nav-link'>
              Trabajá Con Nosotras
            </Link>
            <Link href='/contacto' className='nav-link'>
              Contacto
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MiNavbar;
