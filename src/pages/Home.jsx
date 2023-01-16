import React from 'react'
import HeroSection from '../components/HeroSection'

const Home = () => {
  const data ={
    heading:'The hoime Store',
    description:'lorem'
  }
  return (
    <div>
       <HeroSection myData={data}/>
    </div>
  )
}

export default Home
