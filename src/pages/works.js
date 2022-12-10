import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import Reveal from 'react-reveal/Reveal';

import {
  LinkWrap,
  Overlay
} from "../styles/Work.styles";

import Footer from '../components/Footer';

import { Efect, Efect1, Efect2  } from "../styles/effect.styles";
  

const Works = ({ history }) => {
const [toCase, setCase] = useState("");
const [coord, setCoords] = useState();

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

            <div className='col-md-4 slick slickproject p-3'>
              <div className='slick-slide d-block'>
                <div>
                  <div className='itm'>
                  <LinkWrap active={toCase === "/detailcase"}>
                    <Overlay active={!!toCase} onMouseDown={e => setCoords(e.nativeEvent.x)}
                      onMouseUp={e => handleCaseSwap(e.nativeEvent, "/detailcase")}>
                      <div className='bg'>
                        <img
                          src="./img/projects/img-1.jpg"
                          className="img-fluid"
                          alt="Imageworks"
                        />
                      </div>
                      <div className='desc'>
                        <div className='tag'>Interior</div>
                        <div className='name'>Entertainment Unit</div>
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

            <div className='col-md-4 slick slickproject p-3'>
              <div className='slick-slide d-block'>
                <div>
                  <div className='itm'>
                  <LinkWrap active={toCase === "/detailcase"}>
                    <Overlay active={!!toCase} onMouseDown={e => setCoords(e.nativeEvent.x)}
                      onMouseUp={e => handleCaseSwap(e.nativeEvent, "/detailcase")}>
                      <div className='bg'>
                        <img
                          src="./img/projects/img-2.jpg"
                          className="img-fluid"
                          alt="Imageworks"
                        />
                      </div>
                      <div className='desc'>
                        <div className='tag'>Furniture</div>
                        <div className='name'>Mounted Unit</div>
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

            <div className='col-md-4 slick slickproject p-3'>
              <div className='slick-slide d-block'>
                <div>
                  <div className='itm'>
                  <LinkWrap active={toCase === "/detailcase"}>
                    <Overlay active={!!toCase} onMouseDown={e => setCoords(e.nativeEvent.x)}
                      onMouseUp={e => handleCaseSwap(e.nativeEvent, "/detailcase")}>
                      <div className='bg'>
                        <img
                          src="./img/projects/img-3.jpg"
                          className="img-fluid"
                          alt="Imageworks"
                        />
                      </div>
                      <div className='desc'>
                        <div className='tag'>Interior</div>
                        <div className='name'>Contemporary Wall</div>
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

            <div className='col-md-4 slick slickproject p-3'>
              <div className='slick-slide d-block'>
                <div>
                  <div className='itm'>
                  <LinkWrap active={toCase === "/detailcase"}>
                    <Overlay active={!!toCase} onMouseDown={e => setCoords(e.nativeEvent.x)}
                      onMouseUp={e => handleCaseSwap(e.nativeEvent, "/detailcase")}>
                      <div className='bg'>
                        <img
                          src="./img/projects/img-4.jpg"
                          className="img-fluid"
                          alt="Imageworks"
                        />
                      </div>
                      <div className='desc'>
                        <div className='tag'>Interior</div>
                        <div className='name'>Crockery Wall</div>
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

            <div className='col-md-4 slick slickproject p-3'>
              <div className='slick-slide d-block'>
                <div>
                  <div className='itm'>
                  <LinkWrap active={toCase === "/detailcase"}>
                    <Overlay active={!!toCase} onMouseDown={e => setCoords(e.nativeEvent.x)}
                      onMouseUp={e => handleCaseSwap(e.nativeEvent, "/detailcase")}>
                      <div className='bg'>
                        <img
                          src="./img/projects/img-5.jpg"
                          className="img-fluid"
                          alt="Imageworks"
                        />
                      </div>
                      <div className='desc'>
                        <div className='tag'>Interior</div>
                        <div className='name'>Entertainment Unit</div>
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

            <div className='col-md-4 slick slickproject p-3'>
              <div className='slick-slide d-block'>
                <div>
                  <div className='itm'>
                  <LinkWrap active={toCase === "/detailcase"}>
                    <Overlay active={!!toCase} onMouseDown={e => setCoords(e.nativeEvent.x)}
                      onMouseUp={e => handleCaseSwap(e.nativeEvent, "/detailcase")}>
                      <div className='bg'>
                        <img
                          src="./img/projects/img-2.jpg"
                          className="img-fluid"
                          alt="Imageworks"
                        />
                      </div>
                      <div className='desc'>
                        <div className='tag'>Furniture</div>
                        <div className='name'>Mounted Unit</div>
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

            <div className='col-12'>
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
            </div>

          </div>
       </section>
       </Reveal>

      <Footer />

    </div>
    
  );
};

export default withRouter(Works);
