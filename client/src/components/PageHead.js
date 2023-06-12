import React from 'react'

export default function PageHead() {
    console.log(new Date())
  return (
      <div className="top mb-3">
        <div className="date">Date :12 Jun 2023 </div>
        <div className="week">Week : 24</div>
        <div className="day">Day : Mon</div>
      </div>
  )
}
