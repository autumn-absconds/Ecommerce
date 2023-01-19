import React, { useContext } from 'react'
import HeroSection from '../components/HeroSection'
import { useProductContext } from '../context/ProductContext'


const About = () => {
  const data ={
    heading:'The about Store',
    description:'lorem'
  }

  const {h}= useProductContext();
  return (
    <div>
      {h}
      <HeroSection myData={data}/>
    </div>
  )
}

export default About
