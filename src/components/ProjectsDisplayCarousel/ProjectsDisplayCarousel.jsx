import { useState } from "react";
import { links } from "./links";
import classes from "./ProjectsDisplayCarousel.module.css";

export default function ProjectsDisplayCarousel() {
  const emptyString = "";
  // Use state to keep track of the selected link and its content
  const [selectedLink, setSelectedLink] = useState(links[0].pathUrl);
  const [selectedContent, setSelectedContent] = useState(links[0].imgs);

  // Define a function to handle the click event on each link
  const handleClick = (link) => {
    // Set the selected link and content to the clicked link and its content
    setSelectedLink(link.pathUrl);
    setSelectedContent(link.imgs);
  };

  return (
    <div className={classes.projectsDisplayCarousel}>
      <div className={classes.linksSection}>
        {/* Loop through the links array and render a button for each link */}
        <div className={classes.upperSection}>
          {links.map((link) => (
            <button
              key={link.pathName}
              // Add a class name to the selected link for styling
              className={`${classes.upperSectionBtns} ${selectedLink === link.pathUrl ? classes.selected : emptyString}`}
              // Call the handleClick function with the link as argument
              onClick={() => handleClick(link)}
            >
              {link.pathName}
            </button>
          ))}
        </div>
        {/* <hr style={{backgroundColor: "red"}} /> */}
        <br />
        {/* Render the selected content in the lower section */}
        <div className={classes.lowerSection}>
          {selectedContent.map((content, index) => (
            <a href="/" key={index}>
              <div>
                <img src={content} alt="alternative" />
                <div>
                  <a href="/">Project Name</a>
                  <span>lorem ipsum</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}