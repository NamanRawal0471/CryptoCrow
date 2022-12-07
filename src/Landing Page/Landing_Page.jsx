import React from 'react';
import './Landing_Page.css';
import logo from './cryptocrow.png'

class LandingPage extends React.Component {

    
render(){
    
    return(
 
        <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <img src={logo} className='logo'/>
  <h1 className='logo_text'>Crypto Crow</h1>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
      <li class="nav-item ">
        <a class="nav-link active bg-dark" id='nav_item1' href="#">Exchange<span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link active bg-dark" id='nav_item2' href="#">P2P</a>
      </li>
      <li class="nav-item">
        <a class="nav-link active bg-dark" id='nav_item3' href="#">Login/Signup</a>
      </li>
    </ul>
    
  </div>
</nav>
        </div>


    );
    }
    
    
}
export default LandingPage;