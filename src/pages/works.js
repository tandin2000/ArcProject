import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import Reveal from 'react-reveal/Reveal';

import {
  LinkWrap,
  Overlay
} from "../styles/Work.styles";

import Footer from '../components/Footer';

import { Efect, Efect1, Efect2  } from "../styles/effect.styles";
import config from "../config";
  

const Works = ({ history }) => {
  document.title = "Projects";
const [toCase, setCase] = useState("");
const [coord, setCoords] = useState();
const [data, setData] = useState([]);
const [predata, setPreData] = useState([]);

useEffect(() => {
  setData([])
    fetch(`${config.API}/project?populate=*`)
    .then(response => response.json())
    .then(data => {
      const dataPayload = data.data.attributes.project_cards.data;
      setPreData(dataPayload)
    })
    .catch(error => {
      console.log(error);
    });
  }, []);

useEffect(() => {
    setData([]);
    predata.map(x => {
      fetch(`${config.API}/project-cards/${x.id}?populate=*`)
        .then(response => response.json())
        .then(data => {
          const dataPayload = data.data.attributes;
          const payload = {
            title: dataPayload.Title,
            type: dataPayload.Type,
            image: dataPayload.Image.data.attributes.url,
            childId: dataPayload.project_cart_child.data.id
          };
          setData(prev => [...prev, payload]);
        })
        .catch(error => {
          console.log(error);
        });
    });
  }, [predata]);

useEffect(() => {
    toCase &&
      setTimeout(() => {
        history.push(toCase);
      }, 600);
  }, [toCase, history]);


  const handleCaseSwap = (e, uri) =>
    e.x < coord + 15 && e.x > coord - 15 && setCase(uri);

  return (
    <div>
      <Efect/>
      <Efect1/>
      <Efect2/>

      <div className="jumbotron head"/>

      <Reveal effect="fadeInUp">
       <section className='container-fluid pb-0'>
          <div className='row m-2-hor'>
            <div className='col-md-12'>
              <h1 className="heading mt-5">Our Projects</h1>
            </div>
          </div>
       </section>
      </Reveal>

       <Reveal effect="fadeInUp">
       <section className='container-fluid'>
          <div className='row m-2-hor'>
            {data.map(x=>{
                return(<>
                <div className='col-md-4 slick slickproject p-3'>
                    <div className='slick-slide d-block'>
                      <div>
                        <div className='itm'>
                        <LinkWrap active={toCase === "/detailcase"}>
                          <Overlay active={!!toCase} onMouseDown={e => setCoords(e.nativeEvent.x)}
                            onMouseUp={e => {
                                localStorage.setItem('ProjectId', x.childId);
                                handleCaseSwap(e.nativeEvent, "/detailcase")
                              }}>
                            <div className='bg'>
                              <img
                                src={`${config.API_ASSETS}${x.image}`}
                                className="img-fluid"
                                alt="Imageworks"
                              />
                            </div>
                            <div className='desc'>
                              <div className='tag'>{x.type}</div>
                              <div className='name'>{x.title}</div>
                            </div>
                            <div className='icon'>
                              <span>
                                View Project
                              </span>
                            </div>
                          </Overlay>
                        </LinkWrap>
                        </div>
                      </div>
                    </div>
                  </div>
                </>)
              })
            }
            

            {/* <div className='col-12'>
              <ul className="pagination justify-content-center">
                <li className="page-item">
                  <div className="page-link">
                    <i className="fa fa-chevron-left"></i>
                  </div>
                </li>
                <li className="page-item">
                  <div className="page-link active">1</div>
                </li>
                <li className="page-item">
                  <div className="page-link">2</div>
                </li>
                <li className="page-item">
                  <div className="page-link">3</div>
                </li>
                <li className="page-item">
                  <div className="page-link">
                    <i className="fa fa-chevron-right"></i>
                  </div>
                </li>
              </ul>
            </div> */}

          </div>
       </section>
       </Reveal>

      <Footer />

    </div>
    
  );
};

export default withRouter(Works);
