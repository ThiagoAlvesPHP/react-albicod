import React from 'react';
import { Link } from 'react-router-dom';
import { 
  AiFillHome, 
  AiFillInfoCircle, 
  AiTwotoneFolderOpen, 
  AiFillSetting, 
  AiFillPhone
} from "react-icons/ai";

// file scss
import "./Menu.scss";

const Menu = (props) => {
  //const traduction
  const { t } = props.translation();

  function actionMenu(menu) {
    document.querySelectorAll('.icone').forEach(el => {
      el.classList.remove('selected');
    });
    document.querySelector(`.${menu}`).classList.add('selected');
  }
  
  return (
      <>
        <div className="menu">
            <div className="menu-left">
              <Link to="/" onClick={()=>actionMenu('action-1')}>
                <div className="icone action-1 selected" title={t('Home')}>
                  <div className="icn" >
                    <AiFillHome />
                  </div>
                </div>
              </Link>
              <Link to="/about" onClick={()=>actionMenu('action-2')}>
                <div className="icone action-2" title={t('About')}>
                  <div className="icn">
                    <AiFillInfoCircle />
                  </div>
                </div>
              </Link>
              <Link to="/projects" onClick={()=>actionMenu('action-3')}>
                <div className="icone action-3" title={t('Projects')}>
                  <div className="icn">
                    <AiTwotoneFolderOpen />
                  </div>
                </div>
              </Link>
              <Link to="/services" onClick={()=>actionMenu('action-4')}>
                <div className="icone action-4" title={t('Service')}>
                  <div className="icn">
                    <AiFillSetting />
                  </div>
                </div>
              </Link>
              <Link to="/contact" onClick={()=>actionMenu('action-5')}>
                <div className="icone action-5" title={t('Contact')}>
                  <div className="icn">
                    <AiFillPhone />
                  </div>
                </div>
              </Link>
            </div>
        </div>
      </>
  );
}

export default Menu;