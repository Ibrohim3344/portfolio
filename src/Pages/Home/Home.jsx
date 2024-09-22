import React from 'react'
import Info from './Info'
import ITBerries from './ITBerries'
import AboutMe from './AboutMe'
import InfoMYSkills from './InfoMYSkills'
import Skills from './Skills'

const Home = () => {
  return (
    <main className='font-nun'>
      <Info />
      <ITBerries />
      <AboutMe />
      <InfoMYSkills />
      <Skills />
    </main>
  )
}

export default Home