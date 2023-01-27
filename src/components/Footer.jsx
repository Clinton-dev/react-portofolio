import React, {useState} from 'react'
import linkedin from '../assets/linkedin-box-line.svg'
import twitter from '../assets/twitter-line.svg'


function Footer() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const currentYear = new Date().getFullYear()

  const handleName =(e) => {
    const {value} = e.target
    setName(value)
  }

  const handleEmail =(e) => {
    const {value} = e.target
    setEmail(value)
  }

  const handleSubject =(e) => {
    const {value} = e.target
    setSubject(value)
  }

  const handleMessage =(e) => {
    const {value} = e.target
    setMessage(value)
  }

  return (
    <div id="footer" className='gradient'>
      <div id='footer-wrapper'>
        <div id='contact-section'>
          <h4>Say Hi!</h4>
          <p>Currently open for new opportunities or people to share ideas with! For any other information about me or my work, feel free to reach out!</p>
          <button>View resume</button>
          <div id='contact-details'>
            <p>Contact me at clintonwambugu@gmail.com</p>
            <p>Or find me here: </p><br/>
              <div  style={{display: 'flex'}}>
                <a style={{color: 'hsl(204 47% 32%)'}} className='social-links' href=" www.linkedin.com/in/clintonwambugu">
                  <img src={linkedin}/>
                </a>
                <a className='social-links' href="https://twitter.com/WambuguClinton">
                  <img src={twitter}/>
                </a>
              </div>
          </div>
        </div>
        <div id='form-section'>
          <h4>Send me a message!</h4>
          <form >
            <div style={{display: 'flex', width: '100%', flexWrap: 'wrap'}}>
              <input type="text" name='name' id='name'placeholder='name' value={name} onChange={handleName}/>
              <input type="email" name="email" id="email" placeholder='email' value={email} onChange={handleEmail}/>
            </div>
            <input type="text" name='subject' id='subject' placeholder='subject' value={subject} onChange={handleSubject}/>
            <textarea name="message" id="message" rows="5" value={message} onChange={handleMessage}>
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