import React from 'react'
import { Flex, Link, Heading, ThemeUIStyleObject } from 'theme-ui'
import styled from 'styled-components'
import {AiFillStar,AiFillHeart,AiFillEye} from 'react-icons/ai'
import {VscCircleFilled} from 'react-icons/vsc'
import { SubLeaderboardProps, Streamer } from '../utils/types'
import Image from 'next/image'

const wrapperSx: ThemeUIStyleObject = {
  marginTop:'2.75rem',
  flexDirection:'column',
  marginX: ['6vw','9vw','20vw'],
}

const leaderboardTitleSx: ThemeUIStyleObject = {
  marginBottom:'1.5rem',
  alignSelf:'center',
  borderRadius:'4rem',
  borderStyle:'solid',
  padding:'1rem',
  borderWidth:'0.15rem',
  borderColor:'white',
  fontSize:['1.5rem','2rem','2.25rem'],
}

const streamerCardSx = (is_live:boolean): ThemeUIStyleObject => ({
  marginBottom:'1.5rem',
  marginX:'0.25rem',
  borderRadius:'0.5rem',
  padding:'0.5rem',
  borderStyle:'solid',
  borderWidth:'0.15rem',
  borderColor: is_live?'#19D66B':'white'
})

const profilePicSx = {
  borderRadius:'0.75rem',
}

const usernameTitleSx: ThemeUIStyleObject = {
  marginY:'auto',
  minWidth:['6rem','9rem','11rem'],
  display:['none','initial'],
  fontSize:['0.75rem','1.25rem','1.5rem'],
  marginX:['0.5rem','1.5rem','2.5rem']
}

const SubStar = styled(AiFillStar)`
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 0.25rem;
`
const FollowHeart = styled(AiFillHeart)`
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 0.25rem;
`

const LiveIcon = styled(VscCircleFilled)`
  color: #EB0400;
  border-radius: 1rem;
  border-width: 1px;
  background: rgba(0,0,0,0.4);
  position: absolute;
  top: 0.12rem;
  left: 0.12rem;
`
const ViewersEye = styled(AiFillEye)`
  margin-top: auto;
  margin-bottom: auto;
  margin-left:0.5rem;
`

const SubNumberSx: ThemeUIStyleObject = {
  marginY:'auto',
  fontSize:['1rem','1.25rem','1.6rem'],
}

const FollowNumberSx: ThemeUIStyleObject = {
  marginY:'auto',
  minWidth:['2.4rem','4rem','5rem'],
  fontSize:['1rem','1.25rem','1.6rem'],
}

const ViewerNumberSx: ThemeUIStyleObject = {
  marginY:'auto',
  marginRight:'0.75rem',
  minWidth:['1rem','2.75rem','2.5rem'],
  fontSize:['1rem','1.25rem','1.6rem'],
}
const SubLeaderboard: React.FC<SubLeaderboardProps> = (props) => {
  const sortedStreamersDescending = props.streamersInfo.sort((curr,next)=>next.subscriber_num-curr.subscriber_num)
  return(
    <Flex sx={wrapperSx}>
      <Heading sx={leaderboardTitleSx}>AMEA Trovo</Heading>
      {sortedStreamersDescending.map((item: Streamer,index:number) =>(
        <Flex sx={streamerCardSx(item.is_live)} key={`streamer-card-${index}`}>
          <Link sx={{position:'relative'}} href={`${item.channel_url}`} target='_blank'>
            <Image style={profilePicSx} src={`${item.profile_pic}`} alt='profile-pic' width='64' height='64'/>
            {item.is_live && <LiveIcon size={18}/>}
          </Link>
          <Heading sx={usernameTitleSx}>{item.username}</Heading>
          <FollowHeart size={32}/>
          <Heading sx={FollowNumberSx}>{(item.followers/1000).toFixed(1)}K</Heading>
          {item.is_live &&(
          <>
            <ViewersEye size={32}/> 
            <Heading sx={ViewerNumberSx}>{item.current_viewers > 999 ?`${(item.current_viewers/1000).toFixed(2)}K`:item.current_viewers}</Heading>
          </>)
          }
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