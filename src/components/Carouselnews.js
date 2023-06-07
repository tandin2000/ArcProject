import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import config from "../config";

const CustomSlide = ({ index, ...props }) => {
  return <div {...props}></div>;
};

const Responsive = () => {
  const [data, setData] = useState([]);
  const [predata, setPreData] = useState([]);

  useEffect(() => {
    fetch(`${config.API}/home-page?populate=home_latest_news`)
      .then(response => response.json())
      .then(data => {
        const dataPayload = data.data.attributes.home_latest_news.data;
        setPreData(dataPayload);
        
        const newSettings = {
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

        setSettings(newSettings);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

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

  useEffect(() => {
    setData([]);
    predata.map(x => {
      fetch(`${config.API}/home-latest-newss/${x.id}?populate=*`)
        .then(response => response.json())
        .then(data => {
          const dataPayload = data.data.attributes;
          const payload = {
            title: dataPayload.Title,
            description: dataPayload.Description,
            image: dataPayload.Image.data.attributes.url,
            date: formatDate(dataPayload.Date)
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
    <div className='slick slicknews'>
      {data.length > 0 && (
        <Slider {...settings}>
          {data.map((x, index) => {
            return (
              <CustomSlide className='itm' index={index}>
                <div className='bg'>
                  <img
                    src={`${config.API_ASSETS}${x.image}`}
                    className="img-fluid"
                    alt="Imageteam"
                  />
                </div>
                <div className='desc'>
                  <div className='date'> {x?.date}</div>
                  <div className='name'>{x?.title}</div>
                  <div className='content'>{x?.description}</div>
                </div>
              </CustomSlide>
            );
          })}
        </Slider>
      )}
    </div>
  );
};

export default Responsive;
