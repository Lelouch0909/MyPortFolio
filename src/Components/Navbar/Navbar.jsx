import './Navbar.css'
import React, { useContext, useState } from 'react'
import { themeContext } from '../..'


const Navbar = ({ setDark }) => {
  let [active, setActive] = useState(true)
  let dark = useContext(themeContext)

  const changeTheme = () => {
    if (active) {
      setActive(false)
      setDark()
    }
    else {
      setActive(true)
      setDark()

    }
  }

  let buttonDark = dark ? 'button' : 'button2';
  return (

    <div className="header">
      <div className="navbar">

        <div className="toggles">
        <span>LM </span>

          <label className="label" >
            <div className="toggle" >
              <input className="toggle-state" type="checkbox" name="check" value="check" onClick={ () => changeTheme() }/>
              <div className="indicator"></div>
            </div>
          </label>
 
        </div>

        <div className="choices" id='choices'>

          <a className="choice" href='#intro'>
            <div className={ buttonDark }>About Me</div>
          </a>

          <a className="choice" href='#services'>
            <div className={ buttonDark }>Services</div>
          </a>

          <a className="choice" href='#portfolio'>
            <div className={ buttonDark }>Portfolio</div>
          </a>

          <a className="choice" href='#skills'>
            <div className={ buttonDark }>Skills</div>
          </a>



          <a className="cta" href='#contact'>
            <span style={ dark ? { color: "#fff" } : { color: "#090909" } } >Contact me</span>
            <svg width="15px" height="10px" viewBox="0 0 13 10">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </a>


        </div>

      </div>
    </div>
  )
}

export default Navbar