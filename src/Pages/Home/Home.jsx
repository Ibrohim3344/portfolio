import React from 'react'
import Info from './Info'
import ITBerries from './ITBerries'
import AboutMe from './AboutMe'
import InfoMYSkills from './InfoMYSkills'
import Skills from './Skills'
import OtherSkill from './OtherSkill'
import Portfolio from './Portfolio'
import Project from './Project'
import Contact from './Contact'

const Home = () => {
  return (
    <main className='font-nun'>
      <Info />
      <ITBerries />
      <AboutMe />
      <InfoMYSkills />
      <Skills />
      <OtherSkill />
      <Portfolio />
      <Project />
      <Contact />
    </main>
  )
}

export default Home