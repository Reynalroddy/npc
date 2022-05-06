import React from 'react'
import styled from "styled-components"
const Loader = () => {
  return (
    <Wrapper>

<h3>Authorizing access...</h3>


    </Wrapper>
  )
}


const Wrapper = styled.div`

position:fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background:rgba(0,0,0,0.8);
display: grid;
place-items: center;
transition:all 0.3s ease-in;
visibility: visible;
z-index:10;
color: var(--white);

`
export default Loader