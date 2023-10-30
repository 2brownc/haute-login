import React, { useState } from 'react';
import styled from 'styled-components';
import { FaSpinner } from 'react-icons/fa6';
import { FaSquareCheck } from 'react-icons/fa6';
import { FaEye } from 'react-icons/fa6';
import { FaEyeSlash } from 'react-icons/fa6';

const InputContainer = styled.div`
  width: 100%;
  height: 3rem;
  padding: 0.5rem 1rem;
  margin: 0;
  border-radius: 0.4rem;
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  gap: 1rem;

  border: 1px solid #ccc;
  transition: border-color 0.2s ease-in-out;

  &:hover {
    border-width: 2px;
    border-color: #6f00ff;
  }
`;

const InputBox = styled.input`
  flex: 1;

  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: none;
  outline: none;

  &::placeholder {
    color: #ccc;
  }
`;

const InfoDiv = styled.div`
  width: 1rem
  flex: 0 0 1.5rem;

  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
`;

export function Input({ value, onChange, password = false }) {
  const [typing, setTyping] = useState(false);
  const [valid, setValid] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleKeyDown = (event) => {
    setValid(false)
    const value = event.target.value;

    if (value.length > 0) {
      setTyping(true);
    } else {
      setTyping(false);
    }
  };

  const handleBlur = (event) => {
    setTyping(false);
    const value = event.target.value;

    if (value.length > 0) {
      setValid(true);
    } else {
      setValid(false);
    }
  }

  const handleShowPassword = () => {
    setShowPassword(true);
  }

  const handleHidePassword = () => {
    setShowPassword(false);
  }

  return (
    <InputContainer>
      <InputBox
        type={`${(password && !showPassword) ? "password" : "text"}`}
        placeholder="Enter something..."
        onKeyDown={handleKeyDown}
        onBlur={handleBlur}
        value={value}
        onChange={onChange}
      />
      <InfoDiv>
        {!password && typing && <FaSpinner />}
        {!password && valid && <FaSquareCheck />}
        {password && !showPassword && <FaEyeSlash onClick={handleShowPassword} />}
        {password && showPassword && <FaEye onClick={handleHidePassword} />}
      </InfoDiv>
    </InputContainer>
  );
};
