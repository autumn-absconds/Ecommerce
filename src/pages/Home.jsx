import React from 'react'
import HeroSection from '../components/HeroSection'
import Services from '../components/Services'
import Trusted from '../components/Trusted'


const Home = () => {
  const data ={
    heading:'The hoime Store',
    description:'lorem'
  }
  return (
    <div>
       <HeroSection myData={data}/>
       <Services/>
       <Trusted/>
    </div>
  )
}

export default Home
