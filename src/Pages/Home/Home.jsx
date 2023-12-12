import Slide from "react-reveal/Slide"
import Footer from "../../components/Footer/Footer";
import NewsSection from "../../components/NewsSection/NewsSection";
import NewsSection2 from "../../components/NewsSection2/NewsSection2";
import OurValue from "../../components/OurValue/OurValue";
import Partners from "../../components/Partners/Partners";
import ProjectsDisplayCarousel from "../../components/ProjectsDisplayCarousel/ProjectsDisplayCarousel";
import classes from "./Home.module.css";
import video0 from "./assets/headerVideo2.mp4";
import video1 from "./assets/headerVideo3.mp4";

export default function Home() {
  return (
    <div className={classes.homepage}>
      <header>
        <div className={classes.headerSectionLeftPart}>
          <Slide left big>
            <video width={592} height={333} controls>
              <source src={video0} type="video/mp4" />
            </video>
          </Slide>
          <Slide left delay={1000} big>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
              consequuntur odit nesciunt minima maiores dolor laborum, animi
              numquam beatae asperiores velit quaerat laudantium sit officiis
              facere dolorum ratione sequi laboriosam! Totam iusto, ipsum cum
              excepturi iure exercitationem impedit voluptatum hic
            </p>
          </Slide>
        </div>
        <div className={classes.headerSectionRightPart}>
          <Slide right big>
            <video width={592} height={333} controls>
              <source src={video1} type="video/mp4" />
            </video>
          </Slide>
          <Slide right big delay={1000}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
              consequuntur odit nesciunt minima maiores dolor laborum, animi
              numquam beatae asperiores velit quaerat laudantium sit officiis
              facere dolorum ratione sequi laboriosam! Totam iusto, ipsum cum
              excepturi iure exercitationem impedit voluptatum hic
            </p>
          </Slide>
        </div>
      </header>
      <main>
        <NewsSection />
        <ProjectsDisplayCarousel />
        <NewsSection2 />
        <OurValue />
        <Partners />
        <Footer />
      </main>
    </div>
  );
}
