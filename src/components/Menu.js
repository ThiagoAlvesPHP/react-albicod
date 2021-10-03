import React from 'react';
import { Link } from 'react-router-dom';
import { 
  AiFillHome, 
  AiFillInfoCircle, 
  AiTwotoneFolderOpen, 
  AiFillSetting, 
  AiFillPhone
} from "react-icons/ai";
import { FaAngleRight } from 'react-icons/fa';

// file scss
import "./Menu.scss";

const Menu = (props) => {
  
  return (
      <>
        <div className="menu">
            <div className="menu-left">
              <Link to="/">
                <div className="icone" title="Home">
                  <div className="icn" >
                    <AiFillHome />
                  </div>
                </div>
              </Link>
              <Link to="/about">
                <div className="icone" title="About">
                  <div className="icn">
                    <AiFillInfoCircle />
                  </div>
                </div>
              </Link>
              <Link to="/projects">
              <div className="icone" title="Portfolio">
                <div className="icn">
                  <AiTwotoneFolderOpen />
                </div>
              </div>
              </Link>
              <Link to="/services">
              <div className="icone" title="Service">
                <div className="icn">
                  <AiFillSetting />
                </div>
              </div>
              </Link>
              <Link to="/contact">
              <div className="icone" title="Contact">
                <div className="icn">
                  <AiFillPhone />
                </div>
              </div>
              </Link>
            </div>
            {/* <div className="menu-right">
              <div className="button-visible-menu" title="Menu">
                <FaAngleRight />
              </div>
            </div> */}
        </div>
      </>
  );
}

export default Menu;