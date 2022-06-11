import React from 'react'
import YouTube, { YouTubeProps } from 'react-youtube'
import { useBreakpointIndex, useResponsiveValue } from '@theme-ui/match-media'
import { Flex, Heading, ThemeUIStyleObject } from 'theme-ui'

export const Anthem = () => {

    const onPlayerReady: YouTubeProps['onReady'] = (event) => {
        // access to player in all event handlers via event.target
        event.target.playVideo()
        }
    
    const youtubeHeight = useResponsiveValue(['195','234','312'],{
        defaultIndex:2,
    })

    const youtubeWidth = useResponsiveValue(['320','384','552'],{
        defaultIndex:2,
    })

    const opts: YouTubeProps['opts'] = {
        height: youtubeHeight,
        width: youtubeWidth,
        playerVars: {
            autoplay: 1,
            loop: 1
        },
    }

    const wrapperSx: ThemeUIStyleObject = {
        marginTop:'2.75rem',
        flexDirection:'column',
        marginX: ['1vw','9vw','18vw'],
        alignItems:'center',
    }

    const anthemTitleSx: ThemeUIStyleObject = {
        marginBottom:'0.5rem',
        marginLeft:'0.25rem',
        fontSize:['1.5rem','2rem','2.25rem'],
    }
    
    const anthemSubTitleSx: ThemeUIStyleObject = {
        marginY: '1rem',
        fontSize:['0.8rem','1rem','1.25rem']
    }

    return (
        <Flex sx={wrapperSx}>
            <Heading sx={anthemTitleSx}> Hayate Network Anthem </Heading>
            <YouTube videoId="B_Kb543yo38" opts={opts} onReady={onPlayerReady}/>
            <Heading sx={anthemSubTitleSx}>ΕΙΧΑΜΕ ΤΡΟΒΟ ΣΤΡΕΑΜΣ, ΛΕΥΤΑ ΥΠΗΡΧΑΝ</Heading>
        </Flex>
  )
}


export default Anthem