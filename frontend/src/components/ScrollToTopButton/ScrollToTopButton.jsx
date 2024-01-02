import { useEffect, useState } from 'react';
import classes from './ScrollToTopButton.module.css'
import { SlArrowUp } from "react-icons/sl";

export default function ScrollTopButton() {
  const emptyString = '';

  const [showButton, setShowButton] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior:'smooth'
    })
  }



  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(window.scrollY>600){
        setShowButton(true)
      }else{
        setShowButton(false)
      }
    })
  }, [])

  return (
    <div className={`${classes.scrollupContainer} ${showButton ? classes.show : emptyString}`} onClick={scrollToTop}>
      {showButton && (
        <SlArrowUp className={classes.arrowIcon} />
      )}
    </div>
  )
}
