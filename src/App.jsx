import React from 'react'
import './App.css'
import NavbarArea from './Components/Navbar'
import HeroSection from './Components/Hero'
import PartnerSection from './Components/Partners'
import ControlScalableFlexible from './Components/ControlScalableFlexible'
import TrainSection from './Components/Train'
import CommentSection from './Components/comment'
import Allocate from './Components/Allocate'
import GetStarted from './Components/GetStarted'
import Footer from './Components/Footer'

function App() {

  return (
    <>
        <NavbarArea />
        <HeroSection />
        <PartnerSection />
        <ControlScalableFlexible />
        <TrainSection />
        <CommentSection />
        <Allocate />
        <GetStarted />
        <Footer />
    </>
  )
}

export default App
