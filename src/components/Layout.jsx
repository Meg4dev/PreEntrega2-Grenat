import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import ItemListContainer from './ItemListContainer'
import '../global/style.css'

const Layout = ({children}) => {
  return (
    <>
    <NavBar />
    <main>
    {children}
    </main>
    <Footer/>
    </>
  )
}

export default Layout