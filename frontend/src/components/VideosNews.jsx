import { Fade } from "react-awesome-reveal"

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
