import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'


const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "ad8f8108-f756-4b26-b617-4ae6f2659de9");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us message <img src={msg_icon}/></h3>
        <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
        <ul>
            <li><img src={mail_icon}/>contact@edusity.com</li>
            <li> <img src={phone_icon}/>+1 263-593-8497</li>
            <li><img src={location_icon}/>77 Massachusetts Ave, Cambridge<br/>Ma 02139, United States</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <lable>Name</lable>
            <input type="text" name="name" placeholder='Enter your name' required/>
            <lable>Email</lable>
            <input type="text" name="email" placeholder='Enter your email' required/>
            <lable>Phone Number</lable>
            <input type="tel" name="phone" placeholder='Enter your mobile number' required/>
            <lable>Write your message here</lable>
            <textarea name="message" rows="6" placeholder='Enter your text message' required></textarea>
            <button type='submit' className='btn dark-btn'>Submit now</button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
