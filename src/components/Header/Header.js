import { Link } from "gatsby";
import React, { useState } from "react";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";

import { StaticImage } from "gatsby-plugin-image";

const linksToPaths = [
  { name: "home", path: "/" },
  { name: "recipes", path: "/recipes" },
  { name: "about", path: "/about" },
  { name: "contact", path: "/contact" },
];

const StyledNav = styled.nav`
  position: relative;
  z-index: 10;
  padding: 0 32px;
  height: 80px;
  gap: 32px;
  display: grid;
  grid-template-columns: 0.5fr 1fr 1fr;
  justify-items: center;
  align-items: center;
  .logo {
    margin-right: auto;
    width: 100px;
  }
  .decoration-leaf {
    position: absolute;
    top: -50px;
    width: 200px;
    left: 200px;
    @media (max-width: 1400px) {
      width: 200px;
      left: 150px;
    }
    @media (max-width: 1200px) {
      display: none;
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: 0.5fr 1fr 0.5fr;
    gap: 16px;
    justify-items: flex-end;
    min-height: 60px;
    height: auto;
    padding: 8px 0;
    .logo {
      width: 80px;
    }
  }
`;

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex: 1;
  gap: 32px;
  font-weight: 600;
  letter-spacing: 4px;
  font-family: "Antonio", sans-serif;
  justify-content: center;
  align-items: center;
  color: #98a523;
  font-size: 18px;
  text-transform: capitalize;
  @media (max-width: 768px) {
    z-index: 10;
    display: ${(props) => (props.display === "true" ? "flex" : "none")};
    font-size: 14px;
    flex-direction: column;
    gap: 0;
    position: absolute;
    top: 60px;
    padding: 0;
    background-color: #f9f7e8;
    box-shadow: 0px 0px 5px 1px #80808073;
    border-radius: 16px;
    padding: 8px;
    width: 320px;
    & li {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      text-align: center;
      border-bottom: 2px solid #37724f5c;
      padding: 16px;
    }
    & li:last-child {
      border: none;
    }
  }

  & li a.active {
    color: #37724f;
  }
`;
const Form = styled.form`
  width: 100%;
  @media (max-width: 768px) {
    margin: 0 auto;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 8px 16px;
  background-color: transparent;
  border-radius: 16px;
`;

const Button = styled.button`
  width: ${(props) => props.width || "100%"};
  padding: 8px;
  align-items: center;
  justify-content: center;
  background-color: #37724f;
  border: none;
  border-radius: 8px;
  color: white;
  cursor: pointer;
  display: none;
  @media (max-width: 768px) {
    display: flex;
  }
`;
const Header = () => {
  const [show, setShow] = useState(false);

  return (
    <StyledNav>
      <StaticImage
        src="../../assets/images/logo.svg"
        alt="logo"
        className="logo"
      />
      <StaticImage
        src="../../assets/images/leaf.svg"
        alt="decoration leaf"
        className="decoration-leaf"
      />

      <Ul display={show.toString()}>
        {linksToPaths.map((path, index) => (
          <li key={index}>
            <Link to={path.path} activeClassName="active">
              {path.name}
            </Link>
          </li>
        ))}
      </Ul>
      <Form>
        <Input type="text" placeholder="Search..." autoComplete="off" />
      </Form>
      <Button
        width={"50px"}
        onClick={() => {
          setShow(!show);
        }}
      >
        <GiHamburgerMenu color="white" />
      </Button>
    </StyledNav>
  );
};

export default Header;
