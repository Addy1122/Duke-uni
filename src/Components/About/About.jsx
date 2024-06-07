import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlaystate}) => {
  return (
    <div className='about'>
      <div className='about-left'>
        <img src={about_img} className='about-img'/>
        <img src={play_icon} className='play-icon' onClick={()=>{setPlaystate(true)}}/>
      </div>
      <div className='about-right'>
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>Embark on a Transformative educatonal journey with our university's comprehensive education progrmas. Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experience needed to excel in the dynamics field of education</p>
        <p>With a focus on innovaton, hands-on learning, and personalized mentorship, our programs prepare aspiring educators to make a meaningful impact in classrooms, schoold and communities.</p>
        <p>Whether you aspire to become a teacher, administrator, counselor, or educatonal leader, our diverse range of programs offers the perfect pathway to achieve your goals and unlock and your full potential in shaping the future of education</p>
      </div>
    </div>
  )
}

export default About
