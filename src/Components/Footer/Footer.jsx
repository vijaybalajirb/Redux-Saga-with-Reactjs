import React from 'react';
import codegamalogo from "../../assets/codegama-logo.png"
import Card from '../Card/Card';
import './Footer.css'


const Footer = () => { 
    return(
        <div className='flexbox'>
            <div className='footerlogo'>
                <a className='link' href='/'>
                    <img className='mainlogo' src={codegamalogo}></img>
                </a>
            </div>
            <div className='slogan'>
                <p>
               Innvative Solutions,<span>Built here!</span> 
                </p>
            </div>
            <div className='copyright'>
                <p>
                Copyright © 2023 Codegama, All rights reserved
                </p>
            </div>

        </div>
    )
}

export default Footer;