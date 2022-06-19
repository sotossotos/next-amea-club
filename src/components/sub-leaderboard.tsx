import React from 'react'
import { Flex, Link, Heading, ThemeUIStyleObject } from 'theme-ui'
import styled from 'styled-components'
import {AiFillStar,AiFillHeart} from 'react-icons/ai'
import Image from 'next/image'

interface Streamer {
  is_live: boolean
  username: string
  channel_url: string
  profile_pic: string
  followers: number
  subscriber_num: number
}
interface SubLeaderboardProps {
  streamersInfo: Streamer[]
}

const wrapperSx: ThemeUIStyleObject = {
  marginTop:'2.75rem',
  flexDirection:'column',
  marginX: ['1vw','9vw','22vw'],
  // alignItems:'center',
}

const leaderboardTitleSx: ThemeUIStyleObject = {
  marginBottom:'0.5rem',
  alignSelf:'center',
  fontSize:['1.5rem','2rem','2.25rem'],
}

const streamerCardSx: ThemeUIStyleObject = {
  marginY:'1.5rem',
  marginX:'0.25rem',
  
}

const profilePicSx = {
  borderRadius:'2rem',
}

const usernameTitleSx: ThemeUIStyleObject = {
  marginY:'auto',
  minWidth:['6rem','9rem','11rem'],
  display:['none','initial'],
  fontSize:['0.75rem','1.25rem','1.5rem'],
  marginX:['0.5rem','2rem','2.5rem']
}

const SubStar = styled(AiFillStar)`
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 0.25rem;
`
const FollowHeart = styled(AiFillHeart)`
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 1.25rem;
`
const SubNumberSx: ThemeUIStyleObject = {
  marginY:'auto',
  fontSize:['1.25rem','1.75rem','1.8rem'],
}

const SubLeaderboard: React.FC<SubLeaderboardProps> = (props) => {
  console.log(props)
  const sortedStreamersDescending = props.streamersInfo.sort((curr,next)=>next.subscriber_num-curr.subscriber_num)
  return(
    <Flex sx={wrapperSx}>
      <Heading sx={leaderboardTitleSx}>Subs Leaderboard</Heading>
      {sortedStreamersDescending.map((item: Streamer,index:number) =>(
        <Flex sx={streamerCardSx} key={`streamer-card-${index}`}>
          <Link href={`${item.channel_url}`} target='_blank'>
            <Image style={profilePicSx} src={`${item.profile_pic}`} alt='profile-pic' width='64' height='64'/>
          </Link>
          <Heading sx={usernameTitleSx}>{item.username}</Heading>
          <FollowHeart size={32}/>
          <Heading sx={SubNumberSx}>{(item.followers/1000).toFixed(1)}K</Heading>
          <Flex sx={{marginLeft:'auto'}}>
            <Heading sx={SubNumberSx}>{item.subscriber_num}</Heading>
            <SubStar size={32}/>
          </Flex>
        </Flex>
      ))}
    </Flex>
  )

}
export default SubLeaderboard