import React from "react";
import styled, { css } from "styled-components";

const NavButton = ({ open, closing }) => {
  return (
    <Circle open={open}>
      <Bar1 />
      <Bar2 />
      <Bar3 />
    </Circle>
  );
};

export default NavButton;

const BaseBarStyle = styled.div`
  cursor: pointer;
  display: block;
  margin: 5px 0;
  height: 4px;
  background-color: white;
  transition: width 0.2s ease-in-out, transform 0.2s ease-in-out,
  opacity 0.2s ease-in-out;
`;

export const Bar1 = styled(BaseBarStyle)`
  width: 100%;
`;

export const Bar2 = styled(BaseBarStyle)`
  width: 61%;
`;

export const Bar3 = styled(BaseBarStyle)`
  width: 21%;
`;

const BaseCircle = styled.div`
  position: relative;
  width: 75px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const Circle = styled(BaseCircle)`
  ${({ open }) =>
    open
      ? css`
          padding: 0;
          width: 45px;

          ${Bar1} {
            margin: 0;
            position: absolute;
            width: 100%;
            top: 50%;
            background-color: black;
            transform: translateY(-50%) rotate(45deg);
          }
          ${Bar2} {
            opacity: 0;
            width: 0%;
          }
          ${Bar3} {
            margin: 0;
            position: absolute;
            width: 100%;
            top: 50%;
            background-color: black;
            transform: translateY(-50%) rotate(-45deg);
          }
        `
      : css`
          padding: 20px 15px;
        `}
`;
