import React, { useState, useEffect } from "react";


import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import peep from "../assets/npc/g.svg";
import logo from "../assets/npc/logs.svg";
import lpg from "../assets/npc/lpg.svg";
import Loader from "../components/Loader";
import { toast } from "react-toastify";
import { Modal, Form, Container,Col,Row } from "react-bootstrap";
import axios from "axios";
const Landing = () => {
  // const access = localStorage.getItem("access_code");
  // const { accessCode } = useSelector((state) => state.user);
  // eslint-disable-next-line
  const [accepted,setAccepted] =useState(['BWARI','KUJE','AMAC']);
  const [smShow, setSmShow] = useState(false);
  const [lmShow, setLmShow] = useState(false);
  const [loc, setLoc] = useState('');
  const [rl, setRl] = useState(true);
  const [loads,setLod] = useState(false)
  const [appNum,setAppNum] = useState("");
  const [dataInf,setDataInfo] = useState(null);
  const [stat,setStat] = useState("");
  const navigate = useNavigate();


  const handleAppCheck = async (e) => {
    e.preventDefault();
try {
      var formdata = new FormData();
      formdata.append("access-code", appNum);

      var config = {
        method: "post",
        url: "https://api.verxid.site/npc/staging/v1/retriveData",
        headers: {
          Authorization: "Basic YmFybmtzZm9ydGUtbmltYzowbmx5YmFybmtzMTIz",
        },
        data: formdata,
      };
      const { data } = await axios(config);
      console.log(data.nimc);
      if(data.nimc.length ===1){
        setDataInfo(data.nimc[0])

        if(data.nimc[0].userstatus==='0'){
setStat(' Pending')
        }
        else if(data.nimc[0].userstatus==='1'){
setStat('Approved')
        }
        else if(data.nimc[0].userstatus==='2'){
          setStat('Rejected')
                  }
      }
      else{
        toast.error("please retry access code", {
          position: "top-left",
        });
      }
   

      }
     catch (error) {
      console.log(error);
      toast.error("please retry", {
        position: "top-left",
      });
    }


  }

  const handleAppStart = async (e) => {
    e.preventDefault();

    // try {
    //   var formdata = new FormData();
    //   formdata.append("access-code", accessCode);

    //   var config = {
    //     method: "post",
    //     url: "https://api.verxid.site/npc/staging/v1/validate-code",
    //     headers: {
    //       Authorization: "Basic YmFybmtzZm9ydGUtbmltYzowbmx5YmFybmtzMTIz",
    //     },
    //     data: formdata,
    //   };
    //   const { data } = await axios(config);
    //   console.log(data.nimc.status);
    //   if (data.nimc.status === 0) {
    //     toast.error(data.nimc.message, {
    //       position: "top-left",
    //     });
    //   } else if (data.nimc.status === 1) {
    //     toast.success(data.nimc.message, {
    //       position: "top-left",
    //     });
    //     localStorage.setItem("myUser", true);
    //     localStorage.setItem("accessCode", accessCode);
        navigate("/disclaimer");
    //   }
    // } catch (error) {
    //   console.log(error);
    //   toast.error("please retry", {
    //     position: "top-left",
    //   });
    // }
  };
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(position) {
      
      setLoc(`${position.coords.latitude},${position.coords.longitude}`);
    });

    const getAc=async ()=>{
      setLod(true);
      try {
        const rest = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${loc}&key=AIzaSyAxilHHgYI8vAoeAo9t1EDn2b6fF1YLUhI`)
        // console.log(rest.data.results[0].address_components);
const dz=rest.data.results[0].address_components.filter((it)=>it.types[0]==='administrative_area_level_2')

// console.log(dz[0].short_name)
if(accepted.includes(dz[0].short_name)){
// console.log('true')
setRl(false);
setLod(false)
localStorage.setItem('auth',true);
toast.success('Authorization Successful!Proceed with application', {
        position: "top-left",
      });
}
else{
  // console.log('false')
setLod(false)
toast.success('Authorization Failed!Contact NPC.', {
  position: "top-left",
});
}
      } catch (error) {
        // console.log(error)
        toast.error('Authorization failed!contact NPC', {
          position: "top-left",
        });
        setLod(false)
      }

    }
  if(loc){
    getAc();
    
  }

    
  
    // if (access) {
    //   navigate("/");
    // }
  }, [loc,accepted]);
// console.log(access)
  return (
    <Wrapper>

      {loads && <Loader/>}
      <div className="first-row">
        <div className="img-cont">
          <img src={logo} className="img" alt="logo" />
        </div>
      </div>
      <div className="sec-row">
        <div className="left-side">
          <h1>
            NATIONAL POPULATION COMMISSION
          </h1>
         
          <p>Trial Census</p>
<div  className="dwn">
          <h5>
            NPC Adhoc staff recruitment <br />
            2022-2023 application.
          </h5>
          <div className="cta-btns">
            <button disabled={rl} className="my-btn" onClick={() => setSmShow(true)}>
              Start Application
            </button>

            
              <button className="my-btn" disabled={rl} onClick={() => setLmShow(true)}>Check Application Status</button>
           
          </div>
          </div>
        </div>

        <div className="right-side">
          <img src={peep} alt="peep" className="img" />
        </div>
      </div>

      <Modal
        size="md"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header className="modal-header"  closeButton>
          <Container>
          <Row className="text-center">

<Col sm={12} md={12}>
<Modal.Title id="example-modal-sizes-title-sm" className="mx-auto">
           &nbsp;&nbsp;&nbsp;&nbsp;INSTRUCTIONS

          </Modal.Title>
</Col>
<Col sm={12} md={12}>
<Modal.Body className="mx-auto"> Applicants must have the following </Modal.Body> 
</Col>
</Row>
          </Container>
          
        
         
          
        </Modal.Header>
        <Modal.Body>
        <p className="text-center"> <span style={{color:'red'}}>Click on each box to acknowledge instructions</span></p> 
          <Form className="" onSubmit={handleAppStart}>
           

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                required
                type="checkbox"
                label="Valid NIN"
                className="shadow_none form_check"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                required
                type="checkbox"
                label="Valid Phone Number"
                className="shadow_none form_check"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                required
                type="checkbox"
                label="Valid Gmail Address"
                className="shadow_none form_check"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                required
                type="checkbox"
                label="Valid Bank Account Number"
                className="shadow_none form_check"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                required
                type="checkbox"
                label="Valid Educational Certificate"
                className="shadow_none form_check"
              />
            </Form.Group>
<div className="d-flex justify-content-center">
<button type="submit" className="my-btn">
              PROCEED
            </button>

            <button className="my-btn btn-clear ms-5" onClick={()=>setSmShow(false)}>
            CLOSE
          </button>
</div>
           
          </Form>
        </Modal.Body>
      </Modal>


      <Modal
        size="md"
        show={lmShow}
        onHide={() => setLmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header className="modal-header"  closeButton>
          <Container>
          <Row className="text-center">

<Col sm={12} md={12}>
<Modal.Title id="example-modal-sizes-title-sm" className="mx-auto">
           &nbsp;&nbsp;&nbsp;&nbsp;VIEW APPLICATION STATUS

          </Modal.Title>
</Col>

</Row>
          </Container>
          
        
         
          
        </Modal.Header>
        <Modal.Body>
        
          <Form className="" onSubmit={handleAppCheck}>
           

           

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Control
                  required
                  type="text"
                  placeholder="Enter Your Application Code"
                  className="form_input shadow-none"
                  name="app_code"
                  onChange={(e) => setAppNum(e.target.value)}  
                />
            </Form.Group>

{
  dataInf &&<div>

    <p>Name: {`${dataInf.lastname} ${dataInf.firstname} ${dataInf.middlename}`}</p>
<p>Application Status:{stat &&stat}</p>
  </div>
}

            
<div className="d-flex justify-content-center">
<button type="submit" className="my-btn">
              PROCEED
            </button>

            <button className="my-btn btn-clear ms-5" onClick={()=>setLmShow(false)}>
            CLOSE
          </button>
</div>
           
          </Form>
        </Modal.Body>
      </Modal>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  min-height: 100vh;
  width: 100%;
  background-image: url(${lpg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  /* display: ; */

  .first-row {
    padding: 1rem 0rem;
    text-align: center;
    width: 100%;
    display: flex;
    justify-content: center;
    .img-cont {
      width: 7rem;
      img {
      }
    }
  }

  .sec-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.6rem;
    padding: 1rem 1rem;
    .left-side {
      color: var(--white);
      padding-top: 6rem;
      .dwn{
        margin-top:13rem;
      }
      h1,h3 {
        margin-bottom: 1rem;
      }
      p {
        font-size: 1.7rem;
      }

      .cta-btns {
        display: flex;
        /* justify-content: center; */
        align-items: center;
        gap: 0.4rem;
      }
    }
    .right-side {
    }
  }


  @media (max-width: 1000px) {
    .sec-row .left-side {
      padding-top: 1.4rem;
    }
    .sec-row .left-side .dwn{
margin-top: 0rem;
    }
  }

  @media (max-width: 768px) {
    .sec-row {
      grid-template-columns: 1fr;
      text-align: center;
      padding-top: 8rem;
    }

    .sec-row .left-side .cta-btns {
      justify-content: center;
    }
    .sec-row .right-side {
      display: none;
    }
  }
  @media (max-width: 500px) {
    .sec-row .left-side .cta-btns {
      flex-direction: column;
      gap: 0.6rem;
    }
  }
`;

export default Landing;
