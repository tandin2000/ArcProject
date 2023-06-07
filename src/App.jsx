import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./styles/animated-on3step.css";
import "./styles/main.scss";

import Preloader from "./components/Preloader";
import NavigationMenu from "./components/Nav";
import ScrollToTopBtn from './components/ScrollToTop';
import Home from "./pages/Home";
import Process from "./pages/Process";
import Work from "./pages/works";
import Contact from "./pages/Contact";
import Case from "./pages/detailCase";
import config from "./config";




function App() {
  const [loading, setLoading] = useState(true);
  const [navBackground, setNavBack] = useState(false);
  useEffect(()=>{
    fetch(`${config.API}/information?populate=*`)
    .then(response => response.json())
    .then(data => {
       const dataPayload = data.data.attributes;
       const payload = {
        "aboutUs":dataPayload.About_Us,
        "companyName":dataPayload.Company_Name,
        "CopyrightsYear":dataPayload.Copyrights_Year,
        "emailLink":dataPayload.Email_Link,
        "fbLink":dataPayload.Facebook_Link,
        "igLink":dataPayload.Instagram_Link,
        "ldLink":dataPayload.LinkedIn_link,
        "location":dataPayload.Location,
        "PhoneNumber":dataPayload.Phone_Number,
        "twLink":dataPayload.Twitter_Link,
        "logoImg":dataPayload.Logo.data.attributes.url
       } 
       localStorage.setItem('info', JSON.stringify(payload));
    })
    .catch(error => {
        console.log(error);
    });
   },[])

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [loading]);

  return (
    <Router>
      {loading ? (
        <Preloader />
      ) : (
        <div className="App">
          <NavigationMenu
            firstTime={loading}
            hasBackground={navBackground}
            setBackground={state => setNavBack(state)}
          />
          <Route path="/" exact component={Home} />
          <Route path="/Process" exact component={Process} />
          <Route path="/Work" exact component={Work} />
          <Route path="/Contact" exact component={Contact} />
          <Route
            path="/detailcase"
            component={() => (
              <Case setNavBackground={state => setNavBack(state)} />
            )}
          />
        
          
        <ScrollToTopBtn />  
        </div>
      )}
    </Router>
  );
}

export default App;