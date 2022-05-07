import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Row, Col, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { handleChange,handleStChange} from "../redux/userSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import makeAnimated from 'react-select/animated';
import CreatableSelect from "react-select/creatable";
import Title from "../components/Title";
import pic2 from "../assets/npc/water2.png";

import Datetime from "react-datetime";
const BioData = () => {
  const navigate = useNavigate();
  const isValidDate = (current) => {
    const year = current.year();
    return year >= 1972 && year <= 2004;
  };

const animatedComponents = makeAnimated();
  const options = [
    { value: "english", label: "English" },
    { value: "yoruba", label: "Yoruba" },
    { value: "hausa", label: "Hausa" },
    { value: "igbo", label: "Igbo" },
    { value: "pidgin", label: "Pidgin" },
  ];
  const {
    userState,
    lga,
  
    surname,
    firstname,
    midname,
    gender,
    date,
    userStateDet,
    lgaDet,
    criminal,
    computer,
    language,
   
    challenge,
    kinname,
    kinphone,
    kinrel,
   
    otherLang,
    editBio
  } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  // const [userState, setUserState] = useState("");

  const [lg, setLg] = useState([]);
  const [lgas, setLga] = useState([]);
  // const [wards, setWards] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const bio_data={
      userState,
    lga,
    userStateDet,
    lgaDet,
    surname,
    firstname,
    midname,
    gender,
    date,
    criminal,
    computer,
    language,
   challenge,
    kinname,
    kinphone,
    kinrel,
    otherLang,
    };
    
                  if(editBio){
                   
                    localStorage.setItem('bioDataInfo',JSON.stringify(bio_data));
                   
                    dispatch(handleChange({ name:'editBio', value:false }));
                    navigate("/prev"); 
                  } 
                  else{
                    localStorage.setItem('bioDataInfo',JSON.stringify(bio_data))
        navigate("/residence"); 
      }
      }

  const handleInp = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(handleChange({ name, value }));
  };



  const handleMultiSelect = (selectedOption) => {
    console.log(selectedOption);
    const news = selectedOption.map((it, i) => {
      return it.value;
    });
    const name = "language";
    const newz=news.join(',')
    dispatch(handleChange({ name, value:newz }));
    console.log(news,newz);
  };

  // const handleMultiAsyncSelect = (selectedOption) => {
  //   const news = selectedOption.map((it, i) => {
  //     return it.id;
  //   });
  //   const name = "ward";
  //   // console.log(news);
  //   dispatch(handleChange({ name, news }));
  // };
  const handleStateChange = async (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const tx= e.target.options[e.target.selectedIndex].text;
    dispatch(handleChange({ name, value }));
dispatch(handleStChange({name:'userStateDet',value:tx}))
    console.log(userState);
    var formdata = new FormData();

    var config = {
      method: "get",
      url: `https://api.verxid.site/npc/staging/v1/get-lga?stateid=${value}`,
      data: formdata,
    };
    const { data } = await axios(config);
    // console.log(data.npc);
    setLga(data.npc);
    // setUserState(e.target.value);
    // console.log(userState);
  };


  const handleC=(newValue)=>{
    console.log(newValue);
    const news = newValue.map((it, i) => {
      return it.value;
    });
    const  name="otherLang";
    const newz=news.join(',')
    dispatch(handleChange({ name, value:newz }));
  }


  const handleLgaChange = async (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const lgtx= e.target.options[e.target.selectedIndex].text;
    dispatch(handleChange({ name, value }));
    dispatch(handleStChange({name:'lgaDet',value:lgtx}))
    // console.log(userState);
    var formdata = new FormData();

    var config = {
      method: "get",
      url: `https://api.verxid.site/npc/staging/v1/get-wards?lgaid=${value}`,
      data: formdata,
    };
    const { data } = await axios(config);
    console.log(data.npc);
    // setWards(data.npc);
  };

  console.log(language)
  
  useEffect(() => {
   
    const fetchState = async () => {
      try {
        const res = await axios.get(
          "https://api.verxid.site/npc/staging/v1/get-states"
        );
        // console.log(res.data.npc);
        setLg(res.data.npc);
      } catch (error) {
        console.log(error);
      }
    };
    fetchState();
  }, []);
  return (
    <Wrapper>
      <div className="container">
        <Title title="personal information"/>
        <Form className="" onSubmit={handleSubmit}>
          <h5 className="text-center pt-2"> bio data</h5>

          <Row>
            <Col md={4} lg={4}>
              <Form.Group className="mb-3" controlId="formBasicEText">
                <Form.Label className="text-left">Surname</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter Surname"
                  className="form_input shadow-none"
                  name="surname"
                  value={surname}
                  onChange={handleInp}
                />
              </Form.Group>
            </Col>

            <Col md={4} lg={4}>
              <Form.Group className="mb-3" controlId="formBasicEText">
                <Form.Label className="text-left">First Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter Firstname"
                  name="firstname"
                  className="form_input shadow-none"
                  value={firstname}
                  onChange={handleInp}
                />
              </Form.Group>
            </Col>
            <Col md={4} lg={4}>
              <Form.Group className="mb-3" controlId="formBasicEText">
                <Form.Label className="text-left">Middlename</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Middlename"
                  name="midname"
                  className="form_input shadow-none"
                  value={midname}
                  onChange={handleInp}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={4} lg={4}>
              <Form.Group className="mb-3" controlId="formBasicEText">
                <Form.Label className="text-left">Date of Birth(You must be between 18-50 years.)</Form.Label>

                {
                  date===""?
                  <Datetime inputProps={{placeholder:'DATE OF BIRTH'}} required isValidDate={isValidDate}  onChange={(date)=>
                    {
                    // 
                    const selectedDate = new Date(date._d); // pass in date param here
const formattedDate = `${selectedDate.getMonth()+1}/${selectedDate.getDate()}/${selectedDate.getFullYear()}`;
// console.log(formattedDate);
let name='date';
let value = formattedDate;
dispatch(handleChange({ name, value }));
                    
                    }} timeFormat={false} />
               
                :<Form.Control
                required
              
                type="text"
                placeholder="DOB"
                name="date"
                value={date}
                className="form_input shadow-none"
                onChange={handleInp}
              />
              }
              </Form.Group>
            </Col>

            <Col md={4} lg={4}>
              <Form.Label className="text-left">Select Gender</Form.Label>
              <Form.Select
                required
                aria-label="Default select example"
                name="gender"
                value={gender}
                onChange={handleInp}
                className="shadow-none form-select"
              >
                <option value="">Select Gender</option>
                <option value="m">male</option>
                <option value="f">female</option>
              </Form.Select>
            </Col>
            <Col md={4} lg={4}>
              <Form.Label className="text-left">
                Select State Of Origin
              </Form.Label>
              <Form.Select
                required
                aria-label="Default select example"
                name="userState"
                // value={userState}
                onChange={handleStateChange}
                className="shadow-none form-select"
              >
                <option value="">Select State</option>
                {lg.map((it, i) => {
                  return (
                    <option key={it.id} value={it.id}>
                      {it.name}
                    </option>
                  );
                })}
              </Form.Select>
            </Col>
          </Row>
          <Row>
            <Col md={4} lg={4}>
              <Form.Label className="text-left">
                Select LGA of Origin
              </Form.Label>
              <Form.Select
                required
                aria-label="Default select example"
                name="lga"
                // value={lga}
                onChange={handleLgaChange}
                className="shadow-none form-select"
              >
                <option value="">Select LGA</option>
                {lgas.map((it, i) => {
                  return (
                    <option value={it.id} key={i}>
                      {it.name}
                    </option>
                  );
                })}
              </Form.Select>
            </Col>
            <Col md={4} lg={4}>
              <Form.Label className="text-left">Physical Challenge</Form.Label>
              <Form.Select
                required
                aria-label="Default select example"
                name="challenge"
                value={challenge}
                onChange={handleInp}
                className="shadow-none form-select"
              >
                <option value="">Select</option>

                <option value="no">No</option>

                <option value="yes">Yes</option>
              </Form.Select>
            </Col>
            <Col md={4} lg={4} className="mb-3">
              <Form.Label className="text-left">
                Computer Proficiency
              </Form.Label>
              <Form.Select
                required
                aria-label="Default select example"
                name="computer"
                value={computer}
                onChange={handleInp}
                className="shadow-none form-select"
              >
                <option value="">Select Proficiency</option>
                <option value="basic">Basic</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </Form.Select>
            </Col>
            {/* <Col md={4} lg={4}>
              <Form.Label className="text-left">Select Ward</Form.Label>
              <Select
                isMulti
                options={wards}
                getOptionLabel={(e) => e.name}
                getOptionValue={(e) => e.id}
                onChange={handleMultiAsyncSelect}
              />
              
            </Col> */}

            {/* <Col md={4} lg={4}>
              <Form.Group className="mb-3" controlId="formBasicEText">
                <Form.Label className="text-left">Phone number</Form.Label>
                <Form.Control
                  required
                  type="number"
                  placeholder="Enter phone number"
                  name="phone"
                  className="form_input shadow-none"
                  maxLength="15"
                  value={phone}
                  onChange={handleInp}
                />
              </Form.Group>
            </Col> */}
          </Row>
          <Row>
            <Col md={4} lg={4} className="mb-3">
              <Form.Label className="text-left">
                Criminal Case Conviction
              </Form.Label>
              <Form.Select
                required
                aria-label="Default select example"
                name="criminal"
                value={criminal}
                onChange={handleInp}
                className="shadow-none form-select"
              >
                <option value="">select Conviction</option>
                <option value="yes">yes</option>
                <option value="no">no</option>
              </Form.Select>
            </Col>

            

            <Col md={4} lg={4} className="mb-3">
              <Form.Label className="text-left">
                Select multiple Language Proficiency
              </Form.Label>
              <Select
                isMulti
                options={options}
                components={animatedComponents}
                className="shadow-none form-multi"
                closeMenuOnSelect={false}
                onChange={handleMultiSelect}
                value={language&&language.split(',').map((it)=>{
return  { value: it, label: it };

                })}
                // delimiter=','
              />
              {/* <Form.Select
                required
                multiple
                aria-label="Default select example"
                name="language"
                // value={language}
                onChange={handleMultiSelect}
                className="shadow-none "
              >
                <option value="english">English</option>
                <option value="french">Pidgin</option>
                <option value="yoruba">Yoruba</option>
                <option value="igbo">Igbo</option>
                <option value="hausa">Hausa</option>
              </Form.Select> */}
            </Col>
            <Col md={4} lg={4} className="mb-3">
            <Form.Label className="text-left">Other languages</Form.Label>
            <CreatableSelect
            
        isMulti
        onChange={handleC}
        formatCreateLabel={(inputText) => `Add "${inputText}"`}
        placeholder='Type Other Languages'
        value={otherLang&&otherLang.split(',').map((it)=>{
          return  { value: it, label: it };
                          })}
      />
             
            </Col> 
          </Row>
          <Row>
            
           
            <Col md={4} lg={4}>
              <Form.Group className="mb-3" controlId="formBasicEText">
                <Form.Label className="text-left">Next of kin name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter next of kin name"
                  name="kinname"
                  className="form_input shadow-none"
                  value={kinname}
                  onChange={handleInp}
                />
              </Form.Group>
            </Col>

          
            <Col md={4} lg={4}>
              <Form.Group className="mb-3" controlId="formBasicEText">
                <Form.Label className="text-left">
                  Next of kin relationship
                </Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter next of kin relationship e.g father"
                  name="kinrel"
                  className="form_input shadow-none"
                  value={kinrel}
                  onChange={handleInp}
                />
              </Form.Group>
            </Col>

            {/* <Col md={4} lg={4}>
              <Form.Group className="mb-3" controlId="formBasicEText">
                <Form.Label className="text-left">
                  Next of kin address
                </Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter next of kin address"
                  name="kinaddy"
                  className="form_input shadow-none"
                  value={kinaddy}
                  onChange={handleInp}
                />
              </Form.Group>
            </Col> */}

            <Col md={4} lg={4}>
              <Form.Group className="mb-3" controlId="formBasicEText">
                <Form.Label className="text-left">Next of kin phone</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter next of kin phone"
                  name="kinphone"
                  className="form_input shadow-none"
                  value={kinphone}
                  onChange={handleInp}
                  maxLength="15"
                
                />
              </Form.Group>
            </Col>
          
          </Row>
          
        
          <Row>
            <Col md={6} lg={6} className="pt-2 ms-auto">
              <button className="my-btn btn-block mt-4">{editBio?'UPDATE':'NEXT'}</button>
            </Col>

           
          </Row>
        </Form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 1.6rem 0;
 text-transform: uppercase;
  background-image:
    linear-gradient(to right,  rgba(245, 246, 252, 0.92), 
    rgba(245, 246, 252, 0.82)),
    url(${pic2});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
export default BioData;
