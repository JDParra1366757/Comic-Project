import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const FooterSection = styled.div`
    background-image: url('kritafooter.jpg');
    background-size: fit;
    background-repeat: no repeat;
    background-position: 30% 0%;
    color: white;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const StyledLink = styled.a`
    font-family: monospace;
    padding: 0rem 5.5rem;
    font-size: 20px;
    color: black;
    font-weight: bold;
    text-decoration-line: underline;
`

const Footer = ({linkprev, linknext}) => {
    return (
        <FooterSection>
            <div>
               <Link  href = {linkprev} passHref>
                    <StyledLink>Previous Page</StyledLink>
               </Link>
               <Link  href = "/" passHref>
                    <StyledLink>Latest Page</StyledLink>
               </Link>
               <Link  href = {linknext} passHref>
                    <StyledLink>Next Page</StyledLink>
               </Link>
            </div>
        </FooterSection>
    )
}

export default Footer
