import { Link } from "react-router-dom";
import classes from "./Repairs.module.css";
import { Fade } from "react-awesome-reveal";
import Footer from "../../components/Footer/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
// static image from local
import staticimage from "./assets/staticimage.jpeg";
import RepairspageGridSection from "../../components/RepairspageGridSection/RepairspageGridSection";

export default function Repairs() {
  const [buildingRepairDesigns, setBuildingRepairDesigns] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          "http://localhost:1337/api/repairs-page-design-cards?populate=*",
          {
            headers: {
              Authorization:
                "bearer 0ceec8739059982f87ca01f8fb962709ff5a32526f83090cba257f242e426f99555e4fcb826580fb9a00aed703388be0afce0a68e88866d92b84e50c430b2c0daa8c40997a0b9a61491d00afd89f8ad4039b036530f56fb7edbdd13462a49f005c4179ad18f2426eaae9aed7297bf285786401030b677b195e8c17b0c8191a72",
            },
          }
        );
        setBuildingRepairDesigns(res.data.data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // console.log(buildingRepairDesigns);

  return (
    <>
      <header className={classes.repairsSection_header}>
        <h3 className={classes.header_title}>
          Top Interior Fit-Out Firm in Europe
          <br />
          From A to Z
        </h3>
        <h1 style={{ textAlign: "center", margin: "5rem 0 5rem 0" }}>
          DUBAI-BASED INTERIOR DESIGN COMPANY SERVICES
        </h1>
      </header>
      <main>
        <div className={classes.sectionRepairs}>
          <section className={classes.repairsSectionMain}>
            {error && <div>error occured</div>}  
            {loading && <div>Loading...</div>}
            {!error && !loading &&  buildingRepairDesigns.map((singleInstance) => {
                return singleInstance.id % 2 === 0 ? (
                  <Fade
                    triggerOnce={true}
                    direction="left"
                    key={singleInstance.id}
                  >
                    <div className={classes.designPhotoAndInfoContainer}>
                      <div className={classes.design_info}>
                        <h3>VILLA INTERIOR DESIGN IN GERMANY</h3>
                        <p>
                          Discover Elegance Redefined with Luxury Antonovich
                          Design – Your Premier Interior Design Company in
                          Dubai. Specializing in crafting bespoke villa
                          interiors, we infuse every project with a touch of
                          elegance, sophistication, and an ambiance that is both
                          unique and noble. Our mastery in curating villa
                          interior designs that resonate with Dubai&lsquo;s
                          luxurious ethos is unparalleled. Dedication,
                          innovation, and creativity are the hallmarks of our
                          brand, positioning us as the leading interior designer
                          in Dubai. Embrace the epitome of interior design
                          excellence with Luxury Antonovich Design, where your
                          vision for opulent living becomes a reality.
                        </p>
                        <Link to={`repairs/${singleInstance.id}`}>Explore Service</Link>
                      </div>
                      <div className={classes.imageWrapper}>
                        <img src={staticimage} alt="interior-design" />
                      </div>
                    </div>
                  </Fade>
                ) : (
                  <Fade
                    triggerOnce={true}
                    direction="right"
                    key={singleInstance.id}
                  >
                    <div className={classes.designPhotoAndInfoContainer}>
                      <div className={classes.imageWrapper}>
                        <img src={staticimage} alt="interior-design" />
                      </div>
                      <div className={classes.design_info}>
                        <h3>VILLA INTERIOR DESIGN IN GERMANY</h3>
                        <p>
                          Discover Elegance Redefined with Luxury Antonovich
                          Design – Your Premier Interior Design Company in
                          Dubai. Specializing in crafting bespoke villa
                          interiors, we infuse every project with a touch of
                          elegance, sophistication, and an ambiance that is both
                          unique and noble. Our mastery in curating villa
                          interior designs that resonate with Dubai&lsquo;s
                          luxurious ethos is unparalleled. Dedication,
                          innovation, and creativity are the hallmarks of our
                          brand, positioning us as the leading interior designer
                          in Dubai. Embrace the epitome of interior design
                          excellence with Luxury Antonovich Design, where your
                          vision for opulent living becomes a reality.
                        </p>
                        <Link to={`repairs/${singleInstance.id}`}>Explore Service</Link>
                      </div>
                    </div>
                  </Fade>
                )
              })}
              <RepairspageGridSection/>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
