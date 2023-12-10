import classes from "./NewsSection2.module.css";
import { Link } from "react-router-dom";
import img from "./assets/autumn-road.jpg";

export default function NewsSection2() {
  return (
    <section className={classes.newsSection2}>
      <div className={classes.leftPart}>
        <div className={classes.newsBox}>
          <>
            <div className={classes.imgWrapper}>
              <Link to="#">
                <img src={img} alt="news" />
              </Link>
            </div>

            <time className={classes.timeStamp} dateTime="2023-12-08">
              2023 Dec 08
            </time>

            <Link to="#" className={classes.linkTitle}>
              Hello World
            </Link>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
              modi qui cumque nesciunt eos beatae eaque at similique optio
              assumenda vel minima velit, ad alias unde inventore nobis
              blanditiis delectus...
            </p>
          </>
        </div>
        <div className={classes.newsBox}>
          <>
            <div className={classes.imgWrapper}>
              <Link to="#">
                <img src={img} alt="news" />
              </Link>
            </div>

            <time className={classes.timeStamp} dateTime="2023-12-08">
              2023 Dec 08
            </time>

            <Link to="#" className={classes.linkTitle}>
              Hello World
            </Link>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
              modi qui cumque nesciunt eos beatae eaque at similique optio
              assumenda vel minima velit, ad alias unde inventore nobis
              blanditiis delectus...
            </p>
          </>
        </div>
      </div>
      {/* right part of the news section */}
      <div className={classes.rightPart}>
        <Link to="/">
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit</div>
          <p>05 Dec 2023</p>
        </Link>

        <Link to="/">
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit</div>
          <p>05 Dec 2023</p>
        </Link>

        <Link to="/">
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit</div>
          <p>05 Dec 2023</p>
        </Link>

        <Link to="/">
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit</div>
          <p>05 Dec 2023</p>
        </Link>

        <Link to="/">
          <div>Read more</div>
        </Link>
      </div>
    </section>
  );
}
