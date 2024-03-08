import './Services.css'
import glasses from '../../img/glasses.png'
import humble from '../../img/humble.png'
import heartemoji from '../../img/heartemoji.png'
import cv from './cv.pdf'


import React, { useContext } from 'react'
import Card from '../Cards/Card'
import { themeContext } from '../..'

import { gsap } from "gsap";
    
import { TextPlugin } from "gsap/TextPlugin";

const Services = () => {

    let dark = useContext(themeContext)
    let buttonDark = dark ? 'button' : 'button3';
    const transition = { duration: 2, type: 'spring' }


    return (
        <div className="services" id='services'>
            <div className="awesome">
                <span>My Awesome</span>
                <span>services</span>
                <span style={ dark ? { color: "var(--gray)" } : { color: 'inherit' } }>As a Full Stack developer, I command React, Vue, Next.js for Front-end, and Java, Spring Boot, Spring JPA for Back-end, specializing in crafting secure REST and SOAP APIs. My database expertise spans MySQL, MariaDB, and MongoDB, providing a comprehensive approach.



                </span>

                <a href={ cv } className='choice'>
                    <div className={ buttonDark }>
                        <span className='button-content'>Download CV</span></div>
                </a>

            </div>



            <div className="cards">

                <Card initial={ { top: '-5rem', left: "20rem" } } whileInView={ { top: "0", left: "14rem" } } transition={ transition } style={ { left: "14rem" } } emoji={ heartemoji } heading={ "Front-end Services" } detail={ "As a Front-end specialist, I sculpt modern and intuitive interfaces using technologies such as React, Vue, and Next.js. My dedication to creating captivating user experiences is evident in every Front-end project I undertake." }></Card>

                <Card initial={ { top: '12rem', left: "-7rem" } } whileInView={ { left: "-4.5rem", top: "12.5rem" } } transition={ transition } style={ { left: "-4rem", top: "12rem" } } emoji={ glasses } heading={ " Back-end Services" } detail={ "On the Back-end, I excel in utilizing Java, Spring Boot, and Spring JPA. I am a seasoned architect of RESTful APIs, SOAP, and secure Web services. My skills extend to managing both relational databases (MySQL, MariaDB) and NoSQL databases (MongoDB), ensuring optimal performance and security." }></Card>

                <Card initial={ { top: '22rem', left: "32rem" } } whileInView={ { left: "12rem", top: "19rem" } } transition={ transition } style={ { left: "12rem", top: "19rem" } } emoji={ humble } heading={ "Database Management" } detail={ "My database mastery covers relational systems like MySQL and MariaDB, as well as NoSQL databases like MongoDB. Efficient data management is at the core of my approach, ensuring reliability and security in the systems I develop." }></Card>
            </div>
        </div>)
}

export default Services