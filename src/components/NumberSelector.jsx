import React, { useState } from 'react'
import styled from 'styled-components'
const NumberSelector = ({ clickedBtn, setClickedBtn }) => {
      const arrNumbers = [1, 2, 3, 4, 5, 6];
      
      return (
            <>
            <BoxWrapper>
                  <h3>Select Number</h3>
                  <div className='flex items-start justify-end gap-3 flex-wrap'>
                        {
                              arrNumbers.map((num, i) => (
                                    <Box
                                          key={i}
                                          onClick={() => setClickedBtn(num)}
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
      h3{
            margin: 0 0 10px 0;
            font-size: 20px;
            text-align: end;
      }
`

const Box = styled.div`
border: 1px solid black;
width: 70px;
height: 70px;
font-size: 30px;
font-weight:500;
display: flex;
align-items: center;
justify-content: center;
background-color: ${(props) => (props.isSelect ? "black" : "white")};
color: ${(props) => (!props.isSelect ? "black" : "white")};
`
