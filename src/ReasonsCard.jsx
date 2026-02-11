import React from 'react'
import "./ReasonsCard.css"

const ReasonsCard = ({text, icon}) => {
  return (
    <>
     <div className="custom-card">
      <p className="card-text">{text}</p>
      <div className="icon-wrapper">
        {icon}
      </div>
    </div> 
    </>
  )
}

export default ReasonsCard
