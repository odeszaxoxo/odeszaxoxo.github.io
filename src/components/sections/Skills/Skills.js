/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';

function Skills() {

  return (
    <div className="section s-skills l-outer-width l-inner-padding"  id="skills">
      <div className="s-skills__content">
        <div className="s-skills__left">
            <h1>
                <span>Skills</span>
            </h1>
            <div className="s-skills__description">
                <p>I am inspired by creating great work with people who are as passionate as I am about building something awesome.</p>
            </div>
        </div>
        <div className="s-skills__right">
          <div className="s-skills__part">
              <div className="s-skills__item">
                  <h2>Web Development</h2>
                  <p>Javascript.</p>
              </div>
              <div className="s-skills__item">
                  <h2>Frontend Development</h2>
                  <p>HTML, CSS, LESS, SASS, Bootstrap, React.js, Gatsby.js, GraphQL, Redux.</p>
              </div>
          </div>
          <div className="s-skills__part">
              <div className="s-skills__item">
                  <h2>Mobile Development</h2>
                  <p>React Native.</p>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
