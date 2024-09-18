// Write your code here
import {Chrono} from 'react-chrono'
import {Component} from 'react'
import ProjectTimelineCard from '../ProjectTimelineCard'
import CourseTimelineCard from '../CourseTimelineCard'
import './index.css'

class TimelineView extends Component {
  render() {
    const {timelineItemsList} = this.props
    console.log(timelineItemsList)
    return (
      <div className="bg-container">
        <div className="headertext">
          {' '}
          <h1>MY JOURNEY OF CCBP 4.0</h1>
        </div>
        <div>
          <Chrono mode="VERTICAL_ALTERNATING" items={timelineItemsList}>
            {timelineItemsList.map(each =>
              each.categoryId === 'COURSE' ? (
                <CourseTimelineCard key={each.id} item={each} />
              ) : (
                <ProjectTimelineCard key={each.id} item={each} />
              ),
            )}
          </Chrono>
        </div>
      </div>
    )
  }
}

export default TimelineView
