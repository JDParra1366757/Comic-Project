import Head from 'next/head'
import Image from 'next/image'
import Comicpage from 'src/components/Comicpage'
import Footeralt from 'src/components/footeralt'
import styled from 'styled-components'

const Hero = styled.div`
  height: 90vh;
  overflow: scroll;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('hero.jpg');  
  background-size: 100% 100%;
  background-repeat: no repeat;
  background-position: left;
`
//4000*2000 parecer ser mas del doble y el circulo se apachurra

const Heading = styled.h1`
  color: white;
  padding: 10px 30px;
  font-size: 4rem;
  text-align: center;
  font-weight: 900;
`

export default function Home() {
  return (
    <>
      <Head>
      <title>Gridlocked</title>
        <link rel="icon" href="/icon.jpg" />
      </Head>
      <Hero>
          <div className="container">
            <div className="grid">
                <a href="/svkwiki" className="cardsvk">
                    <h3>SVK</h3>
                    <h1>The Newbie Hyena</h1>
                </a>
                </div>
            </div>
      </Hero>
      <Footeralt />
    </>
      )
}