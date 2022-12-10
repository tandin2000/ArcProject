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

const NavigationMenu = ({ history, hasBackground, setBackground }) => {
  const [isOn, setState] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [linking, setLink] = useState("");

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
          src="./img/logowhite.png"
          className="img-fluid"
          alt="#"
        />
        <span className='callus'>
          Call Us: (+9401) 000 888 999
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
            <span>(+9401) 000 888 999</span>
            <span className='link'>support@react.com</span>
            <span>129 Park street, Colombo 10903</span>
          </div>

        </Body>
        <SocialContainer className='soc-icon' open={isOn}>
            <span>Follow us:</span>
            <span className='socicon'><i className="fa fa-facebook-f"></i></span>
            <span className='socicon'><i className="fa fa-linkedin"></i></span>
            <span className='socicon'><i className="fa fa-twitter"></i></span>
            <span className='socicon'><i className="fa  fa-instagram"></i></span>
        </SocialContainer>
      </Wrapper>
    </header>
  );
};

export default withRouter(NavigationMenu);
