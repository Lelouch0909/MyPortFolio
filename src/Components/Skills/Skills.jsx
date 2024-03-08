import './Skills.css'
import skillsSvg from '../../img/Skills.svg'

import React from 'react'

const Skills = () => {
    return (
        <div style={{textAlign: 'center'}} className="skills" id='skills'>
            <div className="s-text">
            Explore my skills ready to 
                <span> enhance your project. </span>  <br />

                <span>Invite me to join your team for innovative web development.</span>

            </div>

            <div className="s-img">
                <img src={ skillsSvg } alt=""  />
            </div>

        </div>
    )
}

export default Skills