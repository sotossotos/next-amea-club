import React from 'react'
import { Flex, ThemeUIStyleObject, Link, Text } from 'theme-ui'
import { useBreakpointIndex } from '@theme-ui/match-media'

const wrapperSx: ThemeUIStyleObject = {
    backgroundColor: '#1E2128',
    position:'absolute',
    bottom:'0',
    // justifyContent:'flex-end'
}

const footerSx: ThemeUIStyleObject = {
    marginTop:['0.9rem','0.8rem','0.7rem'],
    marginBottom:['1.56rem','1.35rem','1.2rem'],
    // marginX: ['1wv','9wv','18vw'],
    justifyContent:'center',
    width:'100vw'
}

const footerTitleSx: ThemeUIStyleObject = {
    fontSize: ['1rem','1.25rem','1.5rem'],
    color: 'white',
    textDecoration:'none'
}

const creatorSx: ThemeUIStyleObject = {
    marginBottom:['0','0','0.15rem'],
    fontSize:['0.75rem','1rem'],
    alignSelf:'flex-end',
    '::before' :{
        content:'""',
        marginLeft:'0.5rem'
    }
}

export const Footer = () => {

    const breakpoint = useBreakpointIndex({ defaultIndex: 2 })
    const isMobile: boolean = breakpoint < 1

    return (
        <Flex sx = {wrapperSx}>
            <Flex sx= { footerSx }>
                <Link sx={footerTitleSx} href={'https://www.youtube.com/channel/UCJrwvP4Hgkq2_YJB8veP-4w'} target= '_blank'>Hayate Network © 2022</Link>
                <Text sx={creatorSx}>by CynicalSoToS</Text>
            </Flex>
        </Flex>
    )
}

export default Footer 