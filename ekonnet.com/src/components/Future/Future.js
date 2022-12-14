import React from 'react';
import Button from 'react-bootstrap/Button';
import f1 from "../assets/f1.png";
import './Future.css';
import icons from "../assets/icons.png";

const Future = () => {
  return (
    <>
   <section id='future' className='future'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <h1>Trade In crypto Future<strong>Today</strong></h1>
              <p>Maximise your trading potential with leverage up to 15X with crypto futures</p>
              <div>
              <Button className='Future_Visit_btn'>Visit Future</Button>
              <Button className='Future_Register_btn'>Register</Button>
              </div>
            </div>
            <div className='col-lg-6'>
              <img src={f1} alt='phone' className='img-fluid future_img'></img>
            </div>  
          </div>
        </div>
</section>
<section id='leverage' className='leverage'>
<div className='container'>
  <div className='row'>
    <div className='col-lg-6'>
      <img src={icons} alt='phone' className='img-fluid icons_img'></img>
    </div>
    <div className='col-lg-6'>
      <h2>Futures trading with leverage</h2>
      <p>Ekonnet Futures offers leverage, allowing you to amplify your buying or selling power.</p>
    </div>
  </div>
</div>
</section>
<section id='flexibility' className='flexibility'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <h2>Flexibility in risk manageme</h2>
              <p>Ekonnet Futures offers leverage, allowing you to amplify your buying or selling power.</p>
            </div>
            <div className='col-lg-6'>
              <img src={icons} alt='phone' className='img-fluid icons_img'></img>
            </div>  
          </div>
        </div>
</section>
<section id='leverage' className='leverage'>
<div className='container'>
  <div className='row'>
    <div className='col-lg-6'>
      <img src={icons} alt='phone' className='img-fluid icons_img'></img>
    </div>
    <div className='col-lg-6'>
      <h2>Trade a range of currency pairs</h2>
      <p>Gain exposure to a variety of pairs using your multi-collateral futures wallet with 10 different collateral options.</p>
    </div>
  </div>
</div>
</section>

        </>
  )
}

export default Future
