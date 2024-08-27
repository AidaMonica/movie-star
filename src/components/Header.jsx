import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export default function Header() {
  return (
    <div className='header'>
      <img src="/cinema.webp" height={60} />
      <Link to="/">Home</Link>
      <Link to="/favorites">Favorite</Link>
      <Link to="/movies/2024">2024</Link>
      <Link to="/movies/2023">2023</Link>
      <Link to="/movies/2022">2022</Link>
      <Link to="/movies/2021">2021</Link>
      <Link to="/movies/2020">2020</Link>
    </div>  
  )
}
