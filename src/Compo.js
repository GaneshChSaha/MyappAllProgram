import React from "react";
import './Compo.css';
import img1 from './Image/img11.jpg'
import img2 from './Image/img12.jpg'
import img3 from './Image/img13.jpg'

export const Compo = () => {
  return (
    <div>
      <div className="ui-container-comments">
      
        <div className="comment">
          <a href="/" className="avatar">
            <img src={img1} alt="avatar" />
          </a>
          <div className="content">
         
            <a href="/" className="author">
              Ganesh
            </a>
            <div className="metadata">
              <span className="date">Today at 6:00pm</span>
            </div>
            <div className="text">Nice Work</div>
          </div>
        </div>

        <div className="comment">
          <a href="/" className="avatar">
            <img src={img2} alt="avatar" />
          </a>
          <div className="content">
         
            <a href="/" className="author">
              Rahul
            </a>
            <div className="metadata">
              <span className="date">Today at 6:00pm</span>
            </div>
            <div className="text">Nice Job!</div>
          </div>
        </div>

        <div className="comment">
          <a href="/" className="avatar">
            <img src={img3} alt="avatar" />
          </a>
          <div className="content">
         
            <a href="/" className="author">
              Rahul
            </a>
            <div className="metadata">
              <span className="date">Today at 6:00pm</span>
            </div>
            <div className="text">Nice Work Dude!</div>
          </div>
        </div>
      </div>
    </div>
  );
};
