import { Fade } from "react-awesome-reveal";
import classes from "./About.module.css";
import { info } from "./alumniInfo";

export default function About() {

  return (
    <div>
      <Fade direction="down" triggerOnce={true}>
        <header className={classes.about_page_header}>
          <h1>About Us</h1>
          <span>What We Do and Who We Are</span>
        </header>
      </Fade>

      <Fade direction="down" triggerOnce={true}>
        <article className={classes.about_page_article}>
          <div>
            <img
              src="https://demo.proteusthemes.com/structurepress/wp-content/uploads/sites/28/2015/11/64-300x150.jpg"
              alt="construction"
            />
            <h3>Quality</h3>
            <p>
              Our aim is to continuously exceed the expectations of our client to
              deliver quality construction. Our team members verify all features
              of work.
            </p>
          </div>
          <div>
            <img
              src="https://demo.proteusthemes.com/structurepress/wp-content/uploads/sites/28/2015/11/64-300x150.jpg"
              alt="construction"
            />
            <h3>Quality</h3>
            <p>
              Our aim is to continuously exceed the expectations of our client to
              deliver quality construction. Our team members verify all features
              of work.
            </p>
          </div>
          <div>
            <img
              src="https://demo.proteusthemes.com/structurepress/wp-content/uploads/sites/28/2015/11/16.jpg"
              alt="construction-complete-building"
            />
          </div>
        </article>
      </Fade>

      <Fade direction="down" triggerOnce={true}>
        <article className={classes.about_page_article}>
          <div>
            <img
              src="https://demo.proteusthemes.com/structurepress/wp-content/uploads/sites/28/2015/11/64-300x150.jpg"
              alt="construction"
            />
            <h3>Quality</h3>
            <p>
              Our aim is to continuously exceed the expectations of our client to
              deliver quality construction. Our team members verify all features
              of work.
            </p>
          </div>
          <div>
            <img
              src="https://demo.proteusthemes.com/structurepress/wp-content/uploads/sites/28/2015/11/64-300x150.jpg"
              alt="construction"
            />
            <h3>Quality</h3>
            <p>
              Our aim is to continuously exceed the expectations of our client to
              deliver quality construction. Our team members verify all features
              of work.
            </p>
          </div>
          <div>
            <img
              src="https://demo.proteusthemes.com/structurepress/wp-content/uploads/sites/28/2015/11/28.jpg"
              alt="construction-complete-building"
            />
          </div>
        </article>
      </Fade>

      <section className={classes.about_page_section_employees}>
        {info.map((employee, index) => (
          <Fade key={index} direction="left" cascade={false} triggerOnce={true} delay={index * 200}>
            <div className={classes.employeeContentWrapper}>
              <div className={classes.imageWrapper}>
                <img src={employee.photo} alt={employee.position} />
              </div>
              <span>{employee.position}</span>
              <h3>{employee.name}</h3>
              <p>{employee.about}</p>
            </div>
          </Fade>
        ))}
      </section>
    </div>
  );
}
