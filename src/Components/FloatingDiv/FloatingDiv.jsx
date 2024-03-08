import React, { useContext } from 'react'
import './FloatingDiv.css'
import { themeContext } from '../..';

function FloatingDiv({image,txt1,txt2}) {

  let dark = useContext(themeContext)

  return (
    <div className='floatingdiv' style={ dark ?{background : "#232732",  boxShadow: "-5px -5px 10px 0 rgba(255, 255, 255, 0.1)" } : {}}>
        <img src={image} alt=""  />
        <span>
            {txt1}
            <br />
            {txt2}
        </span>
    </div>
  )
}

export default FloatingDiv