import styled, { css } from "styled-components";
import { workToCase } from "../animation/keyframes";


export const LinkWrap = styled.a`
  &::before{
    display: block;
    content: '';
    ${({ active }) =>
      active &&
      css`
        position: fixed;
        top: 0;
        right: 0;
        height: 100vh;
        width: 0%;
        background-color: #000;
        z-index: 9;
        animation: ${workToCase} 0.6s ease-in-out 0.2s 1;
        animation-fill-mode: forwards;
      `}
  }
  &:hover {
      cursor: pointer;
    }
`;

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 0px;
  background-color: rgba(0, 0, 0, 0.4);
  position: relative;
  transition: background-color 0.2s ease-in-out, opacity 0.2s ease-in-out;
  
`;


