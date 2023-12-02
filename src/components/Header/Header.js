import { Link } from "gatsby";
import React, { useState } from "react";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";

const linksToPaths = [
  { name: "home", path: "/" },
  { name: "recipes", path: "/recipes" },
  { name: "about", path: "/about" },
  { name: "contact", path: "/contact" },
];

const StyledNav = styled.nav`
  padding: 8px 32px;
  height: 80px;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    justify-content: space-between;
    min-height: 60px;
    height: auto;
    padding: 8px 0;
  }
`;

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex: 1;
  gap: 24px;
  font-weight: 700;
  letter-spacing: 2px;
  font-family: "Antonio", sans-serif;
  justify-content: center;
  align-items: center;
  color: #98a523;
  font-size: 18px;
  text-transform: capitalize;
  @media (max-width: 768px) {
    display: ${(props) => (props.display ? "flex" : "none")};
    font-size: 14px;
    flex-direction: column;
    position: absolute;
    top: 60px;
    width: 100%;
    padding: 0;
    background-color: #f9f7e8;
    & li {
      width: 100%;
      text-align: center;
      border-bottom: 2px solid #37724f5c;
      padding: 8px;
    }
  }

  & li a.active {
    color: #37724f;
  }

  & li:last-child {
    display: flex;
    justify-content: flex-end;
  }
`;
const Form = styled.form`
  max-width: 320px;
  @media (max-width: 768px) {
    margin: 0 auto;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  background-color: transparent;
`;

const Button = styled.button`
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
      <div>Logo</div>
      <Button
        onClick={() => {
          setShow(!show);
        }}
      >
        <GiHamburgerMenu color="white" />
      </Button>
      <Ul display={show}>
        {linksToPaths.map((path, index) => (
          <li>
            <Link to={path.path} activeClassName="active">
              {path.name}
            </Link>
          </li>
        ))}
        <li>
          <Form>
            <Input type="text" placeholder="" />
          </Form>
        </li>
      </Ul>
    </StyledNav>
  );
};

export default Header;
