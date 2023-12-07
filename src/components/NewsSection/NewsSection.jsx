import { Link } from "react-router-dom";
import classes from "./NewsSection.module.css";
import img from "./assets/autumn-road.jpg";

export default function NewsSection() {
  return (
    <section className={classes.newsSection}>
      <div className={classes.leftPart}>
        <div className={classes.newsBox}>
          <>
            <div className={classes.imgWrapper}>
              <Link to="#">
                <img src={img} alt="news" />
              </Link>
            </div>

            <Link to="#" className={classes.linkTitle}>
              Hello World
            </Link>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
              modi qui cumque nesciunt eos beatae eaque at similique optio
              assumenda vel minima velit, ad alias unde inventore nobis
              blanditiis delectus...
            </p>
            <Link to="#" className={classes.readMore}>
              Read More
            </Link>
          </>
        </div>
        <div className={classes.newsBox}>
          <>
            <div className={classes.imgWrapper}>
              <Link to="#">
                <img src={img} alt="news" />
              </Link>
            </div>

            <Link to="#" className={classes.linkTitle}>
              Hello World
            </Link>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
              modi qui cumque nesciunt eos beatae eaque at similique optio
              assumenda vel minima velit, ad alias unde inventore nobis
              blanditiis delectus...
            </p>
            <Link to="#" className={classes.readMore}>
              Read More
            </Link>
          </>
        </div>
      </div>
      {/* right part of the news section */}
      <div className={classes.rightPart}>
        <div>
          <div className={classes.imgWrapperRightPart}>
            <Link to="#">
              <img src={img} alt="news" />
            </Link>
          </div>
          <div>
            <Link to="#">Link</Link>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </div>
        </div>
        <div>
          <div className={classes.imgWrapperRightPart}>
            <Link to="#">
              <img src={img} alt="news" />
            </Link>
          </div>
          <div>
            <Link to="#">Link</Link>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </div>
        </div>
        <div>
          <div className={classes.imgWrapperRightPart}>
            <Link to="#">
              <img src={img} alt="news" />
            </Link>
          </div>
          <div>
            <Link to="#">Link</Link>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </div>
        </div>
        <div>
          <div className={classes.imgWrapperRightPart}>
            <Link to="#">
              <img src={img} alt="news" />
            </Link>
          </div>
          <div>
            <Link to="#">Link</Link>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
