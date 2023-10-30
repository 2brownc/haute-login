import React from 'react';
import styled from "styled-components";

const ButtonContainer = styled.button`
  width: 100%;
  height: 3rem;
  background-color: #006994;
  color: white;
  font-size: 1.1rem;
  border: unset;
  border-radius: 0.4rem;
  margin-top: 20px;

  &:hover {
    cursor: pointer;
    background-color: #007bae;
  }
`;

export function LargeButton({ label }) {
  return <ButtonContainer>
    {label}
  </ButtonContainer>
}

