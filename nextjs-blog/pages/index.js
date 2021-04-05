import Head from 'next/head'
import Image from 'next/image'
import Comicpage from 'src/components/Comicpage'
import Footer from 'src/components/footer'
import styled from 'styled-components'
import {useEffect} from "react"

const Hero = styled.div`
  height: 90vh;
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
  color: #000;
  font-size: 10rem;
  font-weight: 900;
`

export default function Home() {
  const [data, setData] = useState([]);
  const getData=()=>{
    fetch('http://localhost:9000/testAPI'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
      });
  }
  
  useEffect(()=>{
    getData()
  },[])

  return (
    <>
      <Head>
      <title>Gridlocked</title>
        <link rel="icon" href="/icon.jpg" />
      </Head>
      <Hero>
        <div>
                 <a href="/" className="cardfinal">
                    dumdum
                </a>
        </div>
      </Hero>
      <Footer linkprev={"/prevpage"} linknext={"/"} />
    </>
      )
}