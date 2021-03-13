import Head from 'next/head'
import Image from 'next/image'


export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Demonic Compendium</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
            Cathedral of Shadows
        </h1>

        <p className="description">
          Demonic Compendium: Persona 4
        </p>

        <div className="grid">
          <a href="https://megamitensei.fandom.com/wiki/Izanagi" className="card4">
            <h3>Izanagi</h3>
            <p>The façade to face life 
            </p>
          </a>

          <a href="https://megamitensei.fandom.com/wiki/Izanagi-no-Okami" className="card4">
            <h3>Izanagi-no-Okami</h3>
            <p>The fog subsides</p>
          </a>
        </div>
      </main>

      <footer>
        <a
          href="https://atlus.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created by{' '}
          <img src="/1106px-Atlus_logo_(2014).svg.png" alt="Atlus" className="logo" />
        </a>
      </footer>

      <style jsx>{`
      
       
      `}</style>

      <style jsx global>{`
       
      `}</style>
    </div>
  )
}
