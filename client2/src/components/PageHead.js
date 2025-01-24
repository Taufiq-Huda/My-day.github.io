import React from 'react'

export default function PageHead() {
  let today = new Date();
  today = today.toString().split(" ")

  return (
      <div className="top mb-3">
        <div className="date">Date :{`${today[2]} ${today[1]} ${today[3]}`} </div>
        <div className="week">Week : 24</div>
        <div className="day">Day : {today[0]}</div>
      </div>
  )
}
