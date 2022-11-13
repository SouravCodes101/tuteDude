import React from 'react';
import './courseInfo.css'
// UI/UX &gt; Refer & Earn 
const CourseInfo = ({info}) => {
  return (
    <div className="tuteDude__course">
      <div className="tuteDude__course-info">
      <p>{info}</p>
      </div>
    </div>
  )
}

export default CourseInfo