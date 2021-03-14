import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'

const Nav = styled.nav` 
    height: 80px;
    background-image: url('kritasubnavbar.jpg'); 
    background-size: fit;
    background-repeat: no repeat;
    background-position: 50% 0%;
    color: white;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const StyledLink = styled.a`
    font-family: monospace;
    font-size: 25px;
    padding: 0rem 7rem;
    color: black;
`



const Navbar = () => {
    return (
        <Nav>
            <div>
               <Link  href="/" passHref>
                    <StyledLink>Home</StyledLink>
               </Link>
               <Link  href="/archive" passHref>
                    <StyledLink>Archive</StyledLink>
               </Link>
               <Link  href="/persona5" passHref>
                    <StyledLink>Characters</StyledLink>
               </Link>
               <Link  href="/persona5" passHref>
                    <StyledLink>Links</StyledLink>
               </Link>
            </div>
        </Nav>
    );
};

export default Navbar;
