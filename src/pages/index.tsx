import type { NextPage } from 'next'
import Anthem from '../components/anthem'
import { Flex, Box, ThemeUIStyleObject } from 'theme-ui'
import Header from '../components/header'
import Footer from '../components/footer'
import SubLeaderboard  from '../components/sub-leaderboard'
import { ColorRing } from  'react-loader-spinner'
import { HomePageProps } from '../utils/types'
import axios from 'axios'
import useSWR from 'swr'

const fetcher = (url: string) => axios.get(url).then(r => r.data)

const Home: NextPage<HomePageProps> = (props) => {

  const { data } = useSWR('/api/streamer-info',fetcher,{ refreshInterval: 5000 })
  
  const streamersInfo = data ? data.streamersInfo : undefined

  const pageSx:ThemeUIStyleObject = {
    height:'100vh',
    flexDirection:'column',
    display:'flex'
  }

  const loadingWrapperSx: ThemeUIStyleObject = {
    marginTop:'2.75rem',
    justifyContent: 'center',
    marginX: ['6vw','9vw','20vw'],
  }

  const contentSx: ThemeUIStyleObject = {
    flex: '1 0 auto'
  }

  return (
    <Flex sx={pageSx}>
        <Header/>
        <Box sx={contentSx}>
          <Anthem/>
          {/* {streamersInfo ? <SubLeaderboard streamersInfo={[...streamersInfo]}/>:
          <Flex sx={loadingWrapperSx}>
            <ColorRing
              visible={true}
              height="80"
              width="80"
              ariaLabel="blocks-loading"
              wrapperStyle={{}}
              wrapperClass="blocks-wrapper"
              colors={['white', 'white', 'white', 'white', 'white']}
            />
          </Flex>} */}
        </Box>
        <Footer/>
    </Flex>
  )
}

export default Home
