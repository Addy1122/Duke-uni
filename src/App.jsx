import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'

const App = () => {

  const [playState, setPlaystate] = useState(false);


  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <div className='container'>
      <Title subTitle='Our Program' title='What we offer'/>
      <Programs/>
      <About setPlaystate={setPlaystate}/>
      <Title subTitle='Gallery' title='Campus Photos'/>
      <Campus/>
      <Title subTitle='Testimonials' title='What students says'/>
      <Testimonials/>
      <Title subTitle='Contact us' title='Get in touch'/>
      <Contact/>
      <Footer/>
      <VideoPlayer playState={playState} setPlaystate={setPlaystate}/>
      </div>
     
    </div>
  )
}

export default App
