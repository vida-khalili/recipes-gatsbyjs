import React from "react";
import styled from "styled-components";

const ContactForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("ok!");
  };
  return (
    <Form onSubmit={handleSubmit}>
      <InputWrapper>
        <Label htmlFor="name">name</Label>
        <Input type="text" name="name" placeholder="name" autoComplete="off" />
      </InputWrapper>
      <InputWrapper>
        <Label htmlFor="email">email</Label>
        <Input
          type="text"
          name="email"
          placeholder="email"
          autoComplete="off"
        />
      </InputWrapper>
      <InputWrapper>
        <Label htmlFor="text">massage</Label>
        <Textarea
          rows="7"
          name="text"
          placeholder="type your massage here..."
          autoComplete="off"
        ></Textarea>
      </InputWrapper>
      <SubmitButton>Send</SubmitButton>
    </Form>
  );
};

const InputWrapper = styled.div`
  display: grid;
  gap: 8px;
  text-align: left;
`;

const Form = styled.form`
  border-radius: 16px;
  background-color: #92a63d;
  padding: 30px 24px;
  display: grid;
  gap: 16px;
  @media screen and (max-width: 400px) {
    padding: 30px 20px;
  }
`;
const Input = styled.input`
  border-radius: 8px;
  border: none;
  width: 300px;
  padding: 8px 16px;
  @media screen and (max-width: 400px) {
    width: 250px;
  }
`;
const Textarea = styled.textarea`
  width: 300px;
  padding: 8px 16px;
  border-radius: 8px;
  border: none;
  @media screen and (max-width: 400px) {
    width: 250px;
  }
`;
const Label = styled.label`
  font-weight: 700;
  text-transform: capitalize;
`;

const SubmitButton = styled.button`
  color: #313131;
  border-radius: 8px;
  background-color: #f9f7e8;
  border: none;
  letter-spacing: 2px;
  cursor: pointer;
  padding: 8px;
  font-family: "Antonio";
  font-weight: 600;
  transition: all 200ms ease-in-out;
  &:hover {
    background-color: #377254;
    color: white;
  }
`;

export default ContactForm;
