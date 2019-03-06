import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
  } from "react-router-dom";
  import i18n from 'i18next';

class Header extends React.Component {
  render () {

    const changeLanguage = lng => {
        i18n.changeLanguage(lng);
    };
    return (
        <header className="header">
        <ul class="header-container">
            <li className="heading-1 header__logo"> 
                <Link to="/">IPLACE<span style={{display:'block' , fontSize:'1.5rem',textAlign:'center',fontWeight:'900'}}>LAT KRABANG</span></Link>
            </li>
            <li className="header__menu-main"> 
                <Link to="/aboutus">ABOUT US</Link>
            </li>
            <li className="header__menu-main"> 
                <Link to="/directory">DIRECTORY</Link>
            </li>
            <li className="header__menu-main"> 
                <Link to="/service-retail" >RETAIL SPACE</Link>
            </li>
            <li className="header__menu-main"> 
                <Link to="/gallery" >GALLERY</Link>
            </li>
            <li className="header__menu-main"> 
                <Link to="/news" >NEWS</Link>
            </li>
            <li className="header__menu-main"> 
                <Link to="/contactus" >CONTACT US</Link>
            </li>
            <div class="header-group-dropdown">
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle header-button-1" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    LOCATION
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                </div>
            </div>
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle header-button-2" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    TH/EN
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" onClick={() => changeLanguage('th')} >TH</a>
                    <a class="dropdown-item" onClick={() => changeLanguage('en')} >ENG</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                </div>
            </div>
            </div>
        </ul>

        </header>
    );
  }
}

export default Header;