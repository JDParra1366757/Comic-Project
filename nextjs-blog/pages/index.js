import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'

const Hero = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
`
const Heading = styled.h1`
  color: #000;
  font-size: 10rem;
  font-weight: 900;
`

export default function Home() {
  return (
    <>
      <Head>
        <title>Spiritbreakers</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero>
        <Heading classname="text-red-500">NEXT</Heading>
      </Hero>
    </>
      )
}