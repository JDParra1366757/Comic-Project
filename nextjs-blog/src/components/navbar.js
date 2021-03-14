import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'

const Nav = styled.nav` 
    height: 80px;
    background-image: url('navbar.jpg'); 
    background-size: 100% 100%;
    background-repeat: no repeat;
    background-position: left;
    color: black;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const StyledLink = styled.a`
    padding: 0rem 2rem;
    color: blue;
`



const Navbar = () => {
    return (
        <Nav>
            <div>
               <Link  href="/" passHref>
                    <StyledLink></StyledLink>
               </Link>
            </div>
        </Nav>
    );
};

export default Navbar;
