import React, { useState, useEffect } from 'react';
import Logo from '../assets/albicod.webp';
import Typewriter from 't-writer.js';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import callnet from './assets/images/projects/callnet.png';
import conexaoAtiva from './assets/images/projects/conexao-ativa.jpeg';
import mega from './assets/images/projects/mega.jpeg';
import adsonRifas from './assets/images/projects/adson-rifas.jpeg';

// console.log(callnet);

//Css
import './assets/css/Projects.scss';

function Page(props) { 
  //const traduction
  const { t } = props.translation();
  const textLogo = t('Quality and commitment always!');

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
            <h3 className="type-page">{t('Projects')}</h3>
          </i>
        </div>
        <div className="container-right">
          <div className="content-projects">
            <div className="text-projects">
              <Carousel autoPlay infiniteLoop interval={3000} className="carousel-projects">
                <div>
                    <img src={callnet} />
                    <p className="legend">
                      PHP | MySQL | HTML5 | CSS3 | Jquery
                    </p>
                </div>
                <div>
                    <img src={conexaoAtiva} />
                    <p className="legend">
                      PHP | MySQL | HTML5 | CSS3 | Bootstrap 3 | Jquery
                    </p>
                </div>
                <div>
                    <img src={mega} />
                    <p className="legend">
                      PHP | MySQL | HTML5 | CSS3 | Bootstrap 3 | Jquery
                    </p>
                </div>
                <div>
                    <img src={adsonRifas} />
                    <p className="legend">
                      PHP | MySQL | HTML5 | CSS3 | Bootstrap 3 | Jquery
                    </p>
                </div>
              </Carousel>
            </div>
          </div>
          <div className="border-efect"></div>
        </div>
      </div>
    </div>
  );
}

export default Page;