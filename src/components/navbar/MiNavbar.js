'use client';

import Image from 'next/image';
import Link from 'next/link';

import './styles.css';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { useId, useState } from 'react';
import { NAV_ITEMS } from './navItems';
import { NavItem } from 'react-bootstrap';

export const MiNavbar = () => {
  const pathname = usePathname();
  const id = useId();
  const [hoveredNavItem, setHoveredNavItem] = useState(null);

  return (
    <Navbar expand='lg' className='justify-content-center'>
      <Container>
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
        <Navbar.Collapse id='responsive-navbar-nav '>
          <Nav
            className='me-auto pt-2'
            onMouseLeave={() => setHoveredNavItem(null)}
          >
            <ul className='mi-lista justify-content-center'>
              {NAV_ITEMS.map(({ title, href, key }) => (
                <li
                  className='nav-item text-center'
                  key={key}
                  style={{
                    zIndex: hoveredNavItem === href ? 1 : 2,
                    backgroundColor:
                      pathname === href ? 'rgb(94, 24, 125)' : '',
                    borderRadius: pathname === href && 25,
                  }}
                >
                  {hoveredNavItem === href && (
                    <motion.div
                      layout={id}
                      className='hovered-backdrop'
                      initial={{
                        borderRadius: 15,
                      }}
                      style={{
                        backgroundColor: 'rgb(94, 24, 125)',
                      }}
                    />
                  )}
                  <Link
                    href={href}
                    className='nav-link custom-nav'
                    onMouseEnter={() => setHoveredNavItem(href)}
                    style={{
                      color:
                        pathname === href || href === hoveredNavItem
                          ? ' rgb(75, 159, 153)'
                          : '',
                    }}
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>

            {/* <motion.div key={id} layout={true}>
                <Link
                  href='/quienes-somos'
                  className='nav-link'
                  style={
                    pathname === '/quienes-somos'
                      ? {
                          backgroundColor: 'red',
                          color: 'blue',
                          borderRadius: 20,
                        }
                      : {}
                  }
                >
                  ¿Quiénes somos?
                </Link>
              </motion.div>
              <motion.div key={id} layout={true}>
                <Link
                  href='/acomp-terapeutico'
                  className='nav-link'
                  style={
                    pathname === '/acomp-terapeutico'
                      ? {
                          backgroundColor: 'red',
                          color: 'blue',
                          borderRadius: 20,
                        }
                      : {}
                  }
                >
                  ¿Qué es el acompañamiento terapéutico?
                </Link>
              </motion.div>
              {/* <Link href='/como-trabajamos' className='nav-link'>
              ¿Cómo trabajamos?
            </Link> */}
            {/* <Link href='/talleres' className='nav-link'>
              Talleres
            </Link> 
              <Link
                href='/admisiones'
                className='nav-link'
                style={
                  pathname === '/admisiones'
                    ? {
                        backgroundColor: 'red',
                        color: 'blue',
                        borderRadius: 20,
                      }
                    : {}
                }
              >
                Admisiones
              </Link>
              <Link
                href='/trabaja-con-nosotras'
                className='nav-link'
                style={
                  pathname === '/trabaja-con-nosotras'
                    ? {
                        backgroundColor: 'red',
                        color: 'blue',
                        borderRadius: 20,
                      }
                    : {}
                }
              >
                Trabajá Con Nosotras
              </Link>
              <Link
                href='/contacto'
                className='nav-link'
                style={
                  pathname === '/contacto'
                    ? {
                        backgroundColor: 'red',
                        color: 'blue',
                        borderRadius: 20,
                      }
                    : {}
                }
              >
                Contacto
              </Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MiNavbar;
