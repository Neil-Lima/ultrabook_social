import React from 'react'
import NavSocial from './components/NavSocial'
function Layout({children}) {
  return (
   <>
    <NavSocial/><br />
    {children}
   </>
  )
}

export default Layout