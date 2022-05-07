import React, { useState,useEffect } from "react";
import styled from "styled-components";
import { Form } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";
import pic from "../assets/npc/water.png";
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { saveNin } from "../redux/apiCalls";
import {  useNavigate } from "react-router-dom";
const Nin = () => {
  // const { accessCode } = useSelector((state) => state.user);
  const [ninNum, setNinNum] = useState("");

const navigate = useNavigate();
 
  const handleAppStart = async (e) => {
    e.preventDefault();
    try {
      var config = {
        method: "get",
        url: `https://api.verxid.site/npc/staging/v1/verifyNin?nin=${ninNum}`,
        headers: {
          Authorization: "Basic YmFybmtzZm9ydGUtbmltYzowbmx5YmFybmtzMTIz",
        },
       
      };
      const { data } = await axios(config);
      console.log(data.nimc);
      if (data.nimc.status === 0) {
        Swal.fire({
          title: 'NIN verification unavailable',
          text: 'proceed with application',
          icon: 'error',
         
          confirmButtonColor: '#0b6916',
   confirmButtonText: 'Proceed'
        }).then((result) => {
          if(result.value){
           saveNin(ninNum)
         }
       })
      } else if (data.nimc.status === 1 && data.nimc.firstname===null) {
       
        Swal.fire({
          title: 'NIN verification unavailable',
          text: 'proceed with application',
          icon: 'error',
         
          confirmButtonColor: '#0b6916',
   confirmButtonText: 'Proceed'
        }).then((result) => {
          if(result.value){
           saveNin(ninNum)
         }
       })
       
    }
    else if (data.nimc.status === 1 && data.nimc.firstname==="") {
      Swal.fire({
        title: 'NIN verification unavailable',
        text: 'proceed with application',
        icon: 'error',
       
        confirmButtonColor: '#0b6916',
 confirmButtonText: 'Proceed'
      }).then((result) => {
        if(result.value){
         saveNin(ninNum)
       }
     })
    }
    else{
      toast.success('NIN verification successful', {
        position: "top-center",
    });
    localStorage.setItem("fname", data.nimc.firstname);
    localStorage.setItem("lname", data.nimc.lastname);
    localStorage.setItem("dob", data.nimc.dob);
    localStorage.setItem("gender", data.nimc.gender);
    localStorage.setItem("phone", data.nimc.phone);
    saveNin(ninNum)
    }

     

    } catch (error) {
      console.log(error);
      toast.error("Network error.please retry", {
        position: "top-center",
      });
    }
  
  };


  useEffect(() => {
   const locAccess = localStorage.getItem('auth');
   if(!locAccess){
navigate('/landing')
   }
  }, [navigate])
  
  return (
    <Wrapper className="nin-container">
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto">
            <Form className="" onSubmit={handleAppStart}>
              <h4>verify NIN</h4>
              <Form.Group className="mb-3" controlId="formBasicEText">
                <Form.Label className="text-left">NIN</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter Your NIN"
                  className="form_input shadow-none"
                  name="nin_code"
                  onChange={(e) => setNinNum(e.target.value)}
                  maxLength={11}
                  minLength={11}
                />
              </Form.Group>
              <button type="submit" className="my-btn">
                VERIFY
              </button>
            </Form>
          </div>
        </div>
      </div>

      
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height:100vh ;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-image: url(${pic});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
export default Nin;
