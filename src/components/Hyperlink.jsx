import React from 'react';
import styled from "styled-components";

const Link = styled.a`
  color: blue;
  font-weight: ${props => props.$weight || "normal"};
  text-decoration: ${props => props.$decoration || "none"};

  &:hover {
    color: darkblue;
  }
  
  cursor: pointer;
`;

export function HyperLink({ link, weight, decoration, children }) {
  return <Link $weight={weight} $decoration={decoration} href={link}>
    {children}
  </Link>
}
