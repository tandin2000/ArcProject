import React, { useEffect, useState } from 'react';
import config from '../config';

export default () => {
  const [data, setData] = useState({});
  const [predata, setPreData] = useState();

  const formatList = (content) => {
    const optionsArray = content.split("\n");
    return optionsArray;
    };

  useEffect(()=>{
    fetch(`${config.API}/home-page?populate=home_intro`)
    .then(response => response.json())
    .then(data => {
       const dataPayload = data.data.attributes.home_intro.data;
       setPreData(dataPayload)
    })
    .catch(error => {
        console.log(error);
    });
  },[])

  useEffect(()=>{
    setData([]);
    if(predata?.id !== undefined){
      fetch(`${config.API}/home-intros/${predata?.id}?populate=*`)
      .then(response => response.json())
      .then(data => {
        const dataPayload = data.data.attributes;
        const listArray = formatList(dataPayload.List);
        const payload = {
          title: dataPayload.Title,
          description: dataPayload.Description,
          image: dataPayload.Image.data.attributes.url,
          list:listArray
        }
        setData(payload)
      })
      .catch(error => {
          console.log(error);
      });
    }
  },[predata])

  return(
  <section className='container-fluid'>
          <div className='row m-2-hor'>
            
            <div className='col-md-6 pt-5'>
              <div className='col-home'>
                <div className='thumb'>
                  <img
                      src={`${config.API_ASSETS}${data?.image}`}
                      className="img-fluid"
                      alt="#"
                    />
                </div>
              </div>
            </div>

            <div className='col-md-6'>
              <div className='dflex-center'>
                <div className='col-home mt-md-0 mt-5'>
                  <div className='heading'>{data?.title}</div>
                  <div className='content'>{data?.description}</div>
                  <ul className='list-home'>
                    {data?.list !== undefined && data?.list.map(x=>{
                      return <li>{x}</li>
                    })}
                  </ul>
                </div>
              </div>
            </div>
            
          </div>
        </section>
)};
