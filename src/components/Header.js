import React from 'react'
import './Header.css'
import punkLogo from '../assets/header/cryptopunk-logo.png'
import searchIcon from '../assets/header/search.png'
import themeSwitchIcon from '../assets/header/theme-switch.png'
const Header = () => {
    return (
        <section className='header'>
            <div className="logoContainer">
                <img src={punkLogo} className="punkLogo" alt="punk-logo" />
            </div>

            <div className="searchBar">
                <div className="searchIconContainer">
                    <img src={searchIcon} alt="" />
                </div>
                <input type="text" className='searchInput' placeholder='Collection, item or user ...' />
            </div>

            <div className="headerItems">
                <p>Drops</p>
                <p>Marketplace</p>
                <p>Create</p>
            </div>

            <div className="headerActions">
                <div className="themeSwtichContainer">
                    <img src={themeSwitchIcon} alt="themeSwitchIcon" />
                </div>
            </div>

            <div className="loginButton">
                GET IN
            </div>

        </section>
    )
}

export default Header