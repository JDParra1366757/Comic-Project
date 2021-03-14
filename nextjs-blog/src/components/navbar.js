import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const Nav = styled.nav` 
    height: 80px;
    background: #000; 
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const StyledLink = styled.a`
    padding: 0rem 2rem;
`



const Navbar = () => {
    return (
        <Nav>
            <div>
               <Link  href="/" passHref>
                    <StyledLink>NXT</StyledLink>
               </Link>
            </div>
            <div>
               <Link  href="/persona3" passHref>
                    <StyledLink>Persona 3</StyledLink>
               </Link>
               <Link  href="/persona4" passHref>
                    <StyledLink>Persona 4</StyledLink>
               </Link>
               <Link  href="/persona5" passHref>
                    <StyledLink>Persona 5</StyledLink>
               </Link>
            </div>
        </Nav>
    );
};

export default Navbar;
