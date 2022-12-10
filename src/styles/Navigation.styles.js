import styled, { css } from "styled-components";
import theme from "./theme";
import {
  openSpan,
  loadImage,
  openNavigation,
  openNavigationM,
  closeNavigation,
  disappear
} from "../animation/keyframes";
import { Bar1, Bar2, Bar3 } from "../components/NavButton";

export const Wrapper = styled.div`
  z-index: 999;
  right: 30px;
  top: 0;
  position: fixed;
  display: flex;
  align-items: center;
  transition: all 0.3s ease;
  box-shadow: 0 0 65px rgba(0, 0, 0, .07);
  opacity: 1;

  ${({ open, shouldAnimate, hasBackground }) =>
    !shouldAnimate
      ? css`
          &:hover {
            
          }
        `
      : open
      ? css`
          animation: ${openNavigation(hasBackground)} 0.3s cubic-bezier(0.215, 0.610, 0.355, 1.000) 0s 1
            normal forwards;
          @media (max-width: 419px) {
            animation: ${openNavigationM(hasBackground)} 0.3s cubic-bezier(0.215, 0.610, 0.355, 1.000) 0s 1 normal forwards;
          } 
        `
      : css`
            right: 30px;
            top: 0px;
            border-radius: 0;
            width: 100%;
            height: 100%;
            background-color: ${theme.colors.white}
            animation: ${closeNavigation} 0.4s cubic-bezier(0.215, 0.610, 0.355, 1.000) 0.3s 1 normal forwards;      
          `}
`;

export const Overlaybg = styled.div`
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0,0,0,0);
  z-index: 1;
  ${({ open, shouldAnimate }) =>
    open
      ? css`
          width: 100vw; height: 100vh;
        `
      : css`
          ${shouldAnimate && `display: block;`}
          animation: ${disappear} 0.3s cubic-bezier(0.215, 0.610, 0.355, 1.000) 0s 1 normal;
          animation-fill-mode: forwards;
        `}
`;

export const Body = styled.div`
  opacity: 0;
  display: none;
  z-index: 2;
  ${({ open, shouldAnimate }) =>
    open
      ? css`
          display: block;
          animation: ${loadImage} 0.3s cubic-bezier(0.215, 0.610, 0.355, 1.000) 0.5s 1 normal forwards;
        `
      : css`
          ${shouldAnimate && `display: block;`}
        `}
      position: relative;
      text-align: left;
      margin-left: 10%;
      transition: width 0.2s;
`;

export const Page = styled.div`

  &:hover {
    color: maincolor;
    cursor: pointer;

    > a {
      cursor: pointer;
      opacity: .8;
    }

  }
`;

export const LinkTag = styled.a`
  display: block;
  opacity: 1;
  text-decoration: none;
  transition: color 0.1s cubic-bezier(0.215, 0.610, 0.355, 1.000), opacity 0.1s cubic-bezier(0.215, 0.610, 0.355, 1.000),
  transform 0.1s cubic-bezier(0.215, 0.610, 0.355, 1.000);
  &:hover {
    text-decoration: none;
    cursor: pointer;
  }
`;

export const Spanner = styled.span`
  height: 200%;
  width: 0;
  position: fixed;
  top: -50vh;
  left: -50vw;
  transition: width 0.4s cubic-bezier(0.215, 0.610, 0.355, 1.000), height 0.4s cubic-bezier(0.215, 0.610, 0.355, 1.000);

  ${({ opening }) =>
    opening &&
    css`
      min-width: 100%;
      z-index: 8;
      animation: ${openSpan} 0.6s cubic-bezier(0.215, 0.610, 0.355, 1.000);
    `}
`;

export const SocialContainer = styled.div`
  list-style: none;
  opacity: 0;
  z-index: 1;
  display: ${({ open }) => (open ? "block" : "none")};
  ${({ open }) =>
    open
      ? css`
          display: block;
          animation: ${loadImage} 0.3s cubic-bezier(0.215, 0.610, 0.355, 1.000) 0.5s 1 normal forwards;
        `
      : css`
          display: none;
        `}
`;


export const Container = styled.div`
  position: absolute;
  transition: height 0.1s cubic-bezier(0.215, 0.610, 0.355, 1.000), background-color 0.1s cubic-bezier(0.215, 0.610, 0.355, 1.000), border-radius 0.1s cubic-bezier(0.215, 0.610, 0.355, 1.000);
  
  ${({ open, hasBackground }) =>
    !open
      ? `
			right: 0;		
			top: 0;
			z-index: 5;
      background-color: ${theme.colors.black};
		`
      : `
			top: 5%;
			left: 5%;
			width: 50px;
      height: 50px;
      z-index: 9999;
		`}

  &:hover {
    cursor: pointer;
    background-color: ${({ open }) => !open && theme.colors.black};
    ${Bar1}, ${Bar2}, ${Bar3} {
      width: 100% !important;
    }
  }
`;
