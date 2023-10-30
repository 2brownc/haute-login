import React from 'react';
import styled from "styled-components";

const Container = styled.span`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.3rem;
`;

export function CheckBox({ id, name, handleChange, isChecked, children }) {
  return (
    <Container>
      <input
        type="checkbox"
        id={id}
        name={name}
        checked={isChecked}
        onChange={handleChange}
      />
      <label for={id}>{children}</label>
    </Container>
  );
}