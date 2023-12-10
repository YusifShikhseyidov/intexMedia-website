import DailyNews from "../../components/DailyNews/DailyNews";
import NewsSection from "../../components/NewsSection/NewsSection";
import NewsSection2 from "../../components/NewsSection2/NewsSection2";
import OurValue from "../../components/OurValue/OurValue";
import ProjectsDisplayCarousel from "../../components/ProjectsDisplayCarousel/ProjectsDisplayCarousel";
import classes from "./Home.module.css";
import video0 from "./assets/headerVideo2.mp4";
import video1 from "./assets/headerVideo3.mp4";

export default function Home() {
  return (
    <div className={classes.homepage}>
      <header>
        <div className={classes.headerSectionLeftPart}>
          <video width={592} height={333} controls>
            <source src={video0} type="video/mp4" />
          </video>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
            consequuntur odit nesciunt minima maiores dolor laborum, animi
            numquam beatae asperiores velit quaerat laudantium sit officiis
            facere dolorum ratione sequi laboriosam! Totam iusto, ipsum cum
            excepturi iure exercitationem impedit voluptatum hic
          </p>
        </div>
        <div className={classes.headerSectionRightPart}>
          <video width={592} height={333} controls>
            <source src={video1} type="video/mp4" />
          </video>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
            consequuntur odit nesciunt minima maiores dolor laborum, animi
            numquam beatae asperiores velit quaerat laudantium sit officiis
            facere dolorum ratione sequi laboriosam! Totam iusto, ipsum cum
            excepturi iure exercitationem impedit voluptatum hic
          </p>
        </div>
      </header>
      <main>
        <NewsSection />
        <ProjectsDisplayCarousel />
        <NewsSection2/>
        <OurValue/>
        <DailyNews/>
      </main>
    </div>
  );
}
