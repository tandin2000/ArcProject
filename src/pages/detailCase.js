import React, { Component, createRef, Fragment } from "react";
import {
  Hero,
  Title,
  TechniqueTitle,
  ClientTag,
  CaseWrapper,
  BackButton,
  BackArrow
} from "../styles/Case.styles";
import Gallery from 'react-photo-masonry';

import Reveal from 'react-reveal/Reveal';
import { withRouter } from "react-router";
import Footer from '../components/Footer';
import { Efectr, Efectr1, Efectr2  } from "../styles/effect.styles";
import config from "../config";

export const ScrollTop = ({ children, location }) => {
  React.useEffect(() => window.scrollTo(0, 0), [location])
  return children
}

class Case extends Component {
  constructor(props) {
    super(props);
    this.introRef = createRef();

    this.state = {
      toBack: false,
      introTop: 0,
      hasBackground: false,
      animateCase: ""
    };
  }

  componentDidUpdate() {
    if (this.state.toBack) {
      setTimeout(() => {
        this.props.setNavBackground(false);
        this.props.history.push("/work");
      }, 400);
    }
    if (this.state.animateCase) {
      setTimeout(() => {
        this.props.setNavBackground(false);

        this.props.history.push(this.state.animateCase);
        window.scrollTo(0, 0);
      }, 400);
    }
  }

  componentDidMount() {
    const id = localStorage.getItem('ProjectId'); // Retrieve the ID from local storage (replace 'caseId' with your actual key)

    const formatDate = (dateString) => {
      const options = {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      };
    
      const date = new Date(dateString);
      const formattedDate = date.toLocaleDateString('en-US', options);
    
      const day = date.getDate();
      let suffix = 'th';
      if (day === 1 || day === 21 || day === 31) {
        suffix = 'st';
      } else if (day === 2 || day === 22) {
        suffix = 'nd';
      } else if (day === 3 || day === 23) {
        suffix = 'rd';
      }
    
      const parts = formattedDate.split(' ');
      return `${day}${suffix} ${parts[0]}, ${parts[2]}`;
    };

    //fetch the data
    fetch(`${config.API}/project-cart-children/${id}?populate=*`)
    .then(response => response.json())
    .then(data => {
      const dataPayload = data.data.attributes;
      const payload = {
        client: dataPayload.Client,
        date: formatDate(dataPayload.Completed_On),
        description: dataPayload.Description,
        image: dataPayload.Image.data.attributes.url,
        mainDescription: dataPayload.Main_Description,
        projectType: dataPayload.Project_Type,
        title: dataPayload.Title,
        type: dataPayload.Type,
      }

      const imageList = dataPayload.Images_Proof.data
      function generateDimensions() {
        const lowest = 2;
        const highest = 4;
        const maxDifference = 1;
      
        // Generate a random width within the constraints
        const width = getRandomInt(lowest, highest);
      
        // Calculate the minimum and maximum height based on the width and maxDifference
        const minHeight = Math.max(lowest, width - maxDifference);
        const maxHeight = Math.min(highest, width + maxDifference);
      
        // Generate a random height within the calculated constraints
        const height = getRandomInt(minHeight, maxHeight);
      
        return { width, height };
      }
      
      function getRandomInt(min, max) {
        // Generate a random integer between min and max (inclusive)
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
      
      const newMapImageList = imageList.map(image => {
        const dimensions = generateDimensions();
        return {
          src: `${config.API_ASSETS}${image.attributes.url}`,
          width: dimensions.width,
          height: dimensions.height
        };
      });
      this.setState({ payload, newMapImageList });
    })
    .catch(error => {
      console.log(error);
    });

  }

  render() {
    const { payload, newMapImageList } = this.state;
    return (
      <Fragment>
      <Efectr/>
      <Efectr1/>
      <Efectr2/>
      <ScrollTop>
        <CaseWrapper>
        <Reveal effect="fadeIn">
          <Hero className='mainhero' style={{ backgroundImage: `url(${config.API_ASSETS}${payload?.image})` }}>
              <div className='herocaption'>
                <BackButton className='backdetail'
                  onClick={() => this.setState({ toBack: true, hasBackground: false })}
                  toBack={this.state.toBack}
                  hasBackground={this.state.hasBackground}>
                  <BackArrow src="./img/back.png" alt="Back to Projects" />
                  <span>Back </span>
                </BackButton>
                <ClientTag>{payload?.type}</ClientTag>
                <Title>{payload?.title}</Title>
                <TechniqueTitle>{payload?.description}</TechniqueTitle>
              </div>
          </Hero>
        </Reveal>

        <section className='container-fluid' id='detailproject'>
          <div className='row m-2-hor'>
            <div className='col-md-8'>
              {payload?.mainDescription}
            </div>
            <div className='col-md-4 sticky'>
              <ul className='detailproject'>
                <li>
                  <span className='tile'>Categories:</span>
                  <span>{payload?.type}</span>
                </li>
                <li>
                  <span className='tile'>Client:</span>
                  <span>{payload?.client}</span>
                </li>
                <li>
                  <span className='tile'>Completed:</span>
                  <span>{payload?.date}</span>
                </li>
                <li>
                  <span className='tile'>Project type:</span>
                  <span>{payload?.projectType}</span>
                </li>
              </ul>
            </div>
            <div className="col-md-12">
              <br/>
              {newMapImageList !== undefined &&
                  <Gallery photos={newMapImageList} direction={"column"} />
               }
            </div>
           
            <div className='col-md-12'>
             <div className='share'>
              <span className='heading'>
               Share :
              </span>
              <span className='content'>     
                <i className="fa fa-facebook-f"></i>
              </span>
              <span className='content'>     
                <i className="fa fa-twitter"></i>
              </span>
              <span className='content'>     
                <i className="fa  fa-instagram"></i>
              </span>
             </div>
            </div>
          </div>
        </section>         
        </CaseWrapper>

      </ScrollTop>

     

      <Footer />

      </Fragment>
    );
  }
}

export default withRouter(Case);
