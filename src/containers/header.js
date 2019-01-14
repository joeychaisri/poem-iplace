import React from 'react'
class Header extends React.Component {
  render () {
    return (
        <header className="header">
        <ul class="header-container">
            <li className="heading-1 header__logo"> 
                <a href="/">IPLACE<span style={{display:'block' , fontSize:'1.5rem',textAlign:'center',fontWeight:'900'}}>LAT KRABANG</span></a>
            </li>
            <li className="header__menu-main"> 
                <a href="/aboutus" >ABOUT US</a>
            </li>
            <li className="header__menu-main"> 
                <a href="/#" >DIRECTORY</a>
            </li>
            <li className="header__menu-main"> 
                <a href="/service-retail" >RETAIL SPACE</a>
            </li>
            <li className="header__menu-main"> 
                <a href="/#" >GALLERY</a>
            </li>
            <li className="header__menu-main"> 
                <a href="/news" >NEWS</a>
            </li>
            <li className="header__menu-main"> 
                <a href="/contactus" >CONTACT US</a>
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
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
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