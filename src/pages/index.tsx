import type { NextPage } from 'next'
import Anthem from '../components/anthem'
import { Flex, Box, ThemeUIStyleObject } from 'theme-ui'
import Header from '../components/header'
import Footer from '../components/footer'
import SubLeaderboard  from '../components/sub-leaderboard'
import { GetServerSideProps  } from 'next'
import axios from 'axios'
import useSWR from 'swr'

interface Streamer {
  is_live: boolean
  current_viewers:number
  username: string
  channel_url: string
  profile_pic:string
  followers: number
  subscriber_num: number
}

const fetcher = (url: string) => axios.get(url).then(r => r.data)

export const getServerSideProps: GetServerSideProps  = async(context) => {
  const apiResp = await axios.get(`http://${context.req.headers.host}/api/streamer-info`)
  return {
    props: {
      streamersInfo:[...apiResp.data.streamersInfo]
    }
  }
}

interface HomePageProps {
  streamersInfo: Streamer[]
}

const Home: NextPage<HomePageProps> = (props) => {

  const { data } = useSWR('/api/streamer-info',fetcher,{ refreshInterval: 5000 })
  
  const streamersInfo = data ? data.streamersInfo:props.streamersInfo
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
          <SubLeaderboard streamersInfo={[...streamersInfo]}/>
        </Box>
        <Footer/>
    </Flex>
  )
}

export default Home
