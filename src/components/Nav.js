import React, { useState, useEffect } from "react";
import {
  Wrapper,
  Container,
  Body,
  Page,
  LinkTag,
  SocialContainer,
  Overlaybg
} from "../styles/Navigation.styles";
import { withRouter } from "react-router";
import NavButton from "./NavButton";
import config from "../config";

const NavigationMenu = ({ history, hasBackground, setBackground }) => {
  const [isOn, setState] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [linking, setLink] = useState("");
  const [data, setData] = useState({});

  useEffect(()=>{
    const storedData = localStorage.getItem('info');
    const parsedData = JSON.parse(storedData);
    setData(parsedData)
  },[]);


  useEffect(() => {
    !!linking &&
      setTimeout(() => {
        switch (linking) {
          case "home":
            history.push("/");
            setState(false);
            setLink("");
            break;
          case "Process":
            history.push("/Process");
            setState(false);
            setLink("");
            break;
          case "Projects":
            history.push("/work");
            setState(false);
            setLink("");
            break;
          
          case "contact":
            history.push("/contact");
            setState(false);
            setLink("");
            break;
          default:
            setLink("");
        }
        setBackground(false);
        window.scrollTo(0, 0);
      }, 0);
  }, [linking, history, setBackground]);

  useEffect(() => {
    shouldAnimate &&
      !isOn &&
      setTimeout(() => {
        setShouldAnimate(false);
      }, 0);
  }, [shouldAnimate, isOn]);

  const closeHandler = () => {
    setShouldAnimate(true);
    setState(!isOn);
  };

  const setLinkHandler = text => {
    setShouldAnimate(true);
    setLink(text);
  };

  useEffect(() => {
    const header = document.getElementById("header");
    const totop = document.getElementById("scroll-to-top")
    const sticky = header.offsetTop;
    const scrollCallBack = window.addEventListener("scroll", () => {
    if (window.pageYOffset > sticky + 0) {
      header.classList.add("sticky");
      totop.classList.add("show");
    } else {
      header.classList.remove("sticky");
      totop.classList.remove("show");
    } 
    });
    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
    }, []);

  return (
    <header>
      <div id='header'></div>
      <div className='logo'>
        <img
          src={`${config.API_ASSETS}${data?.logoImg}`}
          className="img-fluid"
          alt="#"
        />
        <span className='callus'>
          Call Us: <a href={`tel:${data?.PhoneNumber}`} style={{fontSize: '0.9rem', fontWeight: 600, color: 'white', textDecoration: 'none'}}>{data?.PhoneNumber}</a>
        </span>
      </div>
      <Wrapper open={isOn} shouldAnimate={shouldAnimate}>
        <Overlaybg open={isOn} shouldAnimate={shouldAnimate} onClick={closeHandler}/>
        <Container
          open={isOn}
          onClick={closeHandler}
          hasBackground={hasBackground}>
          <NavButton open={isOn} />
        </Container>
        <Body className='midwrpr' open={isOn} shouldAnimate={shouldAnimate}>
          <div className='conPage'>
              <Page className='mainBtn' variant="home" onClick={() => setLinkHandler("home")}>
                  <LinkTag>Home</LinkTag>
              </Page>
              <Page className='mainBtn' variant="Process" onClick={() => setLinkHandler("Process")}>
                  <LinkTag>Process</LinkTag>
              </Page>
              <Page className='mainBtn' variant="Projects" onClick={() => setLinkHandler("Projects")}>
                  <LinkTag>Projects</LinkTag>
              </Page>
              <Page className='mainBtn' variant="about" onClick={() => setLinkHandler("contact")}>
                  <LinkTag>Contact</LinkTag>
              </Page>
          </div>

          <div className='info'>
            <span> <a href={`tel:${data?.PhoneNumber}`}  style={{ opacity: "0.9", color: '#111', textDecoration: 'none'}}>{data?.PhoneNumber}</a></span>
            <span> <a href={`mailto:${data?.emailLink}`} className="link" style={{ opacity: "0.9", color: '#111', textDecoration: 'none'}}>{data?.emailLink}</a></span>
            <span>{data?.location}</span>
          </div>

        </Body>
        <SocialContainer className='soc-icon' open={isOn}>
            <span>Follow us:</span>
            <span className='socicon'> <a href={data?.fbLink} target="_blank"><i className="fa fa-facebook-f"></i></a></span>
            <span className='socicon'> <a href={data?.ldLink} target="_blank"><i className="fa fa-linkedin"></i></a></span>
            <span className='socicon'> <a href={data?.twLink} target="_blank"><i className="fa fa-twitter"></i></a></span>
            <span className='socicon'> <a href={data?.igLink} target="_blank"><i className="fa  fa-instagram"></i></a></span>
        </SocialContainer>
      </Wrapper>
    </header>
  );
};

export default withRouter(NavigationMenu);
