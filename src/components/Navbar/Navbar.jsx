import { NavLink, Outlet } from "react-router-dom";
import navLogo from "./assets/index-media-logo.png";
import { navlinks } from "./navLinks";
import "./Navbar.css";
import { useEffect, useState } from "react";

function Navbar() {
  const [show, setShow] = useState(false);

  useEffect(()=>{
    const handleOutsideClick = (e) => {
      if(show && !e.target.closest('.keeper')){
        setShow(!show)
      }
    }

    window.addEventListener('click', handleOutsideClick)

    return ()=>{
      window.removeEventListener('click', handleOutsideClick)
    }
  },[show])

  return (
    <>
      <nav className='navigationArea'>
        <NavLink to="/" className='logoContainer'>
          <img src={navLogo} alt="logo" />
        </NavLink>
        <div className='keeper'>
          <div className={`hamburgerMenu ${show ? 'activated' : ''}`} onClick={() => setShow(!show)}>
            <span className={show ? 'lineTopSpin' : ''}></span>
            <span className={show ? 'lineMiddleSpin' : ''}></span>
            <span className={show ? 'lineBottomSpin' : ''}></span>
          </div>

          <ul className={`navigationLinksContainer ${show ? 'open' : ''}`}>
            {navlinks.map((navlink, index) => (
              <li key={index} onClick={()=> setShow(!show)}>
                <NavLink to={navlink.path} 
                  className={({isActive})=> isActive ? 'active' : ''}
                >{navlink.name}</NavLink>
              </li>
            ))}
          </ul>
        </div>

        
      </nav>

      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Navbar;
