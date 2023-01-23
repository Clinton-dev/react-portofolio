import React, {useState} from 'react'
import linkedin from '../assets/linkedin-box-line.svg'
import twitter from '../assets/twitter-line.svg'


function Footer() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const currentYear = new Date().getFullYear()


  return (
    <div id="footer" className='gradient'>
      <div>
        <div id='contact-section'>
          <h4>Say Hi!</h4>
          <p>Currently open for new opportunities or people to share ideas with! For any other information about me or my work, feel free to reach out!</p>
          <div id='contact-details'>
            <p>Contact me at clintonwambugu@gmail.com</p>
            <p>
              Or find me here <br/>
              <div style={{display: 'flex'}}>
                <a href=" www.linkedin.com/in/clintonwambugu">
                  <img src={linkedin}/>
                </a>
                <a href="https://twitter.com/WambuguClinton">
                  <img src={twitter}/>
                </a>
              </div>
            </p>
          </div>
        </div>
        <div id='form-section'>
          <h4>Send me a message!</h4>
          <form >
            <div style={{display: 'flex', width: '100%', flexWrap: 'wrap'}}>
              <input type="text" name='name' id='name'placeholder='name' value={name}/>
              <input type="email" name="email" id="email" placeholder='email' value={email}/>
            </div>
            <input type="text" name='subject' id='subject' placeholder='subject' value={subject}/>
            <textarea name="message" id="message" cols="30" rows="5" value={message}>
              Your message
            </textarea>
            <button>Send Message</button>
          </form>
        </div>
      </div>
      <p id='copyright'>Designed and developed by clinton wambugu &#169; {currentYear}</p>
    </div>
  )
}

export default Footer