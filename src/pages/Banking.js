import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Form, Row, Col ,Spinner} from "react-bootstrap";
import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import pic2 from "../assets/npc/water2.png";
import { useDispatch } from "react-redux";
import { handleChange } from "../redux/userSlice";
import Swal  from 'sweetalert2/dist/sweetalert2';
const Banking = () => {
  const {editBank } = useSelector((state) => state.user);
const dispatch = useDispatch();
  const [bank, setBanks] = useState([]);
  const [code, setCode] = useState("");
  const [numb, setNumb] = useState("");
  const [bankName, setBankName] = useState("");
  const [accName, setAccName] = useState("");
  const [loading, setLoading] = useState(false);
  const [acctyp, setAccType] = useState("");
  
  const handleCodeChange = async (e) => {
    setCode(e.target.value);
    setBankName(e.target.options[e.target.selectedIndex].text);
    // console.log(numb, e.target.value);
    const cd = e.target.value;
    setLoading(true);
    try {
      const res = await axios.get(
        `https://api.verxid.site/npc/staging/v1/checkaccount?account_number=${numb}&bank_code=${cd}`
      );
      console.log(res);
      if(res.data.status === false){
        setLoading(false);
        Swal.fire({
          title: 'Error',
          text: res.data.message,
          icon: 'warning',
         
          confirmButtonColor: '#0b6916',
   confirmButtonText: 'Ok'
        })
      }
      else if(res.data.status === true){
        setAccName(res.data.data.account_name);
      setLoading(false);
      }
     
    } catch (error) {
      console.log(error);
    }
  };

  const handleAccType=(e)=>{
const nm = e.target.value;
setAccType(nm);
  }

  const kp = async (e) => {
    const nb = e.target.value;
    if (e.target.value.length === 10) {
      setLoading(true);
      try {
        const res = await axios.get(
          `https://api.verxid.site/npc/staging/v1/checkaccount?account_number=${nb}&bank_code=${code}`
        );
        console.log(res.data.status);
        if(res.data.status === false && code!==""){
          setLoading(false);
          Swal.fire({
            title: 'Error',
            text: res.data.message,
            icon: 'warning',
           
            confirmButtonColor: '#0b6916',
     confirmButtonText: 'Ok'
          })
        }
        else if(res.data.status === true){
          setAccName(res.data.data.account_name);
          setLoading(false);
        }
       
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleChangeC = (e) => {
    setNumb(e.target.value);
  };
  const navigate = useNavigate();
  const handleAppStart = async (e) => {
    e.preventDefault();
    if(!accName){
      Swal.fire({
        title: ' Error',
        text: 'please  confirm account details!',
        icon: 'error',
       
        confirmButtonColor: '#0b6916',
 confirmButtonText: 'Ok'
      })
      
    }

    else {
      const bank_data ={
        numb,
      code,
    bankName,
     accName,
     acctyp,
      }
        
      if(editBank){
        localStorage.setItem('bankDataInfo',JSON.stringify(bank_data));
        
        dispatch(handleChange({ name:'editBank', value:false }));
        navigate("/prev"); 
      } 
      else{
        localStorage.setItem('bankDataInfo',JSON.stringify(bank_data));
        navigate("/prev");
      }
    }
  }
  
  useEffect(() => {
 
    const fetchBanks = async () => {
      try {
        const res = await axios.get(
          "https://api.verxid.site/npc/staging/v1/get-banks"
        );
        console.log(res.data);
        setBanks(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBanks();
  }, [navigate,editBank]);
  return (
    <Wrapper className="nin-container">
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto">
            <Form className="">
              <h4>Bank details</h4>
              <Row>
                <Col md={6} lg={6}>
                  <Form.Group className="mb-3" controlId="formBasicEText">
                    <Form.Label className="text-left">
                      Account Number
                    </Form.Label>
                    <Form.Control
                      required
                      type="number"
                      placeholder="Enter acount number"
                      name="numb"
                      className="form_input shadow-none"
                      value={numb}
                      onChange={handleChangeC}
                      onKeyUp={kp}
                    />
                  </Form.Group>
                </Col>
                <Col md={6} lg={6}>
                  <Form.Label className="text-left">Select Bank</Form.Label>
                  <Form.Select
                    required
                    aria-label="Default select example"
                    name="code"
                    value={code}
                    onChange={handleCodeChange}
                    className="shadow-none form-select"
                  >
                    <option value="">Select Bank</option>
                    {bank.map((item, i) => {
                      return (
                        <option key={i} value={item.code}>
                          {item.bank}
                        </option>
                      );
                    })}
                  </Form.Select>
                </Col>
                {accName !== "" ? (
                <Col md={6} lg={6}>
                  <Form.Label className="text-left">Select Account type</Form.Label>
                  <Form.Select
                    required
                    aria-label="Default select example"
                    name="accTyp"
                    value={acctyp}
                    onChange={handleAccType}
                    className="shadow-none form-select"
                  >
                    <option value="">Select Account Type</option>
                   
                        <option value='10'>
                        Savings Account
                        </option>

                        <option value='20'>
                       Current Account
                        </option>
                   
                  </Form.Select>
                </Col>
                ):""
}
                {accName !== "" ? (
                  <Col md={6} lg={6}>
                    <Form.Group className="mb-3" controlId="formBasicEText">
                      <Form.Label className="text-left">
                        Account Name
                      </Form.Label>
                      <Form.Control
                        readOnly
                        required
                        type="text"
                        name="accname"
                        className="form_input shadow-none"
                        value={accName}
                        // onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                ) : (
                  ""
                )}
              </Row>
              {loading &&
              <div className="row py-3">
<div className="col-6  col-md-6 mx-auto">
<Spinner animation="border" variant="success" />
</div>
</div>}


              <button   className="my-btn  px-5 btn-clear mt-4" onClick={()=>navigate(-1)}>Back</button>
          
              <button
                type="submit"
                className="my-btn my-2 mx-2 mx-md-4 px-5 "
                disabled={loading}
                onClick={handleAppStart}
              >
                NEXT
              </button>
            </Form>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: calc(100vh - 102.4px);
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform:uppercase;
  background-image:
    linear-gradient(to right,  rgba(245, 246, 252, 0.92), 
    rgba(245, 246, 252, 0.82)),
    url(${pic2});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
export default Banking;
