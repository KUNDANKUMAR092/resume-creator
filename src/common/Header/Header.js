import React, { useRef, useLayoutEffect, useEffect } from 'react'
import {Container ,Nav, Navbar} from 'react-bootstrap';
import './Header.css';
import CommonButton from './../CommonButton/CommonButton';

function Header() {
  const stickyHeader = useRef(0);
  useEffect(()=>{
    console.log("stickyHeader==>", stickyHeader, stickyHeader.current, stickyHeader.current.offsetTop)
  },[]);
  useLayoutEffect(() => {
    const mainHeader = document.getElementById('header_main_container')
    let sticky = stickyHeader.current;
    const fixedHeader = () => {
      if (window.scrollY > sticky) {
        mainHeader.classList.add('sticky')
      } else {
        mainHeader.classList.remove('sticky')
      }
    }
    window.addEventListener('scroll', fixedHeader)
  }, [])

  return (
    <Navbar collapseOnSelect expand="lg" fixed="top" className='header_main_container' id='header_main_container'>
      <Container>
        <Navbar.Brand href="/home" className='logo'> 
          <span class="rs">Kundan</span>
          <span class="ca">Kumar</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            {/* <Nav.Link href="/home">Home</Nav.Link> */}
            <Nav.Link href="/about">About Me</Nav.Link>
            <Nav.Link href="/contact">Contact Us</Nav.Link>
          </Nav>
          <Nav>
            <CommonButton btnText={'Download CV'} colorClass={'orangeBtn'} ></CommonButton>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;