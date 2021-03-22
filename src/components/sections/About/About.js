/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState } from 'react';
import Modal from '../../Modal/Modal';

function About() {
  const [isModalOpened, setModalOpened] = useState(false);

  return (
    <div className="section s-about l-outer-width l-inner-padding"  id="about">
      <div className="s-about__content">
        <div className="s-about__left">
          <h1>
            <span>I am Denis Korneev</span>
          </h1>
          <div className="s-about__description">
            <p>I am a Web Developer located in Sochi, Russia. I currently work as a part time Remote Junior Web Developer. I am looking to take on more work and to increase my skills as a Web Developer.</p>
          </div>
          <div className="s-about__info">
            <p>
              <span>Phone</span>
              <span>+7-927-226-10-46</span>
            </p>
            <p>
              <span>Email</span>
              <span>krnvdns@outlook.com</span>
            </p>
            <p>
              <span>Adress</span>
              <span>Russia, Sochi, Gospital'naya 28, 3, 354008</span>
            </p>
            <p>
              <span>Socials</span>
              <span className="s-about__socials">
                <a href="#" className="s-about__social"><img src="/svg/vk.svg" alt="#"/></a>
                <a href="#" className="s-about__social"><img src="/svg/instagram.svg" alt="#"/></a>
                <a href="#" className="s-about__social"><img src="/svg/alpha-f-box.svg" alt="#"/></a>
                <a href="#" className="s-about__social"><img src="/svg/linkedin.svg" alt="#"/></a>
                <a href="#" className="s-about__social"><img src="/svg/github.svg" alt="#"/></a>
              </span>
            </p>
            <div className="s-about__buttons">
              <button className="s-about__toggle button" onClick={() => setModalOpened(true)} href="#">Contact Me</button>
              <Modal show={isModalOpened} closeModal={() => setModalOpened(false)}></Modal>
            </div>
          </div>
        </div>
        <div className="s-about__right">
          <img className="s-about__image" alt="#" src="/svg/coding.svg"/>
        </div>
      </div>
    </div>
  );
}

export default About;
