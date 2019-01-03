import React from 'react'
class Header extends React.Component {
  render () {
    return (
        <header className="header">

        {/* <h3 className="heading-1 header__logo" > IPLACE </h3> */}

            <li className="heading-1 header__logo"> 
                <a href="/">IPLACE</a>
            </li>
            <li className="header__menu-main"> 
                <a href="/#" >ABOUT US</a>
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
                <a href="/#" >CONTACT US</a>
            </li>
        </header>
    );
  }
}

export default Header;