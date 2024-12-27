import React, { useRef, useState, useEffect } from "react";
import "./CardSlider.css"
import Headings from './Headings'
import Card from './Card'
import LeftArrow from "./LeftArrow";
import RightArrow from "./RightArrow";

const CardSlider = ({cards, heading}) => {

  const scrollRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const handleScroll = () => {
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
  
    setShowLeftArrow(scrollLeft > 0);
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth);
  };

  const scroll = (direction) => {
    if (direction === "left") {
      scrollRef.current.scrollLeft -= 900;
    } else {
      scrollRef.current.scrollLeft += 900;
    }
  };
  
  useEffect(() => {
    const slider = scrollRef.current;
  
    slider.addEventListener("scroll", handleScroll);
  
    return () => slider.removeEventListener("scroll", handleScroll);
  }, []);  

  return (
    <>
    
    <div className='main-slider-container'>
      <Headings heading={heading}/>

      {showLeftArrow && (
        <div className="arrows-wrapper left">
          <LeftArrow click={() => scroll("left")} />
        </div>
      )}

      <div className="card-slider" ref={scrollRef}>
        {cards.map((card, id) => (
          <Card key={id} url={card.url}
          modalBg={card.modalBg}
          title={card.title}
          description={card.description}
          keywords={card.keywords}
          category={card.category} />
        ))}
      </div>

      {showRightArrow && (
        <div className="arrows-wrapper right">
          <RightArrow click={() => scroll("right")} />
        </div>
      )}
      
    </div>
    </>
  )
}

export default CardSlider
