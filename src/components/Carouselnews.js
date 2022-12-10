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
      dots: false,
      infinite: false,
      speed: 500,
      autoPlay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 5000,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: false,
            dots: false
          }
        },
        {
          breakpoint: 1600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: false,
            dots: false
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: false,
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
      <div className='slick slicknews'>
        <Slider {...settings}>

          <CustomSlide className='itm' index={1}>
            <div className='bg'>
              <img
                src="./img/news/img1.jpg"
                className="img-fluid"
                alt="Imageteam"
              />
            </div>
            <div className='desc'>
              <div className='date'> Sept 08, 2020</div>
              <div className='name'>Pacific Region Awards</div>
              <div className='content'>
                Make the most of compact spaces with space saving furniture 
                that are ingenuous and innovative. 
              </div>
            </div>
           
          </CustomSlide>

          <CustomSlide className='itm' index={2}>
            <div className='bg'>
              <img
                src="./img/news/img2.jpg"
                className="img-fluid"
                alt="Imageteam"
              />
            </div>
            <div className='desc'>
              <div className='date'> Sept 08, 2020</div>
              <div className='name'>Pacific Region Awards</div>
              <div className='content'>
                Make the most of compact spaces with space saving furniture 
                that are ingenuous and innovative. 
              </div>
            </div>
           
          </CustomSlide>

          <CustomSlide className='itm' index={3}>
            <div className='bg'>
              <img
                src="./img/news/img3.jpg"
                className="img-fluid"
                alt="Imageteam"
              />
            </div>
           <div className='desc'>
              <div className='date'> Sept 08, 2020</div>
              <div className='name'>Pacific Region Awards</div>
              <div className='content'>
                Make the most of compact spaces with space saving furniture 
                that are ingenuous and innovative. 
              </div>
            </div>
            
          </CustomSlide>

          <CustomSlide className='itm' index={4}>
            <div className='bg'>
              <img
                src="./img/news/img4.jpg"
                className="img-fluid"
                alt="Imageteam"
              />
            </div>
            <div className='desc'>
              <div className='date'> Sept 08, 2020</div>
              <div className='name'>Pacific Region Awards</div>
              <div className='content'>
                Make the most of compact spaces with space saving furniture 
                that are ingenuous and innovative. 
              </div>
            </div>
           
          </CustomSlide>

        </Slider>
      </div>
    );
  }
}
