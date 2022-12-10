import React, { Component } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


class CustomSlide extends Component {

  render() {
    const { index, ...props } = this.props;
      return (
        <div {...props}></div>
      );
  }
}

export default class Responsive extends Component {

  render() {
    var settings = {
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
    };

    return (
      <div className='slick slickproject'>
        <Slider {...settings}>

          <CustomSlide className='itm' index={1}>
            <div className='bg'>
              <img
                src="./img/projects/img-1.jpg"
                className="img-fluid"
                alt="Imageteam"
              />
            </div>
            <div className='desc'>
              <div className='tag'>Interior</div>
              <div className='name'>Entertainment Unit</div>
            </div>
            <div className='icon'>
               <span onClick={()=> window.open("#", "_self")}>
                View Project
              </span>
            </div>
          </CustomSlide>

          <CustomSlide className='itm' index={2}>
            <div className='bg'>
              <img
                src="./img/projects/img-2.jpg"
                className="img-fluid"
                alt="Imageteam"
              />
            </div>
            <div className='desc'>
              <div className='tag'>Furniture</div>
              <div className='name'>Mounted Unit</div>
            </div>
            <div className='icon'>
               <span onClick={()=> window.open("#", "_self")}>
                View Project
              </span>
            </div>
          </CustomSlide>

          <CustomSlide className='itm' index={3}>
            <div className='bg'>
              <img
                src="./img/projects/img-3.jpg"
                className="img-fluid"
                alt="Imageteam"
              />
            </div>
            <div className='desc'>
              <div className='tag'>Interior</div>
              <div className='name'>Contemporary Wall</div>
            </div>
            <div className='icon'>
               <span onClick={()=> window.open("#", "_self")}>
                View Project
              </span>
            </div>
          </CustomSlide>

          <CustomSlide className='itm' index={4}>
            <div className='bg'>
              <img
                src="./img/projects/img-4.jpg"
                className="img-fluid"
                alt="Imageteam"
              />
            </div>
            <div className='desc'>
              <div className='tag'>Furniture</div>
              <div className='name'>Crockery Unit</div>
            </div>
            <div className='icon'>
               <span onClick={()=> window.open("#", "_self")}>
                View Project
              </span>
            </div>
          </CustomSlide>

          <CustomSlide className='itm' index={4}>
            <div className='bg'>
              <img
                src="./img/projects/img-5.jpg"
                className="img-fluid"
                alt="Imageteam"
              />
            </div>
            <div className='desc'>
              <div className='tag'>Furniture</div>
              <div className='name'>Crockery Unit</div>
            </div>
            <div className='icon'>
               <span onClick={()=> window.open("#", "_self")}>
                View Project
              </span>
            </div>
          </CustomSlide>

        </Slider>
      </div>
    );
  }
}
