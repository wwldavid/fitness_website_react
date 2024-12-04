import React from 'react'
import './Programs.css'
import {programsData} from '../../data/programsData'
import Arrow from '../../assets/arrow.png'

const Programs = () => {
  return (
      <div className="Programs" id="programs">
         <div className="programs-header">
           <span className='stroke-text'>Step into</span>
           <span>a program </span>
           <span className='stroke-text'>that shapes your future</span>
         </div>

         <div className="program-options">
          {programsData.map((program, index)=>(
            <div className="options" key={index}>
              {program.image}
              <span>{program.heading}</span>
              <span>{program.details}</span>
              <div className="join-now"><span>Join Now</span><img src={Arrow} alt="" /></div>
            </div>
          ))}
         </div>
      </div>
  )
}

export default Programs
