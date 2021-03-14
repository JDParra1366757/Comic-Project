import Head from 'next/head'

import Image from 'next/image'
import navbar from 'src/components/navbar'


export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Demonic Coompendium</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <navbar  />
    </div>
      )
}