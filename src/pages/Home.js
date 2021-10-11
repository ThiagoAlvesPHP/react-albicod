import React, { useEffect } from 'react';
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
import './assets/css/Home.scss';

function Page(props) { 
  //const traduction
  const { t } = props.translation();
  const textLogo = t('Quality and commitment always!');
  const facebook = 'https://www.facebook.com/albicodDev';
  const instagram = 'https://www.instagram.com/thiagoalvesdevphp/?hl=pt-br';
  const linkedin = 'https://www.linkedin.com/in/thiago-alves-b96b2159/';
  const github = 'https://github.com/ThiagoAlvesPHP';
  const whatsapp = 'https://api.whatsapp.com/send?phone=5573999412514&text=Eu preciso de um orçamento';

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
            <h3 className="type-page">{t('Home')}</h3>
          </i>
        </div>
        <div className="container-right">
          <div className="content">
            <div className="title-home">
              <i>Redes Sociais</i>
            </div>
            <div className="social">
              <a target="_blank" href={facebook}>
                <AiFillFacebook className="icons-social" title="Facebook" />
              </a>
              <a target="_blank" href={instagram}>
                <AiFillInstagram className="icons-social" title="Instagram" />
              </a>
              <a target="_blank" href={linkedin}>
                <AiFillLinkedin className="icons-social" title="Linkedin" />
              </a>
              <a target="_blank" href={github}>
                <AiOutlineGithub className="icons-social" title="Github" />
              </a>
              <a target="_blank" href={whatsapp}>
                <AiOutlineWhatsApp className="icons-social" title="Whatsapp" />
              </a>
            </div>
          </div>
          <div className="border-efect"></div>
        </div>
      </div>
    </div>
  );
}

export default Page;