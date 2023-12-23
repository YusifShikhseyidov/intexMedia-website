import Footer from "../../components/Footer/Footer";
import News from "../../components/News/News";
import NewsSection from "../../components/NewsSection/NewsSection";
import NewsSection2 from "../../components/NewsSection2/NewsSection2";
import OurValue from "../../components/OurValue/OurValue";
import Partners from "../../components/Partners/Partners";
import ProjectsDisplayCarousel from "../../components/ProjectsDisplayCarousel/ProjectsDisplayCarousel";
import classes from "./Home.module.css";
import video0 from "./assets/headerVideo2.mp4";
import video1 from "./assets/headerVideo3.mp4";
import {Fade} from "react-awesome-reveal"

export default function Home() {
  return (
    <div className={classes.homepage}>
      <header className={classes.homepage_header}>
        <div className={classes.headerSectionLeftPart}>
          <Fade direction="left" triggerOnce={true}>
            <video controls>
              <source src={video0} type="video/mp4" />
            </video>
          </Fade>
          <Fade direction="left" delay={500} triggerOnce={true}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
              consequuntur odit nesciunt minima maiores dolor laborum, animi
              numquam beatae asperiores velit quaerat laudantium sit officiis
              facere dolorum ratione sequi laboriosam! Totam iusto, ipsum cum
              excepturi iure exercitationem impedit voluptatum hic
            </p>
          </Fade>
        </div>
        <div className={classes.headerSectionRightPart}>
          <Fade direction="right" triggerOnce={true}>
            <video controls>
              <source src={video1} type="video/mp4" />
            </video>
          </Fade>
          <Fade direction="right" delay={500} triggerOnce={true}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
              consequuntur odit nesciunt minima maiores dolor laborum, animi
              numquam beatae asperiores velit quaerat laudantium sit officiis
              facere dolorum ratione sequi laboriosam! Totam iusto, ipsum cum
              excepturi iure exercitationem impedit voluptatum hic
            </p>
          </Fade>
        </div>
      </header>
      <main>
        <NewsSection />
        <NewsSection />
        <News/>
        <ProjectsDisplayCarousel />
        <NewsSection2 />
        <NewsSection2 />
        <News/>
        <OurValue />
        <Partners />
        <Footer />
      </main>
    </div>
  );
}
