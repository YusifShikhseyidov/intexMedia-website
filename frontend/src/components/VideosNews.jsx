import { Fade } from "react-awesome-reveal"
import { Link } from "react-router-dom"

// this code previously was in home component but then i cut it and pasted as another standalone component in case that i use it
export default function VideosNews() {
  return (

    <div className='Videos'>
      <div className="headerSectionLeftPart">
          <Fade direction="left" triggerOnce={true}>
            <video controls>
              <source src="#" type="video/mp4" />
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
        <div className="headerSectionRightPart">
          <Fade direction="right" triggerOnce={true}>
            <video controls>
              <source src="#" type="video/mp4" />
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
    </div>
  )
}
function Cutcontent(){
  return(
    <>
    
    <Fade direction="up" triggerOnce={true}>
                      <div className={classes.designPhotoAndInfoContainerGrid}>
                        <img
                          src="https://cdn.antonovich-design.ae/uploads/page/2021/11/antonovich-design-thumb2021UAZ2GSAS8KVY.jpeg"
                          alt="exterior-design-example"
                        />
                        <h3>Exterior Design</h3>
                        <Link>Explore Service</Link>
                      </div>
                      <div className={classes.designPhotoAndInfoContainerGrid}>
                        <img
                          src="https://cdn.antonovich-design.ae/uploads/page/2021/11/antonovich-design-thumb2021MoIJbTN4pBur.jpg"
                          alt="exterior-design-example"
                        />
                        <h3>Exterior Design</h3>
                        <Link>Explore Service</Link>
                      </div>
                      <div className={classes.designPhotoAndInfoContainerGrid}>
                        <img
                          src="https://cdn.antonovich-design.ae/uploads/page/2022/5/antonovich-design-thumb2022FhHT60nkPIb2.jpg"
                          alt="exterior-design-example"
                        />
                        <h3>Exterior Design</h3>
                        <Link>Explore Service</Link>
                      </div>
                    </Fade>
                    <Fade direction="up" triggerOnce={true}>
                      <div className={classes.designPhotoAndInfoContainerGrid}>
                        <img
                          src="https://cdn.antonovich-design.ae/uploads/page/2021/11/antonovich-design-thumb2021UAZ2GSAS8KVY.jpeg"
                          alt="exterior-design-example"
                        />
                        <h3>Exterior Design</h3>
                        <Link>Explore Service</Link>
                      </div>
                      <div className={classes.designPhotoAndInfoContainerGrid}>
                        <img
                          src="https://cdn.antonovich-design.ae/uploads/page/2021/11/antonovich-design-thumb2021MoIJbTN4pBur.jpg"
                          alt="exterior-design-example"
                        />
                        <h3>Exterior Design</h3>
                        <Link>Explore Service</Link>
                      </div>
                      <div className={classes.designPhotoAndInfoContainerGrid}>
                        <img
                          src="https://cdn.antonovich-design.ae/uploads/page/2022/5/antonovich-design-thumb2022FhHT60nkPIb2.jpg"
                          alt="exterior-design-example"
                        />
                        <h3>Exterior Design</h3>
                        <Link>Explore Service</Link>
                      </div>
                    </Fade>
                    <Fade direction="up" triggerOnce={true}>
                      <div className={classes.designPhotoAndInfoContainerGrid}>
                        <img
                          src="https://cdn.antonovich-design.ae/uploads/page/2021/11/antonovich-design-thumb2021UAZ2GSAS8KVY.jpeg"
                          alt="exterior-design-example"
                        />
                        <h3>Exterior Design</h3>
                        <Link>Explore Service</Link>
                      </div>
                      <div className={classes.designPhotoAndInfoContainerGrid}>
                        <img
                          src="https://cdn.antonovich-design.ae/uploads/page/2021/11/antonovich-design-thumb2021MoIJbTN4pBur.jpg"
                          alt="exterior-design-example"
                        />
                        <h3>Exterior Design</h3>
                        <Link>Explore Service</Link>
                      </div>
                      <div className={classes.designPhotoAndInfoContainerGrid}>
                        <img
                          src="https://cdn.antonovich-design.ae/uploads/page/2022/5/antonovich-design-thumb2022FhHT60nkPIb2.jpg"
                          alt="exterior-design-example"
                        />
                        <h3>Exterior Design</h3>
                        <Link>Explore Service</Link>
                      </div>
                    </Fade>
                    <Fade direction="up" triggerOnce={true}>
                      <div className={classes.designPhotoAndInfoContainerGrid}>
                        <img
                          src="https://cdn.antonovich-design.ae/uploads/page/2021/11/antonovich-design-thumb2021UAZ2GSAS8KVY.jpeg"
                          alt="exterior-design-example"
                        />
                        <h3>Exterior Design</h3>
                        <Link>Explore Service</Link>
                      </div>
                      <div className={classes.designPhotoAndInfoContainerGrid}>
                        <img
                          src="https://cdn.antonovich-design.ae/uploads/page/2021/11/antonovich-design-thumb2021MoIJbTN4pBur.jpg"
                          alt="exterior-design-example"
                        />
                        <h3>Exterior Design</h3>
                        <Link>Explore Service</Link>
                      </div>
                      <div className={classes.designPhotoAndInfoContainerGrid}>
                        <img
                          src="https://cdn.antonovich-design.ae/uploads/page/2022/5/antonovich-design-thumb2022FhHT60nkPIb2.jpg"
                          alt="exterior-design-example"
                        />
                        <h3>Exterior Design</h3>
                        <Link to={`repairs/${singleInstance.id}`}>
                          Explore Service
                        </Link>
                      </div>
                    </Fade>
    </>
  )
}