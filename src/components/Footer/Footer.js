import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCoffee} from '@fortawesome/free-solid-svg-icons'
// import {ImLinkedin} from 'react-social-icons/im'
import { Link } from "react-router-dom";
import "./Footer.css"

function Footer() {
    return (
        <div>
     <footer className="container">
      <Link to="mailto:priscilla2@yahoo.com?subject=Contact">priscilla@dev.co</Link>
      <h3>Check out my social media pages !</h3>

      <ul className="social-links">
        <li className="list">
          <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon>
        </li>
        <li className="list">
          <Link to="/"><i className="fab fa-twitter"></i></Link>
        </li>
        <li className="list">
          <Link to="/"><i class="fab fa-whatsapp"></i></Link>
        </li>
        <li className="list">
          <Link to="/"><i className="fab fa-googleplus"></i></Link>
        </li>
      </ul>
    </footer>
        </div>
    )
}

export default Footer
