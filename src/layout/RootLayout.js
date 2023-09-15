import React from 'react'
import Footer from '../components/Footer'
import { NavLink, Outlet } from 'react-router-dom'
import Header from '../components/Header'

function RootLayout() {
  return (
    <>
      <Header />

        <main>
            <Outlet/>
        </main>

      <Footer />
    </>
  )
}

export default RootLayout
