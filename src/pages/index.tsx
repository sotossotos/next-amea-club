import type { NextPage } from 'next'
import Head from 'next/head'
import YouTube, { YouTubeProps } from 'react-youtube'
import Anthem from '../components/anthem'
import { Header } from '../components/header'

const Home: NextPage = () => {


  return (
    <div>
      <Head>
        <title>Hayate-Network</title>
      </Head>
        <Header/>
        <Anthem/>
    </div> 
  )
}

export default Home
