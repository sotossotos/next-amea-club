import React from 'react'
import Image from 'next/image'
import logo from '../public/HayateNetworkIcon.jpg'
import { Flex, ThemeUIStyleObject, Link } from 'theme-ui'

const wrapperSx: ThemeUIStyleObject = {
    backgroundColor: '#1E2128',
    width:'100vw'
}

const menuSx: ThemeUIStyleObject = {
    marginTop:'0.75rem',
    marginX: ['1vw','1wv','1wv','18vw'],
}

const menuTitleSx: ThemeUIStyleObject = {
    fontSize: '2rem',
    color: 'white',
    textDecoration:'none',
    marginY:'auto',
    marginLeft:'1rem'
}

export const Header = () => {

    const isMobile = true
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