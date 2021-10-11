import React, { useState, useEffect } from 'react';
import Logo from '../assets/albicod.webp';
import Typewriter from 't-writer.js'
import { 
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineGithub,
  AiOutlineWhatsApp
} from "react-icons/ai";

//Css
import './assets/css/About.scss';

function Page(props) { 
  //const traduction
  const { t } = props.translation();

  const textLogo = t('Quality and commitment always!');
  const textAbout = t('We are a website, blog, systems, portfolio development agency and we aim to develop websites with the best technologies on the market to make your website faster and more intuitive. Quality development is essential both to speed up your earnings processes and to organize your company. The development of a website will definitely help to spread your brand more efficiently. Our development focuses on giving the best experience to both your users and you make a budget right now and have the best cost benefit in creating your website, have a professional and fully responsive website. Want a quality website? ALBICOD has it for you.');

  useEffect(()=> {
    toTypeH1();
    document.querySelector('.page').classList.remove('opacity-page');
  },[])

  function toTypeH1() {
    let target = document.querySelector('.textLogo');
    let options = {
      loop: true,
      animateCursor: true,
      typeColor: 'white',
      cursorColor: 'white'
    }
    let writer = new Typewriter(target, options);
    writer
      .type(textLogo)
      .rest(1000)
      .start()
  }

  return (
    <div className="page opacity-page">
      <div className="container">
        <div className="container-left">
          <img className="logo" src={Logo} alt={textLogo} />
          <i>
            <h1 className="textLogo"></h1>
          </i>
          <i>
            <h3 className="type-page">{t('About')}</h3>
          </i>
        </div>
        <div className="container-right">
          <div className="content-about">
            <div className="text-about">
              <i>{textAbout}</i>
            </div>
          </div>
          <div className="border-efect"></div>
        </div>
      </div>
    </div>
  );
}

export default Page;