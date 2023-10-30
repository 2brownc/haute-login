import React, { useState } from "react";
import styled from "styled-components";

import loginImage from '/login_page_side.jpeg';

import { LoginPane } from "./components/LoginPane";

const Container = styled.div`
  background-color: white;
  display: flex;
  flex-direction: row;
  height: 100vh;

  @media (max-width: 576px) {
    display: block;
  }
`;

const LeftHalf = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 576px) {
    display: none;
  }
`;

const LoginLeftPaneImage = styled.img`
  width: 80%;
  filter: grayscale(90%);
`;

const RightHalf = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1000px;

  @media (max-width: 576px) {
    display: block;
    width: 100vw;
  }
`;



const App = () => {
  return (
    <Container>
      <LeftHalf>
        <LoginLeftPaneImage src={loginImage} />
      </LeftHalf>
      <RightHalf>
        <LoginPane />
      </RightHalf>
    </Container>
  );
};

export default App;
