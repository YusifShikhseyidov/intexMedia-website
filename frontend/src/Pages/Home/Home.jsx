import CurrencyRates from "../../components/CurrencyRates/CurrencyRates";
import FeaturedNews from "../../components/FeaturedNews/FeaturedNews";
import FeaturedNewsAside from "../../components/FeaturedNewsAside/FeaturedNewsAside";
import Footer from "../../components/Footer/Footer";
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
        <div>
          <FeaturedNews />
          <FeaturedNewsAside/>
        </div>
      </main>
      <Footer />
    </div>
  );
}
