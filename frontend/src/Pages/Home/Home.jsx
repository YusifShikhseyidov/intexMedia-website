import CurrencyRates from "../../components/CurrencyRates/CurrencyRates";
import Footer from "../../components/Footer/Footer";
import News from "../../components/News/News";
import NewsSection from "../../components/NewsSection/NewsSection";
import NewsSection2 from "../../components/NewsSection2/NewsSection2";
import OurValue from "../../components/OurValue/OurValue";
import Partners from "../../components/Partners/Partners";
import ProjectsDisplayCarousel from "../../components/ProjectsDisplayCarousel/ProjectsDisplayCarousel";
import WeatherInfo from "../../components/WeatherInfo/WeatherInfo";
import classes from "./Home.module.css";

export default function Home() {
  return (
    <div className={classes.homepage}>
      <header className={classes.homepage_header}>
        <CurrencyRates/>
        <WeatherInfo/>
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
