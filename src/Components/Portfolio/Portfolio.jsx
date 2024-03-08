import { Swiper, SwiperSlide } from 'swiper/react';
import './Portfolio.css'
import SideBar from '../../img/sidebar.png'
import musicapp from '../../img/musicapp.png'
import hoc from '../../img/hoc.png'
import ecommerce from '../../img/ecommerce.png'
import "swiper/css"

import React from 'react'

const Portfolio = () => {
    return (
        <div className="portfolio" id='portfolio'>
            <span>Recent Projects</span>
            <span>Portfolio</span>
        
            <Swiper spaceBetween={ 30 } slidesPerView={ 2 } grabCursor={true} className='portfolio-slider'>
                <SwiperSlide>
                    <img src={ SideBar } alt=""  />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={ musicapp } alt=""  />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={ hoc } alt=""  />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={ ecommerce   } alt=""  />
                </SwiperSlide>
            </Swiper>
            <span>I've crafted a robust stock management API using Spring and replicated Twitter in React with a meticulously designed Spring server. My portfolio highlights a range of projects, demonstrating my passion for innovation.

</span>
        </div>
    )
}

export default Portfolio