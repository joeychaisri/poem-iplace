import React from 'react'
class Footer extends React.Component {
  render () {
    return (
        <footer className="footerbar">

        <section className="footer__section1">
        <h4 class="footer__section1__logo-lcb heading-2">iPLACE</h4>
        <h4 class="footer__logo-lcb heading-5">LAM CHABANG</h4>
            <p class="footer__section1__address">87/27 Moo 2 Sukhumvit Road
            Tungsukla, Srirachad
            Chonburi 20230, THAILAND
            TEL: (6638) 109 196
            EMAIL: growth@poem.global</p>
        </section>

        <section className="footer__section2">

        <h4 class="footer__section1__logo-lkb heading-2">iPLACE</h4>
        <h4 class="footer__logo-lkb heading-5">LAT KRABANG</h4>
            <p class="footer__section2__address">87/27 Moo 2 Sukhumvit Road
            Tungsukla, Srirachad
            Chonburi 20230, THAILAND
            TEL: (6638) 109 196
            EMAIL: growth@poem.global</p>
        </section>

        <section className="footer__section3">

        <a className="btn btn--white btn--animated">CAREER</a>

        <div className="footer--lang" style={{marginTop: "30px"}}>
            <a >English</a>
            <a style={{ paddingLeft: '10px' }}>|</a>
            <a style={{ paddingLeft: '10px' }}>ภาษาไทย</a>
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

export default Footer;