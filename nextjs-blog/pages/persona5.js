import Head from 'next/head'
import Image from 'next/image'


export default function persona5() {
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
          Demonic Compendium: Persona 5
        </p>

        <div className="grid">
          <a href="https://megamitensei.fandom.com/wiki/Ars%C3%A8ne" className="card5">
            <h3>Arséne</h3>
            <p>Rebellion born against all odds
            </p>
          </a>

          <a href="https://megamitensei.fandom.com/wiki/Satanael" className="card5">
            <h3>Satanael</h3>
            <p>God-Killer</p>
          </a>

          <a
            href="https://megamitensei.fandom.com/wiki/Raoul"
            className="card5"
          >
            <h3>Raoul</h3>
            <p>Stealing back reality</p>
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
