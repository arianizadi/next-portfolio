import Head from 'next/head'

import { NavBar } from "@/components/NavBar"
import { Hero } from "@/components/Hero"
import { BasicIntro } from "@/components/BasicIntro"

export default function Home() {
  return (
    <main>
      <Head>
        <title>Arian Izadi | SWE | CyberSec</title>
        <meta name="description" content="This is my website, where I show some projects and share a bit about myself." />
        <link rel="icon" href="/favicon2.png" />
      </Head>
      <NavBar />
      <Hero />
      <BasicIntro />
    </main>
  )
}
