import classes from "./Partners.module.css";
import image1 from "./assets/client_01.jpg";
import image2 from "./assets/client_02.jpg";
import image3 from "./assets/client_03.jpg";

export default function Partners() {
  return (
    <section className={classes.partnersSection}>
      <h1>Partners</h1>
      <div>
        <img src={image1} alt="partner" />
        <img src={image1} alt="partner" />
        <img src={image1} alt="partner" />
        <img src={image2} alt="partner" />
        <img src={image3} alt="partner" />
      </div>
    </section>
  );
}
