import React, { useState, useEffect } from 'react';
import Logo from '../assets/albicod.webp';
import Typewriter from 't-writer.js'
import InputMask from '../components/InputMask';
import ValidateInputs from '../components/InputValidation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Css
import './assets/css/Contact.scss';

function Page(props) { 
  //const traduction
  const { t } = props.translation();
  const textLogo = t('Quality and commitment always!');

  const [name, setName] = useState('');
  const [phone, setContact] = useState('');
  const [message, setMessage] = useState('');

  useEffect(()=> {
    toTypeH1();
    document.querySelector('.page').classList.remove('opacity-page');
  },[]);

  /**
   * function event blur input name alert
   */
  function blurName() {
    if(name === '') {
      toast.error(`Preencha o campo nome corretamente!`, {
				position: "top-right",
				autoClose: false,
				hideProgressBar: true,
				ccorretamenteloseOnClick: true,
				pauseOnHover: false,
				draggable: true,
				progress: undefined,
			});
    }
  }
  /**
   * function event blur input phone alert
   */
   function blurPhone() {
    if(!ValidateInputs.validatePhone(phone).status) {      
      toast.error(`${ValidateInputs.validatePhone(phone).message}`, {
				position: "top-right",
				autoClose: false,
				hideProgressBar: true,
				closeOnClick: true,
				pauseOnHover: false,
				draggable: true,
				progress: undefined,
			});
    }
  }
  /**
   * 
   */
  function blurMessage()  {
    if(message === '') {
      toast.error(`Preencha o campo mensagem corretamente!`, {
				position: "top-right",
				autoClose: false,
				hideProgressBar: true,
				ccorretamenteloseOnClick: true,
				pauseOnHover: false,
				draggable: true,
				progress: undefined,
			});
    }
  }
  /**
   * animation h1
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
  /**
   * event de click in button
   */
  function clickBtn() {
    if(name != '' && message != '' && ValidateInputs.validatePhone(phone).status) {
      toast.success(`E-mail enviado!`, {
				position: "top-right",
				autoClose: false,
				hideProgressBar: true,
				ccorretamenteloseOnClick: true,
				pauseOnHover: false,
				draggable: true,
				progress: undefined,
			});
    } else {
      toast.error(`Preencha os campos corretamente!`, {
				position: "top-right",
				autoClose: false,
				hideProgressBar: true,
				ccorretamenteloseOnClick: true,
				pauseOnHover: false,
				draggable: true,
				progress: undefined,
			});
    }
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
            <h3 className="type-page">{t('Contact')}</h3>
          </i>
        </div>
        <div className="container-right">
          <div className="content-contact">
            <div className="form-contact">
              <label>{t('Name')}</label>
              <InputMask 
                placeholder={t('Name')}
                className='input'
                value={name}
                onChange={(e) => setName(e.target.value)}
                onBlur={blurName}
                required
              />
              <label>{t('Phone')}</label>
              <InputMask 
                mask='(99) 99999-9999'
                placeholder={'DDD + '+t('Phone')}
                className='input'
                value={phone}
                onChange={(e) => setContact(e.target.value)}
                onBlur={blurPhone}
                required
              />
              <label>{t('Message')}</label>
              <textarea 
                className='input texterea' 
                value={message} 
                onBlur={blurMessage}
                onChange={(e) => setMessage(e.target.value)} 
                required="" 
                placeholder={t('Message')}></textarea>
              <button onClick={clickBtn} className='btn-form'>{t('Send')}</button>
            </div>
          </div>
          <div className="border-efect"></div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Page;