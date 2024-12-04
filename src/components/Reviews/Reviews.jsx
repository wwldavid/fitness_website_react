import React, { useState } from 'react'
import './Reviews.css'
import {reviewData} from "../../data/reviewData"
import leftArrow from '../../assets/leftArrow.png'
import rightArrow from '../../assets/rightArrow.png'
import {motion} from 'framer-motion'

const Reviews = () => {
  
  const transition = { type:"spring", duration:3};
  const [selected, setSelected] = useState(0);
  const length = reviewData.length
   return (
    <div className="reviews" id='reviews'>
      <div className="left-rev">
      <span>Reviews</span>
        <span className="stroke-text">Feedback</span>
        <span>that inspires</span>
        <motion.span 
        key={selected}
        initial={{opacity: 0, x: -300}}
        whileInView={{opacity: 1, x:0}}
        transition={{...transition, duration:4}}
        >{reviewData[selected].review}
        </motion.span>
        <span>
          <span style={{color: "var(--orange"}}>
                {reviewData[selected].name}
          </span>
            -- {reviewData[selected].status}
        </span>
       
      </div>
      
      <div className="right-rev">
      <motion.div
      initial={{opacity: 0, x: -100}}
      whileInView={{opacity: 1, x:0}}
      transition={{...transition, duration:2}}
      ></motion.div>
      <motion.div
      initial={{opacity: 0, x: 100}}
      whileInView={{opacity: 1, x:0}}
      transition={{...transition, duration:2}}
      ></motion.div>
         
         <motion.img 
         key={selected} 
         initial={{opacity: 0, x:100}}
         animate={{opacity: 1, x:0}}
         exit={{opacity: 0, x:-100}}
         transition={transition}
         src={reviewData[selected].image} alt="customer photo"/>
         <div className='arrows'>
            <img 
            onClick={()=>{
              selected===0? setSelected(length - 1) :
              setSelected((prev)=> prev - 1) 
            }}
             src={leftArrow} alt="" />
            <img 
            onClick={()=>{
              selected===(length - 1)? setSelected(0) :
              setSelected((prev)=> prev + 1)
            }}
            src={rightArrow} alt="" />
         </div>

       
      </div>
    </div>
  )
}

export default Reviews
