import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'

const Nav = styled.nav` 
    height: 80px;
    background-image: url('practiceheadet.jpg'); 
    background-size: 100% 100%;
    background-repeat: no repeat;
    background-position: left;
    color: white;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const StyledLink = styled.a`
    font-family: monospace;
    font-size: 25px;
    padding: 0rem 10rem;
    color: black;
`



const Navbar = () => {
    return (
        <Nav>
            <div>
               <Link  href="/" passHref>
                    <StyledLink>Home</StyledLink>
               </Link>
               <Link  href="/persona4" passHref>
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
