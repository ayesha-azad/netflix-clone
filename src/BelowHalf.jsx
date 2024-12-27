import React from 'react'
import "./BelowHalf.css"
import ReasonsCardsContainer from './ReasonsCardsContainer'
import AccordionContainer from './AccordionContainer'
import GetStarted from './GetStarted'
import Footer from './Footer'

const BelowHalf = () => {
  return (
    <div className='main-below-container'>
      <ReasonsCardsContainer />
      <AccordionContainer />
      <GetStarted />
      <Footer />
    </div>
  )
}

export default BelowHalf
