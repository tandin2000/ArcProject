import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import config from '../config';

export default () => {
	const [data, setData] = useState([]);
	const [predata, setPreData] = useState([]);

  useEffect(() => {
    setData([])
      fetch(`${config.API}/process?populate=*`)
      .then(response => response.json())
      .then(data => {
        const dataPayload = data.data.attributes.process_procedures.data;
        setPreData(dataPayload)
      })
      .catch(error => {
        console.log(error);
      });
    }, []);

  useEffect(() => {
    setData([]);
    predata.map(x => {
      fetch(`${config.API}/process-procedures/${x.id}?populate=*`)
        .then(response => response.json())
        .then(data => {
          const dataPayload = data.data.attributes;
          const payload = {
            title: dataPayload.Title,
            description: dataPayload.Description,
            image: dataPayload.Image.data.attributes.url
          };
          setData(prev => [...prev, payload]);
        })
        .catch(error => {
          console.log(error);
        });
    });
  }, [predata]);

  // console.log(data)
  return(
  <section className='container-fluid'>
         {
         data.map(x=>{

           return(<>
           <div className='row m-2-hor'>
              
              <div className='col-md-6 pt-5'>
                <div className='col-home'>
                  <div className=''>
                    <img
                        src={`${config.API_ASSETS}${x.image}`}
                        className="img-fluid"
                        alt="#"
                      />
                  </div>
                </div>
              </div>
  
              <div className='col-md-6'>
                <div className='dflex-center'>
                  <div className='col-home mt-md-0 mt-5'>
                    <div className='heading'>{x?.title}</div>
                    <div className='content'>
                      {x?.description}
                    </div>
                   
                  </div>
                </div>
              </div>
              
            </div>
            <br/>
           </>
            )}
         )}
        </section>
)};
