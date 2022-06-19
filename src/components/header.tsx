import React from 'react'
import Image from 'next/image'
import logo from '../../public/HayateNetworkIcon.jpg'
import { Flex, ThemeUIStyleObject, Link } from 'theme-ui'
import { useBreakpointIndex } from '@theme-ui/match-media'

const wrapperSx: ThemeUIStyleObject = {
    backgroundColor: '#1E2128',
    width:'100%'
}

const menuSx: ThemeUIStyleObject = {
    marginTop:'0.75rem',
    marginX: ['4vw','9vw','18vw'],
}

const menuTitleSx: ThemeUIStyleObject = {
    fontSize: '2rem',
    color: 'white',
    textDecoration:'none',
    marginY:'auto',
    flexShrink:0,
    marginLeft:'1rem'
}

const Header = () => {

    const breakpoint = useBreakpointIndex({ defaultIndex: 2 })
    const isMobile: boolean = breakpoint < 1

    return (
        <Flex sx = {wrapperSx}>
            <Flex sx= { menuSx }>
                <Flex sx = {{width:'67rem'}}>
                    <Link href={'/'}>
                        <Image style= {{borderRadius:'1rem'}} src = {logo} alt="LogoIcon" width="72" height="72"/>
                    </Link>
                    <Link sx={menuTitleSx} href={'/'}>{ isMobile ?'AMEA Club':'Hayate Network'}</Link>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Header