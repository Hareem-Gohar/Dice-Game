import React from 'react'
import styled from 'styled-components'

const Button = (props) => {
  return (
    <Btn onClick={props.toggle}>{props.text}</Btn>
  )
}

export default Button

const Btn = styled.button`
background-color: #000;
color: #fff;
padding: 10px 20px;
min-width: 220px;
font-weight: 600;
font-size: 16px;
cursor: pointer;
border: 1px solid transparent;
transition: 0.2s ease-in background-color;
border-radius: 10px;
&:hover{
      border: 1px solid black;
      background-color: #fff;
      color: #000;
}
`