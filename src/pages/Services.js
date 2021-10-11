import React, { useState, useEffect } from 'react';
import Logo from '../assets/albicod.webp';
import Typewriter from 't-writer.js'

import { FaSitemap, FaBloggerB, FaIdCard, FaOpencart, FaMoneyCheck } from "react-icons/fa";
import { DiWebplatform } from "react-icons/di";

import Component from "../components/CardService";

//Css
import './assets/css/Service.scss';

function Page(props) { 
  //const traduction
  const { t } = props.translation();
  const textLogo = t('Quality and commitment always!');

  useEffect(()=> {
    toTypeH1();
    document.querySelector('.page').classList.remove('opacity-page');
  },[])

  /**
   * function efect text h1
   */
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
            <h3 className="type-page">{t('Services')}</h3>
          </i>
        </div>
        <div className="container-right">
          <div className="content-service">
            <div className="text-service">
              <div className="title-service"><i>{t('What do you need?')}</i></div>
              <div className="container">
                <Component icon={FaSitemap} text={t('Site')} />
                <Component icon={FaBloggerB} text={t('Blog')} />
                <Component icon={FaIdCard} text={t("Portfolio")} />
                <Component icon={DiWebplatform} text={t("Custom Web System")} />
                <Component icon={FaOpencart} text={t("E-Commerce")} />
                <Component icon={FaMoneyCheck} text={t("Landing Page")} />
              </div>
            </div>
          </div>
          <div className="border-efect"></div>
        </div>
      </div>
    </div>
  );
}

export default Page;