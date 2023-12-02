import React from "react";
import "../styles/normalize.css";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import styled from "styled-components";

const StyledDiv = styled.div`
  font-family: "Montserrat", sans-serif;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f9f7e8;
  padding: 16px;
`;

const StyledMain = styled.main`
  flex: 1;
`;
const Layout = ({ children }) => {
  return (
    <StyledDiv>
      <Header />
      <StyledMain>{children}</StyledMain>
      <Footer />
    </StyledDiv>
  );
};

export default Layout;
