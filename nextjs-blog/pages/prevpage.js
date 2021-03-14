import Head from 'next/head'
import Image from 'next/image'
import Comicpage from 'src/components/Comicpage'
import Footer from 'src/components/footer'
import styled from 'styled-components'

const Hero = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('practiceherop.jpg');  
  background-size: 100% 100%;
  background-repeat: no repeat;
  background-position: left;
`
//4000*2000 parecer ser mas del doble y el circulo se apachurra

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
      <div>
                 <a href="/" className="cardprev">
                    dumdum
                </a>
        </div>
      </Hero>
      <Footer linkprev={"/page2"} linknext={"/"} />
    </>
      )
}