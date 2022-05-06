
import React from "react";
import styled from "styled-components";
const Title = ({title}) => {
  return (
    <Wrapper>

        <h4>{title}</h4>
    </Wrapper>
  )
}

const Wrapper=styled.aside`
width: 100%;
background-color: #0b6916;
color: white;
padding: 0.3rem 0.4rem;
h4{
    margin-bottom: 0;
}

`
export default Title