import React, { ReactElement } from 'react'
import { global } from '../styles/global'
import { Global } from '@emotion/react'

type Props = {
    children: ReactElement | ReactElement[]
}

const Layout:React.FC<Props>=({
    children
})=>{
    return(
        <>
            <Global styles = {{...global}}/>
            {children}
        </>
    )
}

export default Layout