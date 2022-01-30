import React from 'react'
import "./Contact.css"


function Contact() {
  return (
    
            
         

     
   <div className="contact">
      <h2>Get In Touch!</h2>
      <form action= "https://formspree.io/f/mbjqodvb" className="form">
          <label for="yourname">Name:</label>
          <input type="name" id="yourname" name="name" placeholder=" Your name..." />
          
          <label for="youremail">E-mail:</label>
          <input type="email" id="youremail" name="email" placeholder="example@yahoo.com" />

          <label for="telephone">Phone Number</label>
          <input type="number" id="telephone" name="number" />

          <label for="aboutyou">How can I help you !</label>
          <textarea name="text" id="" cols="20" rows="10" placeholder="What can I do for you...."></textarea>

          <input type="submit" value="Submit" className="submit" />

      </form>
    </div>

    
 
      
    )
}

export default Contact
