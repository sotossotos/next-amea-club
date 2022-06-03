import React from 'react'
import YouTube, { YouTubeProps } from 'react-youtube'
import { Flex, Heading, ThemeUIStyleObject } from 'theme-ui'

export const Anthem = () => {
    const onPlayerReady: YouTubeProps['onReady'] = (event) => {
        // access to player in all event handlers via event.target
        event.target.playVideo()
        }

    const opts: YouTubeProps['opts'] = {
        height: '390',
        width: '640',
        playerVars: {
            autoplay: 1,
            loop: 1
        },
    }

    const wrapperSx: ThemeUIStyleObject = {
        marginTop:'2.75rem',
        flexDirection:'column',
        marginX: ['1vw','1wv','1wv','18vw'],
        alignItems:'center'
    }

    const anthemTitleSx: ThemeUIStyleObject = {
        marginBottom:'0.5rem',
        marginLeft:'0.25rem',
        fontSize:'3rem'
    }
    
    const anthemSubTitleSx: ThemeUIStyleObject = {
        marginY: '1rem'
    }

    return (
        <Flex sx={wrapperSx}>
            <Heading sx={anthemTitleSx}> Hayate Network Anthem </Heading>
            <YouTube videoId="B_Kb543yo38" opts={opts} onReady={onPlayerReady}/>
            <Heading sx={anthemSubTitleSx}>ΓΜΧΤ ΣΟΥ ΠΟΥ ΕΙΝΑΙ ΤΑ ΤΡΟΒΟ ΣΤΡΕΑΜΣ</Heading>
        </Flex>
  )
}


export default Anthem