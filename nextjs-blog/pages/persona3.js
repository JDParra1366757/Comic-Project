import Head from 'next/head'
import Image from 'next/image'


export default function persona3() {
  return (
    <div className="container">
      <Head>
        <title>DC: Persona 3</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
            Cathedral of Shadows
        </h1>

        <p className="description">
          Demonic Compendium: Persona 3
        </p>

        <div className="grid">
          <a href="https://megamitensei.fandom.com/wiki/Orpheus" className="card3">
            <h3>Orpheus M</h3>
            <p>The lost musician
            </p>
          </a>

          <a href="https://megamitensei.fandom.com/wiki/Orpheus" className="card3">
            <h3>Orpheus F</h3>
            <p>The lost songstress</p>
          </a>

          <a href="https://megamitensei.fandom.com/wiki/Orpheus_Telos" className="card3">
            <h3>Orpheus Telos</h3>
            <p>Infinite possibilities
            </p>
          </a>

          <a
            href="https://megamitensei.fandom.com/wiki/Thanatos"
            className="card3"
          >
            <h3>Thanatos</h3>
            <p>Rage of Death</p>
          </a>

          <a href="https://megamitensei.fandom.com/wiki/Messiah_(Persona)" className="card3">
            <h3>Messiah</h3>
            <p>Ray of Hope
            </p>
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