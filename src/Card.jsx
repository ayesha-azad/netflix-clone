import React, { useEffect, useState } from 'react';
import './Card.css';
import { IoCloseSharp } from 'react-icons/io5';

const Card = ({ url, modalBg, title, description, keywords, category }) => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {

    if(isModalOpen){
      document.body.style.overflow = "hidden"
    }
    else{
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "hidden"
    }

  }, [isModalOpen])

  return (
    <>
      <div className="card">
        <img className="card-img" src={url} alt="" onClick={() => setIsModalOpen(true)} />
      </div>

      <div
        className="modal"
        onClick={() => setIsModalOpen(false)}
        style={{ display: isModalOpen ? 'flex' : 'none' }}
      >
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          
          <div className="modal-title-container" style={{ backgroundImage: `linear-gradient(40deg, rgb(22, 22, 22) 24.16%, rgba(6, 10, 23, 0) 56.61%), linear-gradient(0deg, rgb(22, 22, 22) 3.91%, rgba(6, 10, 23, 0) 69.26%), url(${modalBg})` }}>
            <div className="modal-pics-container">
              <img src={category} alt="" className='modal-category'/>
              <img src={title} alt="" className="modal-title" />
            </div>
          </div>

          <div className="modal-body">

            <ul className='keywords-container'>
              {Array.isArray(keywords) && keywords.map((val, key) => (
              <li className='keywords' key={key} style={{fontWeight: "500"}}>{val}</li>
              ))}
            </ul>

            <div className="modal-description">{description}</div>

            <button className="modal-get-started">
              Get Started
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" role="img" viewBox="0 0 24 24" width="24" height="24" data-icon="ChevronRightStandard" aria-hidden="true">
                <path fillRule="evenodd" clipRule="evenodd" d="M15.5859 12L8.29303 19.2928L9.70725 20.7071L17.7072 12.7071C17.8948 12.5195 18.0001 12.2652 18.0001 12C18.0001 11.7347 17.8948 11.4804 17.7072 11.2928L9.70724 3.29285L8.29303 4.70706L15.5859 12Z" fill="currentColor">
                </path>
             </svg>
            </button>

            <p className="modal-message">Create or restart your membership</p>

          </div>

          <div className="close-container">
            <IoCloseSharp color="white" className="close" onClick={() => setIsModalOpen(false)} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
