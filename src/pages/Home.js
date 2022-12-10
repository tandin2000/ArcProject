import React from "react";
import { withRouter } from "react-router-dom";
import Reveal from 'react-reveal/Reveal';
import Slider from '../components/Sliderhome';
import Abouthome from '../components/Abouthome';
import Carouselprojects from '../components/Carouselprojects';
import Faq from '../components/Faq';
import Carouselnews from '../components/Carouselnews';
import Footer from '../components/Footer';
import { Efect, Efect1, Efect2  } from "../styles/effect.styles";

const Home = ({ history }) => {

  return (
    <div>

      <Efect/>
      <Efect1/>
      <Efect2/>

      <Reveal effect="fadeIn">
        <section className="jumbotron jumbomain">
            <Slider />
        </section>
      </Reveal>
      
     
      
      <Reveal effect="fadeInUp">
        <Abouthome/>
      </Reveal>

      <Reveal effect="fadeInUp">
        <section className='container-fluid py-0 mt-50'>
          <div className='row m-2-hor'>
            <div className='col-12'>
              <div className='heading'>Our Projects</div>
            </div>
          </div>
          <div className='row'>
            <div className='col-12 p-0'>
              <Carouselprojects/>
            </div>
          </div>
        </section>
      </Reveal>

     

      <Reveal effect="fadeInUp">
        <section className='container-fluid pt-0 mt-50'>
          <div className='row m-2-hor'>
            <div className='col-12'>
              <div className='heading'>Latest News</div>
            </div>
            <div className='col-12'>
              <Carouselnews/>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal effect="fadeInUp">
        <section className='container-fluid mt-50'>
          <div className='row m-2-hor'>
            
            <div className='col-12'>
            <Faq/>
            </div>
          </div>
        </section>
      </Reveal>

      

      <Footer />

    </div>
  );
};

export default withRouter(Home);
