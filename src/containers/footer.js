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

        <a className="btn btn--white btn--animated ">CAREER</a>

        <div className="footer--lang">
            <a className="">English</a>
            <a className="footer-lang">Thai</a>
        </div>
        
        <div className="footer--icon"> 
        <span style={{fontSize: "3em"}}>
            <i class="fab fa-facebook"></i>
        </span>


        <span style={{fontSize: "3em"}}>
            <i class="fab fa-twitter"></i>
        </span>

        <span style={{fontSize: "3em"}}>
            <i class="fab fa-instagram"></i>
        </span>

        <span style={{fontSize: "3em"}}>
            <i class="fab fa-youtube"></i>
        </span>
        </div>


        


        </section>


        </footer>
    );
  }
}

export default Footer;