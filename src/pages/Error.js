import React from "react";
import styled from "styled-components";
import errImg from "../assets/npc/404.svg";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <Wrapper>
      <div className="cont-container">
        <div className="img-container">
          <img src={errImg} alt="404" className="img" />
        </div>

        <h3>page not found</h3>
        <p>The link you clicked may be broken or does not exist.</p>
        <Link to="/landing">
          <button className="my-btn">Go Back</button>
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  display: flex;
  height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
  .img-container {
    /* height: 18rem; */
    width: 25rem;
    img {
      height: 100%;
    }
  }
  h3,
  p {
    margin: 0.8rem;
  }
`;
export default Error;
