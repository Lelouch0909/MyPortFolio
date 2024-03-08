import { themeContext } from '../..';
import './Card.css'
import { motion } from 'framer-motion'


import React, { useContext, useState } from 'react'

const Card = ({ emoji, heading, detail , style ,initial,whileInView,transition,}) => {

    let courText = detail.substring(0, 70) + "...";

    let [text, setText] = useState(courText)
    let [active, setActive] = useState(true)


    let dark = useContext(themeContext)
  
    return (
        <motion.div initial={initial} transition={transition} whileInView={whileInView} className="c-ombre" style={style}>
            <div className="card" style={ dark ?{ } : {background : "#ECE4B7"} }>
                <img src={emoji } alt="" />
                <span>{ heading }</span>
                <span>{ text }</span>
                <button className='c-button'  style={ dark ?{background : "var(--gray)", color : "#fff" , opacity : "1"} : {} } onClick={ () => {
                    console.log(active);
                    if (active) {
                        setActive(false)

                        setText(detail)

                    }
                    else {
                        setActive(true)

                        setText(courText)
                    }

                } }>LEARN MORE</button>
              
            </div>
        </motion.div>


    )
}

export default Card