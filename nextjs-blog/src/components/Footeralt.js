import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const FooterSection = styled.div`
    background-image: url('kritafooter.jpg');
    background-size: fit;
    background-repeat: no repeat;
    background-position: 60% 0%;
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

const Footeralt = () => {
    return (
        <FooterSection>
            <div>
               <Link  href = "/archive" passHref>
                    <StyledLink>Archive</StyledLink>
               </Link>
               <Link  href = "/" passHref>
                    <StyledLink>Return to Comic</StyledLink>
               </Link>
               <Link  href = "/" passHref>
                    <StyledLink>Characters</StyledLink>
               </Link>
            </div>
        </FooterSection>
    )
}

export default Footeralt
