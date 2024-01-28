import React from 'react'
import Slider from './Slider'
import TopMovies from './TopMovies'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
       <Slider />
       <TopMovies />
       <div className='text-center'>
           <Link to="/movies" className='btn btn-dark mt-5 px-3'>More Movies</Link>
       </div>
    </>
  )
}

export default Home