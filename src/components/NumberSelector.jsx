import React, { useState } from 'react'
import styled from 'styled-components'
const NumberSelector = ({ error, setError, clickedBtn, setClickedBtn }) => {
      const arrNumbers = [1, 2, 3, 4, 5, 6];
      const numberSelectorHandler = (num) => {
            setClickedBtn(num);
            setError("");
      }

      return (
            <>
                  <BoxWrapper>
                        <p>{error}</p>
                        <h3>Select Number</h3>
                        <div className='flex items-start justify-end gap-3 flex-wrap'>
                              {
                                    arrNumbers.map((num, i) => (
                                          <Box
                                                key={i}
                                                onClick={() => numberSelectorHandler(num)}
                                                isSelect={num === clickedBtn}
                                          >{num}</Box>
                                    ))
                              }
                        </div>

                  </BoxWrapper>
            </>
      )
}

export default NumberSelector
const BoxWrapper = styled.div`
p{
      color: red;
      text-align: end;
}
      h3{
            margin: 0 0 10px 0;
            font-size: 20px;
            text-align: end;
      }
`

const Box = styled.div`
border: 1px solid black;
width: 60px;
height: 60px;
font-size: 30px;
font-weight:500;
display: flex;
align-items: center;
justify-content: center;
background-color: ${(props) => (props.isSelect ? "black" : "white")};
color: ${(props) => (!props.isSelect ? "black" : "white")};
`
