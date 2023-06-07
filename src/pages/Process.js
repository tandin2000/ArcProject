import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import Reveal from 'react-reveal/Reveal';

import Processlist from '../components/Processlist';
import Footer from '../components/Footer';

import { Efect, Efect1, Efect2  } from "../styles/effect.styles";
import config from "../config";
  

const Process = ({ history }) => {
	const [predata, setPreData] = useState([]);
  
	useEffect(() => {
	  fetch(`${config.API}/process?populate=*`)
		.then(response => response.json())
		.then(data => {
		  const dataPayload = data.data.attributes;
		  const payload = {
			image: dataPayload.Image.data.attributes.url,
			description : dataPayload.Description
		  }
		  setPreData(payload);
		})
		.catch(error => {
		  console.log(error);
		});
	}, []);

  return (
    <div>
      <Efect/>
      <Efect1/>
      <Efect2/>

      <div className="jumbotron head"/>

      <Reveal effect="fadeIn">
        <section className='jumbotron imgtop'>
        	<img
	          src={`${config.API_ASSETS}${predata?.image}`}
	          className="img-fluid"
	          alt="#"
	        />
        </section>
       </Reveal>

      <Reveal effect="fadeIn">
        <section className='container-fluid pb-0'>
	        <div className='row m-2-hor'>
	        	<div className='col-md-4'>
	        		<h1>Process</h1>
	        	</div>
	        	<div className='col-md-8'>
	        		<div className='content'>
						{predata?.description}
	        		</div>
	        	</div>
	        </div>
	    </section>
	   </Reveal>

	  <Reveal effect="fadeInUp">
        <Processlist/>
      </Reveal>

	

      <Footer />

    </div>
    
  );
};

export default withRouter(Process);
