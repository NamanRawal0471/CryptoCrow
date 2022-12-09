import React from 'react';
import './Landing_Page.css';
import logo from './cryptocrow.png';
import hero_section1 from './hero_section1.png';
import hero_section2 from './hero_section2.png';

class LandingPage extends React.Component {

    
render(){

    
    return(
 
        <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <img src={logo} className='logo' alt='cryptocrow'/>
  <h1 className='logo_text'>Crypto Crow</h1>
  <button class="navbar-toggler custom-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
      <li class="nav-item ">
        <a class="nav-link active bg-dark" id='nav_item1' href="#">Exchange</a>
      </li>
      <li class="nav-item ">
        <a class="nav-link" id='nav_item4' >|</a>
      </li>
      <li class="nav-item">
        <a class="nav-link active bg-dark" id='nav_item2' href="#">P2P</a>
      </li>
      <li class="nav-item ">
        <a class="nav-link" id='nav_item5' >|</a>
      </li>
      <li class="nav-item">
        <a class="nav-link active bg-dark" id='nav_item3' href="#">Login/Signup</a>
      </li>
      
    </ul>
    
  </div>
</nav>
<div class="container-fluid" className='hero_section'>
<div className='hero_section_text_div'><h2 className='hero_section_text'><span id='spannin'>CRYPTO CROW</span> IS INDIA'S TRUSTED <span id='spannin'>BITCOIN</span> & <span id='spannin'>CRYPTOCURRENCY</span> EXCHANGE</h2>
<p className='hero_section_underline_text'>Buy, Sell & Trade Bitcoin, Ethereum, Ripple, Litecoin and more cryptocurrencies in India. Start trading now!</p>
</div>
<div><img src={hero_section1} alt='hero_section' id='hero_section1'></img>
<img src={hero_section2} alt='hero_section' id='hero_section2'></img>
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
                  <h3>Services</h3>
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
                  <h3>Company</h3>
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
                  <h3>Follow Us On</h3>
                  <div className='row' style={{ marginTop: "25px" }}>
                    <div className='col-3 mx-auto'>
                      <a href='#'>
                        <i className="fa fa-facebook-official" style={{ fontSize: "30px", color: 'white' }}></i>
                      </a>
                    </div>
                    <div className='col-3 mx-auto'>
                      <a href='#'>
                        < i className="fa fa-linkedin-square" style={{ fontSize: "30px", color: 'white' }}></i>
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
                  <label htmlFor="ex2">SUBSCRIBE</label>
                  <input className="email-address" style={{ marginLeft: "10px" }} type="Email" placeholder='Enter your Email Here' />
                </form>
              </div>
              <hr />
              <div className="mt-5">
                <p className="main-hero-para text-center w-100">
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