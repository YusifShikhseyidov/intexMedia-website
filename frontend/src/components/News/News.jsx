import { Link } from "react-router-dom";
import classes from "./News.module.css";
import {TbArrowBadgeRightFilled} from "react-icons/tb"

export default function News() {
  return (
    <section className={classes.sectionNews}>
      <Link to="/">
        <div>
          More News
        </div>
        <TbArrowBadgeRightFilled />
      </Link>
    </section>
  );
}
