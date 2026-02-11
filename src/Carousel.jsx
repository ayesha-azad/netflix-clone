import React, { useEffect, useState } from "react";
import "./Carousel.css";
import { FaPause, FaPlay } from "react-icons/fa";
import LeftArrow from "./LeftArrow";
import RightArrow from "./RightArrow";

const Carousel = ({carousel_data, updateBackground, updateOverlay}) => {

    const [index, setIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [isPlaying, setIsPlaying] = useState(true);

    const animateSlide = () => {
        setIsAnimating(true);
        setTimeout(() => setIsAnimating(false), 400);
    };

    const togglePlay = () => {
      setIsPlaying(!isPlaying);
    }
    
    const backgroundColorChange = (index) => {
      const firstMainColor = 'rgba(38, 23, 32, 0.8)';
      const secondMainColor = 'rgba(0, 0, 0, 0.5)';
      const mainBackgroundOverlay = index === 0 ? firstMainColor : secondMainColor;
      return mainBackgroundOverlay;
    }

    let backgroundOverlay = index === 0 ?  {backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.40) 30%, rgba(0, 0, 0, 0.90) 65%,  rgba(102, 62, 71, 0.8) 100%), url(${carousel_data[index].url})`} : {backgroundImage : `linear-gradient(180deg, rgba(0, 0, 0, 0.50) 80%,  rgba(128, 128, 128, 0.3) 100%), url(${carousel_data[index].url})`};

    const carouselItemStyles = {
          height: "74vh",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          borderRadius : "1rem",
          margin: "0.17rem 0 0 0.17rem",
          backgroundSize: "cover", 
    }

    const combinedCarouselStyles = {...backgroundOverlay, ...carouselItemStyles}

    const goToPrevious = () => {
      const isFirstSlide = index === 0;
      const previousSlide = isFirstSlide ? carousel_data.length - 1 : index - 1;
      setIndex(previousSlide);
      animateSlide();
      updateBackground(carousel_data[previousSlide].url);
      updateOverlay(backgroundColorChange(previousSlide));
    }

    const goToNext = () => {
      const isLastSlide = index === carousel_data.length - 1;
      const nextSlide = isLastSlide ? 0 : index+1;
      setIndex(nextSlide);
      animateSlide();
      updateBackground(carousel_data[nextSlide].url);
      updateOverlay(backgroundColorChange(nextSlide));
    }

    const gotoSlide = (index) => {
      setIndex(index);
      animateSlide();
      setIsPlaying(false);
      updateBackground(carousel_data[index].url);
      updateOverlay(backgroundColorChange(index));
    }

    useEffect(() => {
      let interval; 
      if(isPlaying){
        interval = setInterval(() => {
          goToNext()
        }, 7000)
      }
      else{
        clearInterval(interval)
      }
      return () => clearInterval(interval); 
    }, [isPlaying, index])

  return (
    <>

    <svg xmlns="http://www.w3.org/2000/svg" width="0" height="0">
    <defs>
      <mask id="mask-path" maskUnits="objectBoundingBox" maskContentUnits="objectBoundingBox">
        <path d="M 0,0 L 0,1 Q 0.08,0.92 0.92,0.97 Q 0.97,0.98 1,1 L 1,0 Z" fill="white"/>
      </mask>
    </defs>
  </svg>

  <div className="carousel">
    <div className={`${isAnimating ? "fade-img" : ""}`} style={combinedCarouselStyles}></div>

    <LeftArrow click={() => {
      goToPrevious();
      setIsPlaying(false);
    }}/>

    <RightArrow click={() => {
      goToNext();
      setIsPlaying(false);
    }}/>

    {index === 0 && (
        <div className="first-slide">
            <h1 className={`first-title ${isAnimating ? "fade-in" : ""}`}>{carousel_data[index].title}</h1>
            <p className={`price ${isAnimating ? "fade-in" : ""}`}>{carousel_data[index].price}</p>
        </div>
    )}
    {index !== 0 && (
      <div>
      <div className="upper-slide-container">  

        <p className={`category ${isAnimating ? "fade-in" : ""}`}>
          <img src={carousel_data[index].category} alt="Icon" className="category-icon"/>
        </p>

        <img src={carousel_data[index].name} className={`name ${isAnimating ? "fade-in" : ""}`} />

      </div>

      <div className={`lower-slide-container ${isAnimating ? "fade-in" : ""}`}>
        <ul className="keywords-container">
          {carousel_data[index].keywords.map((val, key) => (
            <li className="keywords" key={key}>{val}</li>
          ))}
        </ul>
        <p className="description">{carousel_data[index].description}</p>
      </div>
      
      </div>
    )}
  </div>

  <div className="carousel-controls">

      <button className="carousel-btns" onClick={togglePlay}>
        {isPlaying ? <FaPause color="white"/> : <FaPlay color="white"/>}
      </button>

      {carousel_data.map((val, btnIdx) => (
        <button className={`carousel-lines ${btnIdx === index ? 'active' : ''} ${btnIdx === index && isPlaying ? 'play' : ''}` } key={btnIdx} onClick={() => gotoSlide(btnIdx)}></button>
      ))}
      
  </div>

    
    </>
  );
};

export default Carousel;
