import React, { useState } from "react";
import styled from "styled-components";

import { Input } from "./Inputs";
import { CheckBox } from "./CheckBox";
import { HyperLink } from "./Hyperlink";
import { LargeButton } from "./Button";

const LoginDialogue = styled.div`
  width: 90%;
  height: 90%;
  background-color: white;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.25);
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  @media (max-width: 576px) {
    width: 100vw;
  }
`;

const LoginText = styled.h1`
  font-size: 3rem;
  font-weight: bold;
`;

const InputContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

const RememberMeCheckbox = styled(CheckBox)`
  grid-row: 1;
  grid-column: 1;
  align-self: start;
  justify-self: start;
`;

const TermsCheckbox = styled(CheckBox)`
  grid-row: 2;
  grid-column: 1;
  align-self: end;
  justify-self: start;
`;

const ChangePassworkLink = styled(HyperLink)`
  grid-row: 1;
  grid-column: 2;
  align-self: end;
  justify-self: end;
`;

const OptionContainer = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  color: grey;
`;

const ButtonContainer = styled.div`
  width: 65%;
`;

const TextRight = styled.div`
  text-align: right;
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

      <InputContainer>
        <InputBox>
          <span>Login ID</span>
          <Input placeholder={"Enter Login ID"} />
        </InputBox>
        <InputBox>
          <span>Password</span>
          <Input placeholder={"Enter Password"} password />
        </InputBox>
      </InputContainer>

      <OptionContainer>
        <RememberMeCheckbox>
          Rememeber Me
        </RememberMeCheckbox>
        <ChangePassworkLink link={"/account-rescue"}>
          <TextRight>
            Change Password
          </TextRight>
        </ChangePassworkLink>
        <TermsCheckbox>
          Agree to <HyperLink
            link={"/legalese"}
            decoration={"underline"}
          >
            Terms & Conditions
          </HyperLink>
        </TermsCheckbox>
      </OptionContainer>

      <ButtonContainer>
        <LargeButton onClick={handleLogin} label={"Login"} />
      </ButtonContainer>

      <p>
        Don't have an account? <HyperLink
          decoration={"underline"}
          weight={"bold"}
          link={"/register"}
        >Register Here
        </HyperLink>
      </p>
    </LoginDialogue>
  );
}