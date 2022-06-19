import type { NextPage } from 'next'
import Anthem from '../components/anthem'
import { Flex, Box, ThemeUIStyleObject } from 'theme-ui'
import Header from '../components/header'
import Footer from '../components/footer'
import SubLeaderboard  from '../components/sub-leaderboard'
import { GetStaticProps } from 'next'
import { InferGetStaticPropsType } from 'next'
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

interface Streamer {
  is_live: boolean
  current_viewers:number
  username: string
  channel_url: string
  profile_pic:string
  followers: number
  subscriber_num: number
}

export const getStaticProps: GetStaticProps = async(context) => {
  const usernames:string[] = ['PerfectBalance1','AerakisMono','Parentalcontrol','panagiwwta_','diosicon','gusino','Sefiroman']
  const trovo_url = 'https://open-api.trovo.live/openplatform/channels/id'
  const requestConfig: AxiosRequestConfig = {
    headers: {
      'Content-type':'application/json',
      'Client-ID':process.env.TROVO_CLIENT_ID||'',
    }
  }
  const allResp: any[] = []
  for (const user of usernames){
    const json = {
      username:`${user}`
    }
    const res = await axios.post(trovo_url,json,requestConfig)
    const {is_live,followers,subscriber_num,profile_pic,current_viewers,channel_url,username} = res.data
    const streamerInfo: Streamer = {is_live,username,profile_pic,followers,channel_url,current_viewers,subscriber_num}
    allResp.push(streamerInfo)
  }

  return {
    props: {
      streamersInfo:[...allResp]
    },
    revalidate: 1
  }
}

interface HomePageProps {
  streamersInfo: Streamer[]
}

const Home: NextPage<HomePageProps> = (props) => {
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
          <SubLeaderboard streamersInfo={[...props.streamersInfo]}/>
        </Box>
        <Footer/>
    </Flex>
  )
}

export default Home
