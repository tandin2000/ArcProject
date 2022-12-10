import React from "react";
import { withRouter } from "react-router-dom";
import Reveal from 'react-reveal/Reveal';

import Processlist from '../components/Processlist';
import Footer from '../components/Footer';

import { Efect, Efect1, Efect2  } from "../styles/effect.styles";
  

const Process = ({ history }) => {

  return (
    <div>
      <Efect/>
      <Efect1/>
      <Efect2/>

      <div className="jumbotron head"/>

      <Reveal effect="fadeIn">
        <section className='jumbotron imgtop'>
        	<img
	          src="./img/imgabout.jpg"
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
	        		<div className='content'>Donec posuere bibendum metus. 
	        		Quisque gravida luctus volutpat mauris interdum lectus 
	        		in dapibus molestie quam felis sollicitudin amet tempus velit 
	        		lectus nec lorem. Nullam vel mollis neque. 
	        		Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
	        		Nullam vel enim dui. Cum sociis natoque penatibus et magnis 
	        		dis parturient montes ridiculus mus. Vestibulum cursus convallis 
	        		venenatis. Sed ut blandit mauris. 
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
