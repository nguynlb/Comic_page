import React from "react";
import styled from "styled-components";

// 121c35
const StyledButton = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.primary ? "#2563eb" : "d1d5db")};
  color: ${(props) => (props.primary ? "#dbeafe" : "#222c3a")};

  font-size: 1.2em;
  margin: 1em;
  padding: 0.3em 2em;
  border: none;
  border-radius: 6px;
  transition: 200ms;
  &:hover {
    background: ${(props) => (props.primary ? "#342eae" : "#222c3a")};
    color: ${(props) => (props.primary ? "#dbeafe" : "#b7b7b7")};
  }
`;

const Button = ({ text, primary }) => {
  return (
    <div>
      <StyledButton primary={primary}>{text}</StyledButton>
    </div>
  );
};

export default Button;
