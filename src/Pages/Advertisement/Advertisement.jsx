import { Link } from "react-router-dom";
import classes from "./Advertisement.module.css";
import { Fade } from "react-awesome-reveal";

export default function Advertisement() {
  return (
    <div className={classes.sectionAdvertisement}>
      <div className={classes.sectionAdvertisement_header}>
        <h1>Advertisement</h1>
      </div>
      <section className={classes.gridDesignAdvertisementElements}>
        <Fade direction="up" triggerOnce={true}>
          <div className={classes.designPhotoAndInfoContainerGrid}>
            <img
              src="https://cdn.antonovich-design.ae/uploads/page/2021/11/antonovich-design-thumb2021UAZ2GSAS8KVY.jpeg"
              alt="exterior-design-example"
            />
            <h3>Exterior Design</h3>
            <Link>Explore Service</Link>
          </div>
          <div className={classes.designPhotoAndInfoContainerGrid}>
            <img
              src="https://cdn.antonovich-design.ae/uploads/page/2021/11/antonovich-design-thumb2021MoIJbTN4pBur.jpg"
              alt="exterior-design-example"
            />
            <h3>Exterior Design</h3>
            <Link>Explore Service</Link>
          </div>
          <div className={classes.designPhotoAndInfoContainerGrid}>
            <img
              src="https://cdn.antonovich-design.ae/uploads/page/2022/5/antonovich-design-thumb2022FhHT60nkPIb2.jpg"
              alt="exterior-design-example"
            />
            <h3>Exterior Design</h3>
            <Link>Explore Service</Link>
          </div>
        </Fade>
        <Fade direction="up" triggerOnce={true}>
          <div className={classes.designPhotoAndInfoContainerGrid}>
            <img
              src="https://cdn.antonovich-design.ae/uploads/page/2021/11/antonovich-design-thumb2021UAZ2GSAS8KVY.jpeg"
              alt="exterior-design-example"
            />
            <h3>Exterior Design</h3>
            <Link>Explore Service</Link>
          </div>
          <div className={classes.designPhotoAndInfoContainerGrid}>
            <img
              src="https://cdn.antonovich-design.ae/uploads/page/2021/11/antonovich-design-thumb2021MoIJbTN4pBur.jpg"
              alt="exterior-design-example"
            />
            <h3>Exterior Design</h3>
            <Link>Explore Service</Link>
          </div>
          <div className={classes.designPhotoAndInfoContainerGrid}>
            <img
              src="https://cdn.antonovich-design.ae/uploads/page/2022/5/antonovich-design-thumb2022FhHT60nkPIb2.jpg"
              alt="exterior-design-example"
            />
            <h3>Exterior Design</h3>
            <Link>Explore Service</Link>
          </div>
        </Fade>
        <Fade direction="up" triggerOnce={true}>
          <div className={classes.designPhotoAndInfoContainerGrid}>
            <img
              src="https://cdn.antonovich-design.ae/uploads/page/2021/11/antonovich-design-thumb2021UAZ2GSAS8KVY.jpeg"
              alt="exterior-design-example"
            />
            <h3>Exterior Design</h3>
            <Link>Explore Service</Link>
          </div>
          <div className={classes.designPhotoAndInfoContainerGrid}>
            <img
              src="https://cdn.antonovich-design.ae/uploads/page/2021/11/antonovich-design-thumb2021MoIJbTN4pBur.jpg"
              alt="exterior-design-example"
            />
            <h3>Exterior Design</h3>
            <Link>Explore Service</Link>
          </div>
          <div className={classes.designPhotoAndInfoContainerGrid}>
            <img
              src="https://cdn.antonovich-design.ae/uploads/page/2022/5/antonovich-design-thumb2022FhHT60nkPIb2.jpg"
              alt="exterior-design-example"
            />
            <h3>Exterior Design</h3>
            <Link>Explore Service</Link>
          </div>
        </Fade>
        <Fade direction="up" triggerOnce={true}>
          <div className={classes.designPhotoAndInfoContainerGrid}>
            <img
              src="https://cdn.antonovich-design.ae/uploads/page/2021/11/antonovich-design-thumb2021UAZ2GSAS8KVY.jpeg"
              alt="exterior-design-example"
            />
            <h3>Exterior Design</h3>
            <Link>Explore Service</Link>
          </div>
          <div className={classes.designPhotoAndInfoContainerGrid}>
            <img
              src="https://cdn.antonovich-design.ae/uploads/page/2021/11/antonovich-design-thumb2021MoIJbTN4pBur.jpg"
              alt="exterior-design-example"
            />
            <h3>Exterior Design</h3>
            <Link>Explore Service</Link>
          </div>
          <div className={classes.designPhotoAndInfoContainerGrid}>
            <img
              src="https://cdn.antonovich-design.ae/uploads/page/2022/5/antonovich-design-thumb2022FhHT60nkPIb2.jpg"
              alt="exterior-design-example"
            />
            <h3>Exterior Design</h3>
            <Link>Explore Service</Link>
          </div>
        </Fade>
      </section>
    </div>
  );
}
