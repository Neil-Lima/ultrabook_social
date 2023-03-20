import React from 'react'
import Navbar from './components/navbar/Navbar'

function Layout({children}) {
    return (
        <>
            <Navbar />
            {children}
           
        </>
    )
}

export default Layout