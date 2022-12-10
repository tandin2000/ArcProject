import React from 'react';

export default () => (
  <footer className='container-fluid black_more'>
  <div className='bg-footer'>
    <img src='./img/footer-img.png' alt='bg-footer'/>
  </div>
    <div className='row m-2-hor'>
      <div className='col-md-4'>
        <div className='footer-col'>
          <div className='heading'>
            <h2>About Us</h2>
          </div>
          <div className='content'>
             <p>Our dedicated home interior designers work with you tirelessly 
             to tie your style with their design expertise, creating 
             the perfect interior design concept.</p>
          </div>
         
        </div>
      </div>
      <div className='col-md-2'>
        <div className='footer-col'>
          <div className='heading'>
            Links
          </div>
          <div className='content'>
            <div className='link'>Home</div>
            <div className='link'>Process</div>
            <div className='link'>Pojects</div>
            <div className='link'>Contace</div>
          </div>
        </div>
      </div>
      <div className='col-md-2'>
        <div className='footer-col'>
          <div className='heading'>
            Usefull link
          </div>
          <div className='content'>
             <div className='link'>Frequently Asked</div>
             <div className='link'>Terms & Conditions</div>
             <div className='link'>Help Center</div>
            
          </div>
        </div>
      </div>
      
      <div className='col-md-4'>
        <div className='footer-col'>
          <div className='heading'>
            Follow Us
          </div>
          <div className='content'>
            <p>Explore thousands of inspiring interior designs, 
            from our best team here.</p>
            <div className='socialicon'>
            <span className="shine"></span>
              <i className="fa fa-facebook-f"></i>
            </div>
            <div className='socialicon'>
            <span className="shine"></span>
              <i className="fa fa-linkedin"></i>
            </div>
            <div className='socialicon'>
            <span className="shine"></span>
              <i className="fa fa-twitter"></i>
            </div>
            <div className='socialicon'>
            <span className="shine"></span>
              <i className="fa  fa-instagram"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='subfooter'>
      <div className='row m-2-hor'>
        <div className='col-md-6'>
          <div className='content'>© Copyrights 2022 All rights reserved.</div>
        </div>
      </div>
    </div>
  </footer>
);
