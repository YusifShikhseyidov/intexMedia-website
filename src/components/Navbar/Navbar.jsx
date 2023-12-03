import { NavLink, Outlet } from "react-router-dom";
import navLogo from "./assets/intexmediaLogo.jpg";
import { navlinks } from "./navLinks";
import classes from "./Navbar.module.css";
import { useEffect, useState } from "react";

function Navbar() {
  const [show, setShow] = useState(false);

  // just for giving empty css class
  const emptyString = "";

  useEffect(()=>{
    const handleOutsideClick = (e) => {
      if(show && !e.target.closest('.donna')){
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
      <nav className={classes.navigationArea}>
        <NavLink to="/" className={classes.logoContainer}>
          <img src={navLogo} alt="logo" />
        </NavLink>
        <div className="donna">
          <div className={`${classes.hamburgerMenu} ${show ? classes.activated : emptyString}`} onClick={() => setShow(!show)}>
            <span className={show ? classes.lineTopSpin : emptyString}></span>
            <span className={show ? classes.lineMiddleSpin : emptyString}></span>
            <span className={show ? classes.lineBottomSpin : emptyString}></span>
          </div>

          <ul className={`${classes.navigationLinksContainer} ${show ? classes.open : emptyString}`}>
            {navlinks.map((navlink, index) => (
              <li key={index} onClick={()=> setShow(!show)}>
                <NavLink to={navlink.path}>{navlink.name}</NavLink>
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
