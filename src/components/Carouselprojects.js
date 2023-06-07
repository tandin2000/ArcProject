import React, { Component } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState } from "react";
import { useEffect } from "react";
import config from "../config";


const CustomSlide = ({ index, ...props }) => {
  return <div {...props}></div>;
};


const Responsive = () => {
  const [data, setData] = useState([]);
  const [predata, setPreData] = useState([]);
  
  useEffect(() => {
    fetch(`${config.API}/home-page?populate=home_our_projects`)
      .then(response => response.json())
      .then(data => {
        const dataPayload = data.data.attributes.home_our_projects.data;
        setPreData(dataPayload);
        
        const newSettings = {
          dots: true,
          infinite: false,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          autoplay: true,
          speed: 5000,
          autoplaySpeed: 2000,
          responsive: [
            {
              breakpoint: 5000,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 1600,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        }

        setSettings(newSettings);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    setData([]);
    predata.map(x => {
      fetch(`${config.API}/home-our-projects/${x.id}?populate=*`)
        .then(response => response.json())
        .then(data => {
          const dataPayload = data.data.attributes;
          const payload = {
            title: dataPayload.Title,
            catagory: dataPayload.Catagory,
            image: dataPayload.Image.data.attributes.url
          };
          setData(prev => [...prev, payload]);
        })
        .catch(error => {
          console.log(error);
        });
    });
  }, [predata]);

  const [settings, setSettings] = useState(null);
  

  if (!settings) {
    // Settings not yet fetched, display loading state or fallback content
    return <div>Loading...</div>;
  }

    return (
      <div className='slick slickproject'>
        <Slider {...settings}>
          {data.map((x, index) => {
            return (
            <CustomSlide className='itm' index={index}>
              <div className='bg'>
                <img
                  src={`${config.API_ASSETS}${x?.image}`}
                  className="img-fluid"
                  alt="Imageteam"
                />
              </div>
              <div className='desc'>
                <div className='tag'>{x?.title}</div>
                <div className='name'>{x?.catagory}</div>
              </div>
              {/* <div className='icon'>
                <span onClick={()=> window.open("#", "_self")}>
                  View Project
                </span>
             </div> */}
            </CustomSlide>
          )
          })}
        </Slider>
      </div>
    );
  }

  export default Responsive;
