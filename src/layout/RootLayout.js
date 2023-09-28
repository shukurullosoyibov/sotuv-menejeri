import React from 'react'
import Footer from '../components/Footer'
import {  Outlet  } from 'react-router-dom'
import Header from '../components/Header'


function RootLayout() {
 
  return (
    <>
  
        <Header />
        <main className=''>
            <Outlet/>
        </main>

      <Footer />
    </>
  )
}

export default RootLayout
