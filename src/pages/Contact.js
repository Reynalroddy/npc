import React ,{useState,useEffect}from 'react'
import Title from '../components/Title';
import { Form,Row,Col,InputGroup,FormControl,Button } from 'react-bootstrap';
import pic2 from "../assets/npc/water2.png";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { handleChange } from "../redux/userSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Swal  from 'sweetalert2/dist/sweetalert2';
const Contact = () => {
  
  const [ot,showOt] = useState(false);
const [code,setCode] = useState("");
const [ver1,setVer1] = useState(false);
// eslint-disable-next-line
const [ver2,setVer2] = useState(false);
const handleOtpInp=(e)=>{
    setCode(e.target.value)
}
    const navigate = useNavigate();
    const {
      editCon,
        accessCode,
        phone,
        email
      } = useSelector((state) => state.user);
      const dispatch = useDispatch();


      const verPhone=async()=>{
        if(!phone){
          Swal.fire({
            title: 'Error',
            text: 'phone can not be empty',
            icon: 'error',
           
            confirmButtonColor: '#0b6916',
     confirmButtonText: 'Ok'
          })
        }

        else{
          try {
            var config = {
                method: 'get',
                url: `https://api.verxid.site/npc/staging/v1/sendOTP?access-code=${accessCode}&phone=${phone}`,
                headers: { }
              };
              const { data } = await axios(config);
              if(data.nimc.status === 1){

                Swal.fire({
                  title: ' Success',
                  text: data.nimc.msg,
                  icon: 'success',
                 
                  confirmButtonColor: '#0b6916',
           confirmButtonText: 'Ok'
                })
                
showOt(true);
              }
              else if(data.nimc.status === 0){
                Swal.fire({
                  title: 'Error',
                  text: data.nimc.msg,
                  icon: 'error',
                 
                  confirmButtonColor: '#0b6916',
           confirmButtonText: 'Ok'
                })
               
              }
        //   console.log(data.nimc);
          } catch (error) {
              console.log(error)
              Swal.fire({
                title: 'Error',
                text: 'please try again',
                icon: 'error',
               
                confirmButtonColor: '#0b6916',
         confirmButtonText: 'Ok'
              })
          }
        }
      }


      const verOtp=async()=>{
        try {
            var formdata = new FormData();
            formdata.append("access-code", accessCode);
            
            formdata.append("otp", code);
          var config = {
            method: "post",
            url: "https://api.verxid.site/npc/staging/v1/verifyOTP",
            headers: {
              Authorization: "Basic YmFybmtzZm9ydGUtbmltYzowbmx5YmFybmtzMTIz",
            },
            data: formdata,
            };
            const { data } = await axios(config);
            console.log(data)
            if(data.nimc.status === 1){

              Swal.fire({
                title: 'Success',
                text: data.nimc.msg,
                icon: 'success',
               
                confirmButtonColor: '#0b6916',
         confirmButtonText: 'Ok'
              })
            
                setVer1(true);
                setCode("")
showOt(false);
            }
            else if(data.nimc.status === 0){
              Swal.fire({
                title: 'Error',
                text: data.nimc.msg,
                icon: 'error',
               
                confirmButtonColor: '#0b6916',
         confirmButtonText: 'Ok'
              })
                // setCode("")
                // showOt(false);
            }
     
        } catch (error) {
            console.log(error)
            Swal.fire({
              title: 'Error',
              text: 'please try again',
              icon: 'error',
             
              confirmButtonColor: '#0b6916',
       confirmButtonText: 'Ok'
            })
            // setCode("");
            // showOt(false)
        }
    }



    const verEmail=async()=>{
      if(!email){
        Swal.fire({
          title: 'Error',
          text: 'email can not be empty',
          icon: 'error',
         
          confirmButtonColor: '#0b6916',
   confirmButtonText: 'Ok'
        })
      }

      else{
        console.log(email)
        try {

var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};
fetch(`https://api.verxid.site/npc/staging/v1/verifyEmail?email=${email}`, requestOptions)
  .then(response => response.json())
  .then(result => {
    console.log(result.nimc.status)
    if(result.nimc.status === 1){
            Swal.fire({
              title: 'Success',
              text: result.nimc.msg,
              icon: 'success',
             
              confirmButtonColor: '#0b6916',
       confirmButtonText: 'Ok'
            })
           
              setVer2(true);
              
          }
          else if(result.nimc.status === 0){
            Swal.fire({
              title: 'Error',
              text: result.nimc.msg,
              icon: 'error',
             
              confirmButtonColor: '#0b6916',
       confirmButtonText: 'Ok'
            })
         }})
  .catch(error => console.log('error', error));
          // }
        //   var formdata = new FormData();
        //   formdata.append("email", email);
          
        // var config = {
        //   method: "post",
        //   url: "https://api.verxid.site/npc/staging/v1/verifyEmail",
        
        //   data: formdata,
        //   };
        //   const { data } = await axios(config);
        //   console.log(data)
      //     if(data.nimc.status === 1){
      //       Swal.fire({
      //         title: 'Success',
      //         text: data.nimc.msg,
      //         icon: 'success',
             
      //         confirmButtonColor: '#0b6916',
      //  confirmButtonText: 'Ok'
      //       })
           
      //         setVer2(true);
              
      //     }
      //     else if(data.nimc.status === 0){
      //       Swal.fire({
      //         title: 'Error',
      //         text: data.nimc.msg,
      //         icon: 'error',
             
      //         confirmButtonColor: '#0b6916',
      //  confirmButtonText: 'Ok'
      //       })
      //        ;
      //    }
   
      } catch (error) {
          console.log(error)
          Swal.fire({
            title: 'Error',
            text: 'please retry',
            icon: 'error',
           
            confirmButtonColor: '#0b6916',
     confirmButtonText: 'Ok'
          })
          
          
      }
      }
       
    }
       const handleSubmit = async (e) => {
        e.preventDefault();
    // console.log(ver1,ver2,phone,email)
    // if(!ver1 || !ver2){
    //     Swal.fire({
    //         title: ' Verification Unsuccessful!',
    //         text: 'Verify email and phone number',
    //         icon: 'warning',
           
    //         confirmButtonColor: '#0b6916',
    //  confirmButtonText: 'Ok'
    //       })
    // }

    // else{
      const con_data={
email,phone
      }


      if(editCon){
        localStorage.setItem('conDataInfo',JSON.stringify(con_data));
        
        dispatch(handleChange({ name:'editCon', value:false }));
        navigate("/prev"); 
      } 
      else{
        localStorage.setItem('conDataInfo',JSON.stringify(con_data));
                navigate("/education-data");
      }
    //     try {
          
    //       var formdata = new FormData();
    //       formdata.append("access-code", accessCode);
          
    //       formdata.append("email", email);
    //       formdata.append("phone", phone);
         
         
    
    //       var config = {
    //         method: "post",
    //         url: "https://api.verxid.site/npc/staging/v1/update-contact",
    //         headers: {
    //           Authorization: "Basic YmFybmtzZm9ydGUtbmltYzowbmx5YmFybmtzMTIz",
    //         },
    //         data: formdata,
    //       };
    //       const { data } = await axios(config);
    //       console.log(data.nimc);
    //       if (data.nimc.status === 0) {
    //         Swal.fire({
    //         title: ' Verification Failed!',
    //         text: data.nimc.message,
    //         icon: 'error',
           
    //         confirmButtonColor: '#0b6916',
    //  confirmButtonText: 'Retry'
    //       })
    //       }
    //        else if (data.nimc.status === 1) {
    //        Swal.fire({
    //         title: ' Verification Successful!',
    //         text: data.nimc.message,
    //         icon: 'success',
           
    //         confirmButtonColor: '#0b6916',
    //  confirmButtonText: 'Proceed'
    //       }).then((result) => {
    //         if(result.value){

             
    //        }
    //      })
    
    
    //      }
    //     } catch (error) {
    //       console.log(error);
    //        toast.error("please retry", {
    //         position: "top-left",
    //       });
    //     }
      // };
    }
    
       
    
    
    
     

      const handleInp = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        
        dispatch(handleChange({ name, value }));
      };

      const kpx=(e)=>{
       
        if (e.target.value.length === 0) {
         showOt(false);

      }
    }
      useEffect(() => {
        const access = localStorage.getItem("access_code");
        if (!access) {
          navigate("/");
        }
        
      }, [navigate]);
      
  return ( 
    <Wrapper>

<div className="container">
        <Title title="Contact information"/>
        <Form className=""  onSubmit={handleSubmit}>
         
          <Row className='mt-2'>
            <Col md={6} lg={6}>
            <Form.Label className="text-left">Phone number</Form.Label>
            <InputGroup className="mb-3">
           
    <FormControl
    required
     placeholder="Enter phone number"
     name="phone"
      aria-describedby="basic-addon2"
      className="form_input shadow-none"
      maxLength="15"
      value={phone}
      onChange={handleInp}
      onKeyUp={kpx}
    />
    <Button  id="button-addon2" className="my-btn" onClick={verPhone}>
      {ver1?'verified':'verify'}
    </Button>
  </InputGroup>

  {
      ot&& <>
      <Form.Label className="text-left">Enter otp</Form.Label>
      <InputGroup className="mb-3">
     
<FormControl
required
placeholder="Enter otp"
name="otp"
aria-describedby="basic-addon2"
className="form_input shadow-none"
// maxLength="15"
value={code}
onChange={handleOtpInp}
/>
<Button  id="button-addon2" className="my-btn" onClick={verOtp} >
validate
</Button>
</InputGroup>
      </>
  }
             
            </Col> 

            <Col md={6} lg={6}>
            <Form.Label className="text-left">
                 Email address
                </Form.Label>
            <InputGroup className="mb-3">
           
    <FormControl
    required
    type="email"
    placeholder="Enter email address"
    name="email"
    className="form_input shadow-none"
    value={email}
    onChange={handleInp}
    />
    <Button  id="button-addon2" className="my-btn" onClick={verEmail}>
      verify
    </Button>
  </InputGroup>
             
            </Col>
             
            
 


              </Row>
             

          <Row>
          <Col md={6} lg={6} className="pt-2">
              <button   className="my-btn btn-block btn-clear mt-4" onClick={()=>navigate(-1)}>Back</button>
            </Col>
            <Col md={6} lg={6} className="pt-2">
              <button  type='submit' className="my-btn btn-block mt-4">{editCon?'UPDATE':'NEXT'}</button>
            </Col>
            </Row>
              </Form>
</div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 1.6rem 0;
 min-height: calc(100vh - 107px);
 text-transform: uppercase;
  background-image:
    linear-gradient(to right,  rgba(245, 246, 252, 0.92), 
    rgba(245, 246, 252, 0.82)),
    url(${pic2});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export default Contact;

