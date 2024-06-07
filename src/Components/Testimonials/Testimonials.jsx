import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {

    const slider = useRef();
        let tx = 0;

    const slideForward= ()=>{
        if(tx > -50){
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }
    const slideBackward= ()=>{
        if(tx < 0){
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }

  return (
    <div className='testimonials'>

        <img src={next_icon} className='next-btn' onClick={slideForward}/>
        <img src={back_icon} className='back-btn' onClick={slideBackward}/>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_1}/>
                            <div>
                                <h3>William Jackson</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>In my experience all the teachers are very supportive and friendly and the placement process has been very smooth throughout. I would always be very grateful for the lifelong connections I made. 
                        Great experience from Edusity. You get a lot of opportunities. Work hard to get it. Be prepared for everything. Maintain your attendance.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_2}/>
                            <div>
                                <h3>Mark Nijil</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>While Duke has been the cornerstone of my academic journey, it has also been so much more than that. Beyond the rigorous coursework, Green River provided me with endless opportunities to grow and thrive. From joining MESA and working with the Workforce Education Department, to becoming an RA and Community Engagement Ambassador at student housing. </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_3}/>
                            <div>
                                <h3>Mellisa Wane</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>In my experience all the teachers are very supportive and friendly and the placement process has been very smooth throughout. I would always be very grateful for the lifelong connections I made. 
                        Great experience from Edusity. You get a lot of opportunities. Work hard to get it. Be prepared for everything. Maintain your attendance.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_4}/>
                            <div>
                                <h3>John Doe</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>In my experience all the teachers are very supportive and friendly and the placement process has been very smooth throughout. I would always be very grateful for the lifelong connections I made. 
                        Great experience from Edusity. You get a lot of opportunities. Work hard to get it. Be prepared for everything. Maintain your attendance.</p>
                    </div>
                </li>
            </ul>
        </div>
      
    </div>
  )
}

export default Testimonials
