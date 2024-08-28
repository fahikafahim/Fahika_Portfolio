import React from 'react'
import './App.css'
import Navbar from './Components/Navbar.jsx'
import Hero from './Components/Hero/Hero.jsx'
import Skills from './Components/Skills/Skills.jsx'
import Footer from './Components/Footer/Footer.jsx'
import ContactMe from './Components/ContactMe/ContactMe.jsx'
import WorkExperience from './Components/WorkExperience/WorkExperience.jsx'

const App = () => {
  return (
    <>
    <Navbar/>
    <div className="container">
    <Hero/>
    <Skills/>
    <WorkExperience/>
    <ContactMe/>
    
    </div>
    <Footer/>
    </>
  )
}

export default App