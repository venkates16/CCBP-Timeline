// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {item} = props
  const {courseTitle, description, duration, tagsList} = item

  return (
    <div className="courseCard">
      <div className="title">
        <h1>{courseTitle}</h1>
        <div className="clockdiv">
          <AiFillClockCircle className="imgClock" />
          {duration}
        </div>
      </div>

      <p>{description}</p>
      <div className="contentEach">
        {' '}
        {tagsList.map(each => (
          <p key={each.id} className="texteach">
            {each.name}
          </p>
        ))}
      </div>
    </div>
  )
}

export default CourseTimelineCard
