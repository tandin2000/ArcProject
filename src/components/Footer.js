import React,{ useEffect, useState }  from 'react';
import { useHistory } from 'react-router-dom';

export default () => {
  const [data, setData] = useState();
  const history = useHistory();

  useEffect(()=>{
    const storedData = localStorage.getItem('info');
    const parsedData = JSON.parse(storedData);
    setData(parsedData)
  },[])
  return(
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
               <p>{data?.aboutUs}</p>
            </div>
           
          </div>
        </div>
        <div className='col-md-2'>
          <div className='footer-col'>
            <div className='heading'>
              Links
            </div>
            <div className='content'>
              <div className='link' onClick={()=>{history.push('/');window.scrollTo(0, 0);}}>Home</div>
              <div className='link' onClick={()=>{history.push('/Process');window.scrollTo(0, 0);}}>Process</div>
              <div className='link' onClick={()=>{history.push('/Work');window.scrollTo(0, 0);}}>Pojects</div>
              <div className='link' onClick={()=>{history.push('/Contact');window.scrollTo(0, 0);}}>Contact</div>
            </div>
          </div>
        </div>
        <div className='col-md-2'>
          <div className='footer-col'>
            {/* <div className='heading'>
              Usefull link
            </div>
            <div className='content'>
               <div className='link'>Frequently Asked</div>
               <div className='link'>Terms & Conditions</div>
               <div className='link'>Help Center</div>
              
            </div> */}
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
                <a href={data?.fbLink} target="_blank">
                    <span className="shine"></span>
                    <i className="fa fa-facebook-f"></i>
                </a>
              </div>
              <div className='socialicon'>
              <a href={data?.ldLink} target="_blank">
                  <span className="shine"></span>
                    <i className="fa fa-linkedin"></i>
              </a>
              </div>
              <div className='socialicon'>
              <a href={data?.twLink} target="_blank">
                <span className="shine"></span>
                <i className="fa fa-twitter"></i>
              </a>
              </div>
              <div className='socialicon'>
              <a href={data?.igLink} target="_blank">
                <span className="shine"></span>
                <i className="fa  fa-instagram"></i>
              </a>
              </div>
             
            </div>
          </div>
        </div>
      </div>
      
      <div className='subfooter'>
        <div className='row m-2-hor'>
          <div className='col-md-6'>
            <div className='content'>© Copyrights 2022 - {data?.CopyrightsYear} All rights reserved.</div>
            <div>
                  <span style={{"font-size": "11px"}}>Developed by</span> <span style={{color: "orange","font-size": "11px"}}>Orand</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
