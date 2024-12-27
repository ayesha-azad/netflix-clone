import React, { useState } from 'react';
import "./Accordion.css";
import { FaPlus } from "react-icons/fa6";
import { IoCloseSharp } from 'react-icons/io5';

const Accordion = ({ question, answer, handleToggle, isOpen }) => {

  return (
    <>
      <button className="accordion-btn" onClick={handleToggle}>
        {question}
        <span className="accordion-icon-wrapper">
          {isOpen ? (
            <IoCloseSharp className='cross' size={30} />
          ) : (
            <FaPlus className='plus' size={24} />
          )}
        </span>
      </button>

        <div className={`accordion-data ${isOpen ? "show" : ""}`}>
          {answer.map((value, id) => (
            <p key={id}>
              {value}
              {id < answer.length - 1 && <span><br /> <br /></span> }
            </p>
          ))}
        </div>
    </>
  );
};

export default Accordion;
