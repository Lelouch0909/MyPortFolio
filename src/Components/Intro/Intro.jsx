import './Intro.css'
import profile from '../../img/profil7.jpg'

import thumbup from '../../img/thumbup.png'
import crown from '../../img/crown.png'

import React, { useContext } from 'react'
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import { themeContext } from '../..'
import { motion } from 'framer-motion'

import { gsap } from "gsap";
    
import { TextPlugin } from "gsap/TextPlugin";
import { useGSAP } from "@gsap/react";


const Intro = () => {
    let dark = useContext(themeContext)
    let buttonDark = dark ? 'button' : 'button2';
    const transition = { duration: 2, type: 'spring' }

    useGSAP(() => {
        gsap.registerPlugin(TextPlugin);

        const words = ['Engineer', 'Developper']
    
        let mainTimeline = gsap.timeline({
            repeat: -1
        })
        words.forEach(word => {
            let textTimeline = gsap.timeline({
                repeat: 1,
                yoyo: true,
                repeatDelay: 2
            })
            textTimeline.to('#typewriter', {
                text: word,
                duration: 1
            })
            mainTimeline.add(textTimeline)
        })
    })

   
    return (
        <div className='intro' id='intro'>

            <div className="i-left">
                <span>Hello!</span>
                <span>I'm Hermann Lontsi</span>
                <span>
                    <span style={ dark ? { background: 'var(--fBlack)', fontSize: "1.8rem", color: "white", fontWeight: "bold" } : { background: 'var(--fWhite)', fontSize: "1.8rem", color: "#090909", fontWeight: "bold" } }>Software </span>
                    <span id='typewriter' className='typewriter'></span>
                    <span id='eff' className='cursor'>|</span>
                </span>


                <span style={ dark ? { color: "var(--gray)" } : { color: "#0909099c" } }>

                    I am a dedicated Full Stack developer, fueled by an insatiable curiosity for technology and a passion for crafting innovative solutions. Over the past two years, I have immersed myself in the dynamic world of web development, refining my skills and gaining a profound understanding of the intricacies that drive project success.


                </span>
                <span>
                    <a className="choice" href='#services'>
                        <div className={ buttonDark } style={ dark ? {} : { background: "#7DCFB6" } }>Learn more</div>
                    </a>

                    <a className="choice" href='#contact'>
                        <div style={ dark ? {} : { background: "#7DCFB6" } } className={ buttonDark }>Contact me</div>
                    </a>

                </span>
            </div>

            <div className="i-right">
                <motion.div initial={ { bottom: '-1rem', left: '3rem' } } whileInView={ { left: '-5rem' } } transition={ transition } className="deco deco1">
                    <FloatingDiv image={ thumbup } txt1="Web" txt2="Developper"></FloatingDiv>
                </motion.div>
                <motion.div initial={ { top: '-3rem', right: '-3rem' } } whileInView={ { top: '-2rem', right: '-3rem' } } transition={ transition } className="deco deco2">
                    <FloatingDiv image={ crown } txt1="Back-end Dev" txt2="Spring professional"></FloatingDiv>
                </motion.div>
                <div className="p-ombre">

                    <div className="profil ">
                        <img src={ profile } alt="" />
                    </div>
                </div>
            </div>


        </div >
    )
    
}

export default Intro