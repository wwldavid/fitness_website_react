import React from 'react'
import './Highlights.css'
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import nb from "../../assets/nb.png";
import adidas from "../../assets/adidas.png";
import nike from "../../assets/nike.png";
import tick from "../../assets/tick.png";

const Highlights = () => {
  return (
    <div className="highlight" id="highlight">
        <div className="left-highlight">
          <img src={image1} alt="" />
          <img src={image3} alt="" />
          <img src={image4} alt="" />
          <img src={image2} alt="" />
        </div>
        <div className="right-highlight">
           <span>some reasons</span>

           <div>
            <span className='stroke-text'>Reasons</span>
            <span> to choose us</span>
           </div>
             
          <div className='promotion'>
              <div>
                 <img src={tick} alt="" />
                 <span>A team of over 20 expert coaches</span>
              </div>
              <div>
                 <img src={tick} alt="" />
                 <span>Train more efficiently and quickly than ever before</span>
              </div>
              <div>
                 <img src={tick} alt="" />
                 <span>Enjoy the first 2 months free as a new member
                 </span>
              </div>
              <div>
                 <img src={tick} alt="" />
                 <span>Faithful partners</span>
              </div>
          </div>
           <span style={{
            color:"var(--gray",
            fontWeight: "normal",
           }}>
              Our partiners
           </span>

           <div className="partners">
            <img src={nb} alt="" />
            <img src={adidas} alt="" />
            <img src={nike} alt="" />
            </div>


        </div>
    </div>
  )
}

export default Highlights

