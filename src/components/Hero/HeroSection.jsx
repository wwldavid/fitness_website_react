import React from 'react';
import './HeroSection.css'
import Header from '../Header/Header';
import hero_image from "../../assets/hero_image.png"
import field from "../../assets/field.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png"
import {motion} from 'framer-motion'
import NumberCounter from 'number-counter'


const HeroSection = () => {

  const transition = {type:'spring', duration:3}
  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <div className='hero' id='hero'>
      <div className="blur hero-blur"></div>
      <div className='left-hero'>
        <Header/>
        <div className='the-best-ad'>
           <motion.div
           initial={{left: mobile? "178px" : "238px"}}
           whileInView={{left:'8px'}}
           transition={{...transition, type:'tween'}}
           ></motion.div>
           <span>the best fitness society in Calgary</span>
        </div>

        <div className='hero-text'>
          <div>
            <span className='stroke-text'>Feel</span>
            <span>great</span>
          </div>
          <div>
            <span>Look amazing</span>
          </div>
          <div>
            <span>Where fitness meets fulfillment —- build the life you've always wanted.</span>
          </div>
        </div>

        {/*figures*/}
        <div className="figures">
           <div><span><NumberCounter end={30} start={10} delay={5} prefix="+"/></span><span>Fitness Professionals</span></div>
           <div><span><NumberCounter end={188} start={99} delay={5} prefix="+"/></span><span>Community Members</span></div>
           <div><span><NumberCounter end={50} start={29} delay={5} prefix="+"/></span><span>Training Plans</span></div>
        </div>

        {/*hero buttons*/}
        <div className='hero-buttons'>
           <button className="btn">Begin today</button>
           <button className="btn">See details</button>
        </div>


      </div>
      <div className='right-hero'>
        <button className="btn">Join Now</button>

        <motion.div 
        initial={{right: "3rem"}}
        whileInView={{right:"12rem"}}
        transition={transition}
        className="heart-rate">
          <img src={Heart} alt="" />
          <span>Heart Rate</span><span>115 bpm</span>
        </motion.div>

        {/*hero images*/}
        <img src={hero_image} alt="" className='hero-image' />
        <motion.img 
        initial={{right: '10rem'}}
        whileInView={{right: '19rem'}}
        transition={transition}
        src={field} alt="" className='field' />

        {/*Calories*/}
        <motion.div
        initial={{right:'40rem'}}
        whileInView={{right: '32rem'}}
        transition={{transition}}
         className='calories'>
           <img src={Calories} alt="" />
           <div>
           <span>Calories Burned</span>
           <span>200 kcal</span>
           </div>
        </motion.div>

      </div>
    </div>
  )
}

export default HeroSection
