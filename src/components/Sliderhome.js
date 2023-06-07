import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/vertical.css';
import config from '../config';
import { useHistory } from 'react-router-dom';

const content = [
  {
    title: "3D Design",
    description:
      "With precision",
    button: "More Detail",
    link: "/#",
    image: "./img/bg-1.jpg"
  },
  {
    title: "Interior Expertise",
    description:
      "Stylish living",
    button: "More Detail",
    link: "/#",
    image: "./img/bg-2.jpg"
  },
  {
    title: "Land of Residence",
    description:
      "According lifestyle",
    button: "More Detail",
    link: "/#",
    image: "./img/bg-3.jpg"
  }
];

export default () => {
  const history = useHistory();

  const [data, setData] = useState([])
  const [predata, setPreData] = useState([])

  useEffect(()=>{
    fetch(`${config.API}/home-page?populate=home_img_slides`)
    .then(response => response.json())
    .then(data => {
       const dataPayload = data.data.attributes.home_img_slides.data;
       setPreData(dataPayload)
    })
    .catch(error => {
        console.log(error);
    });
  },[])
  useEffect(()=>{
    setData([]);
    predata.map(x=>{
      fetch(`${config.API}/home-img-slides/${x.id}?populate=*`)
      .then(response => response.json())
      .then(data => {
        const dataPayload = data.data.attributes;
        const payload = {
          title: dataPayload.Title,
          description: dataPayload.Description,
          // button: "More Detail",
          // link: "/#",
          image: dataPayload.Image.data.attributes.url
        }
        setData(prev=>[...prev, payload])
      })
      .catch(error => {
          console.log(error);
      });
    })
  },[predata])
  return(
  <Slider className="slider-wrapper" autoplay={6000}>
            {data.map((item, index) => (
              <div
                key={index}
                className="slider-content"
                style={{ background: `url('${config.API_ASSETS}${item.image}') no-repeat center center` }}
              >
                <div className="inner">
                  <h1>{item.title}</h1>
                  <p>{item.description}</p>
                  {/* <button onClick={()=> window.open(item.link, "_self")}>
                    <span className="shine"></span>
                    <span>
                      {item.button}
                    </span>
                  </button> */}
                  <button onClick={()=> {
                    history.push('/Contact');window.scrollTo(0, 0);
                  }}>
                    <span className="shine"></span>
                    <span>
                      Add Quotation
                    </span>
                  </button>
                </div>
              </div>
            ))}
        </Slider>
)};
