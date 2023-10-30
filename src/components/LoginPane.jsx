import React, { useState } from "react";
import styled from "styled-components";

import { Input } from "./Inputs";

const LoginDialogue = styled.div`
  width: 90%;
  height: 90%;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 576px) {
    width: 100vw;
  }
`;

const LoginText = styled.h1`
  font-size: 3rem;
  font-weight: bold;
`;

const Button = styled.button`
  width: 300px;
  height: 50px;
  background-color: #000;
  color: white;
  font-size: 16px;
  font-weight: bold;
  border-radius: 4px;
  margin-top: 20px;

  &:hover {
    cursor: pointer;
    background-color: #333;
  }
`;

const Checkbox = styled.input`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

const Hyperlink = styled.a`
  color: blue;
  text-decoration: none;

  &:hover {
    color: darkblue;
  }
`;

export function LoginPane() {
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // TODO: Implement login logic here
  };

  return (
    <LoginDialogue>
      <LoginText>Login</LoginText>

      <Input />

      <Input password />




      <Checkbox type="checkbox" /> Remember Me

      <Checkbox type="checkbox" /> Agree to Terms & Conditions

      <Hyperlink>Change Password</Hyperlink>

      <Button onClick={handleLogin}>Login</Button>

      <p>
        Don't have an account? <Hyperlink to="/register">Register
          Here</Hyperlink>
      </p>
    </LoginDialogue>
  );
}