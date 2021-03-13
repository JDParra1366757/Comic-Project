import Head from 'next/head'
import Image from 'next/image'


export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Demonic Coompendium</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
            Cathedral of Shadows
        </h1>

        <p className="description">
          Demonic Compendium
        </p>

        <div className="grid">
          <a href="/persona3" className="card3">
            <h3>Persona 3 FES and Portable</h3>
            <p>Power risen from Dread
            </p>
          </a>

          <a href="/persona4" className="card4">
            <h3>Persona 4 Golden</h3>
            <p>Discovery brought by Acceptance</p>
          </a>

          <a
            href="persona5"
            className="card5"
          >
            <h3>Persona 5 Royal</h3>
            <p>Willpower born through Rebellion</p>
          </a>

        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
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
