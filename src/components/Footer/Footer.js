import React from "react";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  grid-gap: 4px;
  height: 60px;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #98a523;
  font-size: 14px;
  font-weight: 600;
  & a {
    color: #37724f;
  }
`;
const Footer = () => {
  return (
    <Div>
      &copy; {new Date().getFullYear()} . Developed by{" "}
      <a href="https://vidakhalili.ir">Vida Khalili</a>
    </Div>
  );
};

export default Footer;
