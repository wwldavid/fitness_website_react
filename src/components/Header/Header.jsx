import React, {useState} from 'react'
import './Header.css'
import Logo from '../../assets/logo2.png'
import Bars from '../../assets/bars.png'
import { Link } from "react-scroll"

const Header = () => {
  
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false)

  return (
    <div>
         <div className='header'>
          <img className='logo' src={Logo} alt="logo" />
          {menuOpened === false && mobile === true ? (
            <div
            style={{backgroundColor: 'var(--appColor)', 
            padding: '0.5rem', borderRadius: "5px",
            }}
              onClick={()=> setMenuOpened(true)}
            >
               <img src={Bars} alt="bar icon" 
               style={{width: '1.5rem', height: '1.5rem'}} />
            </div>
          ): (
            <ul className='header-menu'>
               <li onClick={()=>setMenuOpened(false)}>
                <Link
                to='hero'
                span={true}
                smooth={true}
                >Home</Link>
                </li>
               <li onClick={()=>setMenuOpened(false)}>
               <Link
                to='highlight'
                span={true}
                smooth={true}
                >Highlights</Link>
               </li>
               <li onClick={()=>setMenuOpened(false)}>
                <Link
                to='price'
                span={true}
                smooth={true}
                >Pricing</Link>
                </li>
               <li onClick={()=>setMenuOpened(false)}>
                <Link
                to='programs'
                span={true}
                smooth={true}
                >Programs</Link>
                </li>
               <li onClick={()=>setMenuOpened(false)}>
               <Link
                to='reviews'
                span={true}
                smooth={true}
                >Success Stories</Link>
               </li>
               <li onClick={()=>setMenuOpened(false)}>
               <Link
                to='signup'
                span={true}
                smooth={true}
                >Sign Up</Link>
               </li>
            </ul>
          )}
          
         </div>
    </div>
  )
}

export default Header
