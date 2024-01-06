import { useState, useEffect } from "react";
import axios from "axios";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import classes from "./RepairspageGridSection.module.css"

export default function RepairspageGridSection() {
  const [buildingRepairDesignsGridSection, setBuildingRepairDesignsGridSection] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          "http://localhost:1337/api/repairs-page-design-card2s?populate=*",
          {
            headers: {
              Authorization:
                "bearer 0ceec8739059982f87ca01f8fb962709ff5a32526f83090cba257f242e426f99555e4fcb826580fb9a00aed703388be0afce0a68e88866d92b84e50c430b2c0daa8c40997a0b9a61491d00afd89f8ad4039b036530f56fb7edbdd13462a49f005c4179ad18f2426eaae9aed7297bf285786401030b677b195e8c17b0c8191a72",
            },
          }
        );
        setBuildingRepairDesignsGridSection(res.data.data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  console.log(buildingRepairDesignsGridSection);

  return (
    <div className={classes.gridDesignElements}>
      {error ? (
        <div>error occured</div>
      ) : loading ? (
        <div>Loading...</div>
      ) : (
        buildingRepairDesignsGridSection.map((singleItem, index) => (
          <Fade direction="up" triggerOnce={true} key={singleItem.id} cascade={false} delay={index*200}>
            <div className={classes.designPhotoAndInfoContainerGrid}>
              <div className={classes.imageWrapper}>
                <img
                  src={`http://localhost:1337${singleItem.attributes.coverPhoto.data.attributes.url}`}
                  alt="exterior-design-example"
                />
              </div>
              <h3>{singleItem.attributes.title}</h3>
              <Link to={`repair/${singleItem.id}`}>Explore Service</Link>
            </div>
          </Fade>
        ))
      )}
    </div>
  );
}
