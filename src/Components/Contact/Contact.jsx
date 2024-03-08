import './Contact.css'
import profile8 from '../../img/profil8.png'
import emailjs from '@emailjs/browser'
import React, { useContext, useRef, useState } from 'react'
import { themeContext } from '../..'

const Contact = () => {

    let dark = useContext(themeContext)

    const form = useRef();
    const [text,setText] = useState(
        {
            champ_nom : "",
            champ_mail : "",
            champ_message : ""
        }
    )


    const sendEmail = (e) => {
        e.preventDefault();
        const formResponse = document.getElementById('form_response')

        emailjs
            .sendForm('service_pb3dnem', 'template_9q4z852', form.current, {
                publicKey: 'D82krejlgjXQT9O7Q',
            })
            .then(
                () => {
                    setText(
                        {
                            champ_nom : "",
                            champ_mail : "",
                            champ_message : ""
                        }
                    )
                    formResponse.innerText = 'thank you for getting in touch'
                    formResponse.setAttribute('class','formSuccess')
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    formResponse.innerText = 'Error sending. Check the status of your network'
                    formResponse.setAttribute('class','formFailed')

                },
            );
    };


    const modifieText = (e)=>{
      
        const targ = e.target.id
        console.log(targ);
         setText({ [targ] : e.value})
    }

    return (
        <div className="contact" id='contact'>
            <div className="c-title">Contact <span>me</span></div>
            <div className="c-body">
                <div className="c-left">

                    <div className="contact-ombre">
                        <div className="c-card">
                            <img src={ profile8 } alt=""  />
                        </div>
                    </div>
                </div>
                <form ref={form} onSubmit={sendEmail} className="c-right"  >
                <div id="form_response" ></div>
                    <div className="input-ombre">
                        <input  onChange={modifieText} id='champ_nom' type="text" name="to_name" placeholder='Name*' value={text.champ_nom} style={ dark ? {} : { color: '#2A2A2A' } } />
                    </div>
                    <div className="input-ombre">
                        <input onChange={modifieText} style={ dark ? {} : { color: '#2A2A2A' } } id='champ_mail' type="text" name="user_mail"placeholder='Email ID*' value={text.champ_mail} />
                    </div>
                    <div className="input-ombre">
                        <textarea onChange={modifieText} id='champ_message' type='text' name="message"  placeholder='Message*' value={text.champ_message} style={ dark ? {} : { color: '#2A2A2A' } }></textarea>
                    </div>
                    <div className="choice">
                        <button type='submit' id='send' onClick={modifieText} className='button' style={ dark ? {} : { background: 'var(--orange)' } }>Send</button>
                        
                    </div>



                </form>
            </div>
        </div>
    )
}

export default Contact