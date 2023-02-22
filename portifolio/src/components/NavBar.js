import { useState, useEffect } from 'react';
import {Navbar, Container} from 'react-bootstrap';
import logo from '../assets/img/logo.svg'
import navIcon1 from '../assets/img/navIcon1.svg'
import navIcon2 from '../assets/img/navIcon2.svg'
import navIcon3 from '../assets/img/navIcon3.svg'

export const NavBar = () => {
const [activeLink, setActiveLink] = useState('home');
const [scrolled, seScrolled] = useState(false);

useEffect(() => {
    const onScroll = () => {
        if(window.scrollY > 50){
            seScrolled(true);
        } else {
            seScrolled(false);
        }
    }
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);

}, []);

const onUptadeActiveLink = (value) => {
    setActiveLink(value);
}

return(<Navbar expand='lg' className={scrolled ? "scrolled": ''}>
        <Container>
            <Navbar.Brand href='#home'>
                <img src={''} alt="logo"/>
            </Navbar.Brand>
            <Navbar.toggle aria-controls='basic-navbar-nav'>
                <span className='navbar-toggler-icon'></span>
            </Navbar.toggle>
            <Navbar.collapse id='basic-navbar-nav'>
                <Nav className='me-auto'>
                    <Nav.link href='#home' className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
                    onClick={() => onUptadeActiveLink('home')}>Home</Nav.link>
                    <Nav.link href='#skills' className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
                    onClick={() => onUptadeActiveLink('skills')}>Skills</Nav.link>
                    <Nav.link href='#Projects' className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
                    onClick={() => onUptadeActiveLink('projects')}>Projects</Nav.link>
                </Nav>
                <span className='navbar-text'>
                    <div className='social-icon'>
                        <a href="#"><img src={navIcon1} alt=''></img></a>
                        <a href="#"><img src={navIcon2} alt=''></img></a>
                        <a href="#"><img src={navIcon3} alt=''></img></a>
                    </div>
                    <button className='vvd' onClick={() => console.log('connect')}>
                        <span>Let's Connect</span>
                    </button>
                </span>
            </Navbar.collapse>
        </Container>
    </Navbar>)
}