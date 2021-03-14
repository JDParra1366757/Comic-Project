import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const FooterSection = styled.div`
    background-image: url('practiceheadet.jpg');
    background-size: 100% 100%;
    background-repeat: no repeat;
    background-position: left;
    color: white;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const StyledLink = styled.a`
    padding: 0rem 2rem;
    color: blue;
`

const Footer = ({linkprev, linknext}) => {
    return (
        <FooterSection>
            <div>
               <Link  href = {linkprev} passHref>
                    <StyledLink>Previous Page</StyledLink>
               </Link>
               <Link  href = {linknext} passHref>
                    <StyledLink>Next Page</StyledLink>
               </Link>
            </div>
        </FooterSection>
    )
}

export default Footer
