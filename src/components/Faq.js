import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";
import config from "../config";

const styles = {
  // bgColor: 'white',
  titleTextColor: "#000",
  rowTitleColor: "#000",
  // rowContentColor: 'grey',
  // arrowColor: "red",
};

const configg = {
   animate: true,
  // arrowIcon: "V",
  // tabFocus: true
};
export default () => {


  const [data, setData] = useState([]);
  useEffect(()=>{
    fetch(`${config.API}/home-page?populate=home_faqs`)
    .then(response => response.json())
    .then(data => {
      const dataPayload = data.data.attributes.home_faqs.data;
      let initPayload = []
      dataPayload.map(x=>{

        const value = {
          title: x.attributes.Question,
          content: x.attributes.Answer,
        }

        initPayload.push(value)
      })
      const finalValue = {
        title: "FAQ",
        rows: initPayload
      }
      setData(finalValue)
    })
    .catch(error => {
        console.log(error);
    });
  },[])
  return(
  <section className='container-fluid pt-0' id='listcomplish'>
          <div>
              <Faq
                data={data}
                styles={styles}
                config={configg}
            />
        </div>
        </section>
)};
