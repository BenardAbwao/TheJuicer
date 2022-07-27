import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faLinkedin,
  faTwitter,
  faInstagram,
  faGithub
} from "@fortawesome/free-brands-svg-icons";


const About = () => {
  return (
    <section className="section about-section">
      <h1 className="section-title">Contact Us</h1>
      <p className="section-description">
        This is a top-notch delicacy firm that is committed to serving you with fresh cocktail juices as well as giving you preparation methods for each drink. You can reach us through any of the contacts below. Follow us on our social media platforms as well to continue receiving more updates.
      </p>

      <div className="section-contacts">
            <a href="https://github.com/BenardAbwao"
        className="github social">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
      
      <a href="https://www.linkedin.com/in/benard-abwao-533a2a180"
        className="linkedin social">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>

      <a href="https://twitter.com/BenardAbwao2" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>

      <a href="https://www.instagram.com/benard.abwao"
        className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>

      <a href="https://www.facebook.com/benard.abwao5"
        className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
          
          
      </div>
    </section>
  )
}

export default About