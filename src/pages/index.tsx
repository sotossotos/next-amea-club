import type { NextPage } from 'next'
import Head from 'next/head'
import Anthem from '../components/anthem'
import { Flex, Box, ThemeUIStyleObject } from 'theme-ui'
import { Header } from '../components/header'
import { Footer } from '../components/footer'

const Home: NextPage = () => {

  const pageSx:ThemeUIStyleObject = {
    minHeight:'100%',
    flexDirection:'column',
    alignItems:'stretch'
  }

  return (
    <Flex sx={pageSx}>
      <Head>
        <title>Hayate-Network</title>
      </Head>
        <Header/>
        <Box sx={{minHeight:'49rem'}}>
          <Anthem/>

        </Box>
        <Footer/>
    </Flex>
  )
}

export default Home
