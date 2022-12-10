import styled, { css } from "styled-components";
import theme from "./theme";
import { caseToWork, disappear } from "../animation/keyframes";

export const BackButton = styled.div`
  z-index: 10;
  padding: 19px;
  height: 75px;
  width: 75px;
  position: absolute;
  float: left;
  background-color: rgba(0,0,0,.6);
  transition: background-color 0.1s ease-in-out, border-radius 0.1s ease-in-out,
    opacity 0.3s ease-in-out;
  ${({ toBack }) =>
    toBack &&
    css`
      position: fixed;
      border-radius: 0 !important;
      left: 0;
      top: 0;
      z-index: 10;
      animation: ${caseToWork} 0.2s ease-in-out 0s 1;
      animation-fill-mode: forwards;

      > img {
        animation: ${disappear} 0s ease-in-out 0s 1;
        animation-fill-mode: forwards;
      }
      > span {
        animation: ${disappear} 0s ease-in-out 0s 1;
        animation-fill-mode: forwards;
      }
    `}
    background-color: ${({ hasBackground }) =>
    hasBackground && theme.colors.black};
  &:hover {
    cursor: pointer;
    background-color: rgba(0,0,0,.9);
  }
`;

export const BackArrow = styled.img`
  max-width: 100%;
  max-height: 100%;
  position: relative;
`;


export const CaseWrapper = styled.main`
  position: relative;
  height: auto;
  width: 100%;
  opacity: 1;
  z-index: 1;
`;

export const Hero = styled.section`
  height: 100vh;
  position: relative;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
`;


export const ClientTag = styled.h3`
  color: ${theme.colors.white};
  font-size: 0.87em;
  letter-spacing: 1px;
  text-transform: capitalize;
`;

export const Title = styled.h1`
  color: ${theme.colors.white};
  font-size: 3em;
  max-width: 80vw;
  text-transform: normal;
`;

export const TechniqueTitle = styled.p`
  color: ${theme.colors.white};
  font-size: 1em;
  line-height: normal;
  max-width: 80vw;
`;