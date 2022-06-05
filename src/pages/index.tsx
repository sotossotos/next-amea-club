import type { NextPage } from 'next'
import Head from 'next/head'
import Anthem from '../components/anthem'
import { Flex, Box, ThemeUIStyleObject } from 'theme-ui'
import { Header } from '../components/header'
import { Footer } from '../components/footer'

const Home: NextPage = () => {

  const pageSx:ThemeUIStyleObject = {
    minHeight:'100vh',
    flexDirection:'column',
    position:'relative'
  }

  return (
    <Flex sx={pageSx}>
      <Head>
        <title>Hayate-Network</title>
      </Head>
        <Header/>
        <Box>
          <Anthem/>
        </Box>
        <Footer/>
    </Flex>
  )
}

export default Home
