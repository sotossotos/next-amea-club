import type { NextPage } from 'next'
import Anthem from '../components/anthem'
import { Flex, Box, ThemeUIStyleObject } from 'theme-ui'
import Header from '../components/header'
import Footer from '../components/footer'
import SubLeaderboard  from '../components/sub-leaderboard'
import { GetStaticProps } from 'next'
import { InferGetStaticPropsType } from 'next'
import axios, { AxiosRequestConfig } from 'axios'

export const getStaticProps: GetStaticProps = async(context) => {
  const usernames:string[] = ['PerfectBalance1','AerakisMono','gusino','Parentalcontrol','panagiwwta_','iwannaaa98']
  const trovo_url = 'https://open-api.trovo.live/openplatform/channels/id'
  console.log(process.env.TROVO_CLIENT_ID)
  const requestConfig: AxiosRequestConfig = {
    headers: {
      'Content-type':'application/json',
      'Client-ID':process.env.TROVO_CLIENT_ID||'',
    }
  }
  const json = {
    username:'PerfectBalance1'
  }
  const res = await axios.post(trovo_url,json,requestConfig)
  console.log(res.data)
  return {
    props: {
      data:res.data
    },
    revalidate: 1
  }
}
const Home: NextPage = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const pageSx:ThemeUIStyleObject = {
    minHeight:'100vh',
    flexDirection:'column',
    position:'relative'
  }

  return (
    <Flex sx={pageSx}>
        <Header/>
        <Box>
          <Anthem/>
          <SubLeaderboard/>
        </Box>
        <Footer/>
    </Flex>
  )
}

export default Home
