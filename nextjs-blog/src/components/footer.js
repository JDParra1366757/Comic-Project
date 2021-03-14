import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const FooterSection = styled.div`
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
    padding: 0rem 2rem;
    color: blue;
`

const Footer = () => {
    return (
        <FooterSection>
            <div>
               <Link  href="/persona3" passHref>
                    <StyledLink>Previous Page</StyledLink>
               </Link>
               <Link  href="/index" passHref>
                    <StyledLink>Next Page</StyledLink>
               </Link>
            </div>
        </FooterSection>
    )
}

export default Footer
