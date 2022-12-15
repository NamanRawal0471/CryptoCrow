import React from 'react';
import './Landing_Page.css';
import logo from './Images/cryptocrow.png';
import hero_section1 from './Images/hero_section1.png';
import hero_section2 from './Images/hero_section2.png';

import Security from './Images/security.png';
import KYC from './Images/kyc.png';

import Speed from './Images/speed.png';
import MultiPlatform from './Images/multiplatform.png';

import Efficient from './Images/efficient.png';
import Blockchain from './Images/blockchain.png';




class LandingPage extends React.Component {

    
render(){

    
    return(
 
        <div className='navi'>
      <nav className="navbar navbar-expand-lg ">
  <img src={logo} className='logo' alt='cryptocrow'/>
  <h1 className='logo_text'>Crypto Crow</h1>
  <button className="navbar-toggler custom-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
      <li className="nav-item ">
        <a className="nav-link active " id='nav_item1' href="#">Exchange</a>
      </li>
      <li className="nav-item ">
        <a className="nav-link" id='nav_item4' >|</a>
      </li>
      <li className="nav-item">
        <a className="nav-link active " id='nav_item2' href="#">P2P</a>
      </li>
      <li className="nav-item ">
        <a className="nav-link" id='nav_item5' >|</a>
      </li>
      <li className="nav-item">
        <a className="nav-link active " id='nav_item3' href="#footer">Login/Signup</a>
      </li>
      
    </ul>
    
  </div>
</nav>
<div className="container-fluid hero_section" >
<div className='hero_section_text_div'><h2 className='hero_section_text'><span id='spannin'>CRYPTO CROW</span> IS INDIA'S TRUSTED <span id='spannin'>BITCOIN</span> & <span id='spannin'>CRYPTOCURRENCY</span> EXCHANGE</h2>
<p className='hero_section_underline_text'>Buy, Sell & Trade Bitcoin, Ethereum, Ripple, Litecoin and more cryptocurrencies in India. Start trading now!</p>
</div>
<div><img src={hero_section1} alt='hero_section' id='hero_section1'></img>
<img src={hero_section2} alt='hero_section' id='hero_section2'></img>
</div>
</div>

<div className='Features_Section'>
<div className='Features_Section_Heading'>
<center><h1 className='Features_Section_Heading_text'><span className='Features_Section_Heading_text_span1'>Crypto Crow </span>is <span className='Features_Section_Heading_text_span2'>India's</span> first choice because</h1></center>
<center><hr></hr></center>
</div>
<div className='Features_row'>
  <div className='Feature'>
    <div><img src={Security} alt=' Best Security' className='Feature_img'></img>
    </div>
    <div>
    <h3 className='Feature_Heading'>BEST IN CLASS SECURITY</h3>
    <p className='Feature_Underline'>We've left no stone unturned to make Crypto Crow India's most secure exchange. We’re investing in regular security audits to ensure a highly secured trading platform for India.</p>
    
  </div>
  </div>
  <div className='Feature'>
  <div><img src={KYC} alt='Easy KYC' className='Feature_img'></img></div>
  <div>
  <h3 className='Feature_Heading'>SUPER FAST KYC</h3>
  <p className='Feature_Underline'>Top of the line identity verification systems process your KYC within a few hours of signing up, while ensuring the right KYC protocol. We're building in robustness to sharply reduce verification times.</p>
  </div>
  </div>
</div>

<div className='Features_row'>
  <div className='Feature'>
    <div><img src={Speed} alt='Super-Fast Speed' className='Feature_img'></img></div>
    <div>
  <h3 className='Feature_Heading'>LIGHTNING SPEED TRANSACTIONS</h3>
  <p className='Feature_Underline'>Crypto Crow can handle Millions of transactions. Our system infrastructure can scale up in a few seconds to match surging demand.</p>
  </div>
  </div>
  <div>
  <div><img src={MultiPlatform} alt='Multiplatform Services' className='Feature_img'></img></div>
  <div>
  <h3 className='Feature_Heading'>ACROSS 5 PLATFORMS</h3>
  <p className='Feature_Underline'>Crypto Crow offers a seamless and powerful trading experience across all platforms - on Web, Android & iOS mobile, Windows, and Mac apps.</p>
  </div>
  </div>
</div>

<div className='Features_row'>
  <div >
    <div><img src={Efficient} alt='Efficient Design' className='Feature_img'></img></div>
    <div>
  <h3 className='Feature_Heading'>SIMPLE & EFFICIENT DESIGN</h3>
  <p className='Feature_Underline'>Trading on the Crypto Crow platform is a super fast experience you’ll fall in love with! We’ve built technology used by Millions, and that experience has helped us build this powerful exchange.</p>
  </div>
  </div>
  <div>
  <div><img src={Blockchain} alt='BlockChain Believers' className='Feature_img'></img></div>
  <div>
  <h3 className='Feature_Heading'>BUILT BY BLOCKCHAIN BELIEVERS</h3>
  <p className='Feature_Underline'>We’re a team of hardcore traders & passionate blockchain believers. We understand exactly what you need. Powerful graphs, mobile apps, etc are features being built into Crypto Crow from day 1.</p>
  </div>
  </div>
</div>


</div>

<div>

<footer>
        <div className='container'>
          <div className='row footer' >
            <div className='col-12 coil-lg-10 mx-auto'>
              <div className='row' style={{ marginTop: "15px" }}>
                <div className='col-7 col-lg-3 col-sm-5'>
                  <div>
                    <img src={logo} style={{ marginBottom: "10px" }} width="170" height="170" alt='Axxelio' />
                  </div>
                </div>
                <div className='col-7 col-lg-3'>
                  <h3 className='heading_Footer'>Services</h3>
                  <ul>
                    <li>
                      <a href='#' style={{ textDecoration: "none" }}>Exchange</a>
                    </li>
                    <li>
                      <a href='#' style={{ textDecoration: "none" }}>P2P</a>
                    </li>
                    
                  </ul>
                </div>
                <div className='col-4 col-lg-3'>
                  <h3 className='heading_Footer'>Company</h3>
                  <ul>
                    <li>
                      <a href='#' style={{ textDecoration: "none" }}>About Us</a>
                    </li>
                    <li>
                      <a href='#' style={{ textDecoration: "none" }}>Home</a>
                    </li>
                    <li>
                      <a href='#' style={{ textDecoration: 'none' }}>Terms & conditions</a>
                    </li>
                    <li>
                      <a href='#' style={{ textDecoration: 'none' }}>Contact Us</a>
                    </li>
                  </ul>
                </div>
                <div className='col-4 col-lg-3'>
                  <h3 className='heading_Footer'>Follow Us On</h3>
                  <div className='row' style={{ marginTop: "25px" }}>
                    <div className='col-3 mx-auto'>
                      <a href='#'>
                        <i className="fa fa-facebook-official" style={{ fontSize: "30px", color: 'white' }}></i>
                      </a>
                    </div>
                    <div className='col-3 mx-auto'>
                      <a href='#'>
                        <i className="fa fa-linkedin-square" style={{ fontSize: "30px", color: 'white' }}></i>
                      </a>
                    </div>
                    <div className='col-3 mx-auto'>
                      <a href='#'>
                        <i className="fa fa-instagram" style={{ fontSize: "30px", color: 'white' }}></i>
                      </a>
                    </div>
                    <div className='col-3 mx-auto'>
                      <a href='#'>
                        <i className="fa fa-google" style={{ fontSize: "30px", color: 'white' }}></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-3" style={{ marginTop: '20px' }}>
                <form action="">
                  <label className='heading_Footer' htmlFor="ex2">SUBSCRIBE</label>
                  <input className="email-address" style={{ marginLeft: "10px" }} type="Email" placeholder='Enter your Email Here' />
                </form>
              </div>
              <div className="mt-5">
                <p className="main-hero-para text-center w-100" id='footer'>
                  Copyright @ cryptocrow.com. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>

      </footer>
</div>

        </div>


    );
    }
    
    
}
export default LandingPage;