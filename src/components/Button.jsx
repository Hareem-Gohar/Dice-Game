import React from "react";
import styled from "styled-components";

const Button = (props) => {
  return (
    <Btn color={props.color} background={props.bg} onClick={props.toggle}>
      {props.text}
    </Btn>
  );
};

export default Button;

const Btn = styled.button`
  background-color: ${(props) => props.background || "black"};
  color: ${(props) => props.color || "white"};
  padding: 10px 20px;
  min-width: 220px;
  font-weight: 600;
  font-size: 16px;
  border: 1px solid black;
  cursor: pointer;
  transition: 0.2s ease-in background-color;
  border-radius: 10px;

  &:hover {
    border: 1px solid black;
    background-color: #fff;
    color: #000;
  }
`;
