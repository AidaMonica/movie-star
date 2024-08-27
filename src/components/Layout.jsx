import React from 'react'
import { Outlet } from 'react-router-dom'
import './Layout.css'
import Header from './Header'
import Footer from './Footer'

export default function Layout() {
  return (
    <div className='layout'>
      <Header />
      <div className='outlet'>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}
