import { Link } from "react-router-dom";
import classes from "./News.module.css";

export default function News() {
  return (
    <section className={classes.sectionNews}>
      <Link>
        <div>
          More News
        </div>
      </Link>
    </section>
  );
}
