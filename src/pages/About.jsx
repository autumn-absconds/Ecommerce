import React from 'react'
import HeroSection from '../components/HeroSection'

const About = () => {
  const data ={
    heading:'The about Store',
    description:'lorem'
  }
  return (
    <div>
      <HeroSection myData={data}/>
    </div>
  )
}

export default About
