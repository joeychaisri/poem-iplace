import React from 'react'
import { withTranslation } from 'react-i18next';
import i18n from 'i18next';
class Footer extends React.Component {
  render () {
    const { t, i18n } = this.props;
    const changeLanguage = lng => {
            i18n.changeLanguage(lng);
    };
    return (
        <footer className="footerbar">

        <section className="footer__section1">
        <h4 class="footer__section1__logo-lcb heading-2">{t('content1.header')}</h4>
        <h4 class="footer__logo-lcb heading-5">{t('content1.subheader')}</h4>
            <p class="footer__section1__address">{t('content1.address')}<span style={{display:'block'}}>{t('content1.tel')}</span><span>{t('content1.email')}</span></p>
        </section>

        <section className="footer__section2">

        <h4 class="footer__section1__logo-lkb heading-2">{t('content2.header')}</h4>
        <h4 class="footer__logo-lkb heading-5">{t('content2.subheader')}</h4>
            <p class="footer__section2__address">{t('content2.address')}<span style={{display:'block'}}>{t('content2.tel')}</span><span>{t('content2.email')}</span></p>
        </section>

        <section className="footer__section3">

        <a className="btn btn--white btn--animated" style={{color:'#eb6b00'}}>{t('contactus')}</a>

        <div className="footer--lang" style={{marginTop: "30px"}}>
            <a onClick={() => changeLanguage('en')}>English</a>
            <a style={{ paddingLeft: '10px' }}>|</a>
            <a style={{ paddingLeft: '10px' }} onClick={() => changeLanguage('th')} >ภาษาไทย</a>
        </div>
        
        <div className="footer--icon" style={{marginTop: "10px"}}> 
        <span className="icon-space" style={{fontSize: "3em"}}>
            <i class="fab fa-facebook icon-space"></i>
        </span>


        <span className="icon-space" style={{fontSize: "3em"}}>
            <i class="fab fa-twitter icon-space"></i>
        </span>

        <span className="icon-space" style={{fontSize: "3em"}}>
            <i class="fab fa-instagram icon-space"></i>
        </span>

        <span className="icon-space" style={{fontSize: "3em"}}>
            <i class="fab fa-youtube icon-space"></i>
        </span>
        </div>

        <div className="copyright" style={{marginTop: "25px" , fontSize: "1.2em"}}>
        Copyright © 2018 iPLACE. All Rights Reserved.
        </div>

        </section>


        </footer>
    );
  }
}

export default withTranslation('footer')(Footer);