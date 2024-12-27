import React from 'react'
import "./LeftArrow.css"

const LeftArrow = ({click}) => {
  return (
    <div>
      <button className="previous" onClick={click}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" role="img" viewBox="0 0 24 24" width="24" height="24" data-icon="ChevronLeftStandard" aria-hidden="true">
            <path fillRule="evenodd" clipRule="evenodd" d="M8.41409 12L15.707 19.2928L14.2928 20.7071L6.29277 12.7071C6.10523 12.5195 5.99988 12.2652 5.99988 12C5.99988 11.7347 6.10523 11.4804 6.29277 11.2928L14.2928 3.29285L15.707 4.70706L8.41409 12Z" fill="currentColor"></path>
        </svg>
    </button>
    </div>
  )
}

export default LeftArrow
