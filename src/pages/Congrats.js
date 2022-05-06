import React,{useEffect} from "react";
import styled from "styled-components";
import cg from "../assets/npc/cg.svg";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {BsFacebook,BsTwitter,BsInstagram} from "react-icons/bs"
const Congrats = () => {
  const navigate = useNavigate();
  const { accessCode} = useSelector((state) => state.user);
  const sub = () => {
    navigate("/landing");
  };
  useEffect(() => {
    
    localStorage.removeItem("eduDataInfo");
    localStorage.removeItem("access_code");
    localStorage.removeItem("nin");
    localStorage.removeItem("bioDataInfo");
    localStorage.removeItem("auth");
    localStorage.removeItem("imgDataInfo");
    localStorage.removeItem("workDataInfo");
    localStorage.removeItem("resDataInfo");
    localStorage.removeItem("bankDataInfo");
    localStorage.removeItem("conDataInfo");
  }, [])
  
  return (
    <Wrapper>
      <div className="container">

        <div className="row">

<div className="col-7 col-md-7 mx-auto text-center">
<div className="img-container">
          <img src={cg} alt="404" className="img" />
        </div>

        <h3>Registeration Successful!</h3>
        <h5>Application id:{accessCode}</h5>
        <p>
          Confirmation message is sent to your email address.
        </p>
        <h5>For more news on NPC, please follow us on our social media pages</h5>
        <div className="sc-btn">
        <a    href="https://m.facebook.com/natpopcom">
<BsFacebook/>
</a>
<a href="https://twitter.com/natpopcom?t=Lt3y4ZT5-6_zltJJOIJ04g&s=08"><BsTwitter/></a>

<a href="https://instagram.com/npc_nigeria?igshid=YmMyMTA2M2Y="><BsInstagram/></a>

        </div>
        <Link to="/landing">
          <button className="my-btn my-4" onClick={sub}>
            OKAY
          </button>
        </Link>

</div>
        </div>

      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  height: calc (100vh - 107px);
  width: 100%;

  .img-container {
    /* height: 18rem; */
    width: 20rem;
    margin: 0 auto;
    img {
      height: 100%;
    }
  }
  h3,
  p {
    margin: 0.8rem;
  }

  .sc-btn {
    display: flex;
gap:0.6rem;
justify-content: center;
width: 100%;
svg{
  font-size:1.3rem;
  cursor: pointer;
}
}
`;
export default Congrats;
