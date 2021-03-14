import Head from 'next/head'
import Image from 'next/image'
import Navbar from 'src/components/navbar'


export default function Home() {
  return (
    <>
      <Head>
        <title>Demonic Coompendium</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
    </>
      )
}