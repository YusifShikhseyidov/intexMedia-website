import { Link } from "react-router-dom";
import classes from "./Footer.module.css";
import intexMediaLogo from "./assets/intexMediaLogo.jpg";
import { FaMapMarkerAlt } from "react-icons/fa";
import { HiPhone } from "react-icons/hi2";
import { IoIosMail } from "react-icons/io";
import { BiWorld } from "react-icons/bi";

export default function Footer() {
  return (
    <section className={classes.sectionFooter}>
      <div>
        <img src={intexMediaLogo} alt="Intex Media" width={210} height={100} />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet
          reiciendis impedit corporis blanditiis nobis consequuntur
        </p>
      </div>
      <div>
        <h3>Our Services</h3>
        <div>
          <Link to="/">Metal Roofing</Link>
          <Link to="/">Construction Consultant</Link>
          <Link to="/">Green Building</Link>
          <Link to="/">Laminate Flooring</Link>
          <Link to="/">House Renovation</Link>
        </div>
      </div>
      <div>
        <h3>Contact Us</h3>
        <div>
          <span>
            <FaMapMarkerAlt />&nbsp;
            420 Rinehart Road, Miami, Florida, US
          </span>
          <span>
            <HiPhone />&nbsp;
            +61 3 1234 5678
          </span>
          <span>
            <IoIosMail />&nbsp;
            rredheaded@sunnybloginsider.com
          </span>
          <span>
            <BiWorld />&nbsp;
            www.intexmedia.com
          </span>
        </div>
      </div>
    </section>
  );
}
