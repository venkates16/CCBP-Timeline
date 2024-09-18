// Write your code here
// Write your code here
import {AiFillCalendar} from 'react-icons/ai'
import {FaLongArrowAltRight} from 'react-icons/fa'
import './index.css'

const ProjectTimelineCard = props => {
  const {item} = props
  const {projectTitle, description, imageUrl, duration, projectUrl} = item
  return (
    <div className="projectsCard">
      <div>
        <img src={imageUrl} className="imgUrl" alt="project" />
        <div className="title">
          <h1>{projectTitle}</h1>
          <p className="clockdiv">
            {' '}
            <AiFillCalendar className="imgClock" />
            <p>{duration}</p>
          </p>
        </div>
        <p>{description}</p>

        <div className="cardArrow">
          {' '}
          <a href={projectUrl} target="_blank" className="visitProjectlink">
            Visit
          </a>
          <FaLongArrowAltRight className="arrow" />
        </div>
      </div>
    </div>
  )
}

export default ProjectTimelineCard
