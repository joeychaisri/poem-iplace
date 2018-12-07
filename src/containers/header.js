import React from 'react'
class Header extends React.Component {
  render () {
    return (
        <header className="header">

        <h3 className="heading-1 header__logo" > IPLACE </h3>
            <li className="header__menu-main"> 
                <a href="/#" className=" heading-3">ABOUT US</a>
            </li>
            <li className="header__menu-main"> 
                <a href="/#" className="heading-3">DIRECTORY</a>
            </li>
            <li className="header__menu-main"> 
                <a href="/#" className="heading-3">RETAIL SPACE</a>
            </li>
            <li className="header__menu-main"> 
                <a href="/#" className="heading-3">GALLERY</a>
            </li>
            <li className="header__menu-main"> 
                <a href="/#" className="heading-3">NEWS</a>
            </li>
            <li className="header__menu-main"> 
                <a href="/#" className="heading-3">CONTACT US</a>
            </li>
        </header>
    );
  }
}

export default Header;