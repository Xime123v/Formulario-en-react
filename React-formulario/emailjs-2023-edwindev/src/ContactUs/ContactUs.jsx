import React, { useRef } from "react";
import './contactUs.css';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {

  const refForm = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const servicedId = "service_czuli08";
    const templateId="template_81jv519";
    const apikey ="xj4-CO1e_RWiVaSnv"

    emailjs.sendForm(servicedId,templateId, refForm.current, apikey)
    .then( result => console.log(result.text))
    .catch(error => console.error(error))
  }
  return (
    <form ref={refForm} action="" onSubmit={handleSubmit}>
      <div className="header-contact">
       <h2>Contact Us</h2>
       <p>Please fill this from</p>
      </div>
       <fieldset className='field-name'>
      <label className='symbol-required name' htmlFor="">Name</label>
      <input name='username' type="text" placeholder="Ej: jimena dev" required></input>
       </fieldset>
       <fieldset className='field-email'>
        <label className='symbol-required' name='email'>Email</label>
        <input placeholder='Ej: edwindev@gmail.com' type="email" name='email' id='email' required></input>
     </fieldset>
     <fieldset className='field-message'>
      <label className='symbol-required'>Email</label>
      <textarea maxLength="500" placeholder='type yout message' name="message" id="" cols="30" rows="10"></textarea>

     </fieldset>

    <button className='btn-send'>Send</button>
    </form>
  )
}