import React from "react";
import styled from "styled-components";
import logo from "../assets/npc/logs.svg";

const Navbar = () => {
  return (
    <Wrapper>
      <div className="img-cont">
        <img src={logo} className="img" alt="logo" />
      </div>
      <h5>NATIONAL POPULATION COMMISSION</h5>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 1.2rem 3rem;
  background-color: var(--white);
  align-items: center;
  box-shadow: var(--shadow-1);
  position: sticky;
  top:0;
  left:0;
  gap: 0.5rem;
z-index:100;
  h5{
    margin-bottom:0;
  }
  .img-cont {
    width: 4rem;
    height: 4rem;
    img {
      height: 100%;
    }
  }
`;
export default Navbar;
