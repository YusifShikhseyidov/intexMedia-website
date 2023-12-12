import { useState } from "react";
import { Link } from "react-router-dom";
import { links } from "../../components/ProjectsDisplayCarousel/links";
import classes from "./Designs.module.css";

export default function Designs() {
  const emptyString = "";

  const [selectedLink1, setSelectedLink1] = useState(links[0].pathUrl);
  const [selectedContent1, setSelectedContent1] = useState(links[0].imgs);


  const handleClick = (link) => {
    // Set the selected link and content to the clicked link and its content
    setSelectedLink1(link.pathUrl);
    setSelectedContent1(link.imgs);
  };

  return (
    <section className={classes.sectionDesigns}>
      <div className={classes.upperLinksSection}>
        {/* Loop through the links array and render a button for each link */}
        {links.map((link) => (
          <button
            key={link.pathName}
            // Add a class name to the selected link for styling
            className={`${classes.upperSectionBtns} ${
              selectedLink1 === link.pathUrl ? classes.selected : emptyString
            }`}
            // Call the handleClick function with the link as argument
            onClick={() => handleClick(link)}
          >
            {link.pathName}
          </button>
        ))}
      </div>
      {/* Render the content below */}
      <div className={classes.lowerDesignsSection}>
        {selectedContent1.map((content, index) => (
          <Link to="/" key={index}>
            <div>
              <img src={content} alt="alternative" />
              <div>
                <span>Project Name</span>
                <span>lorem ipsum</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
