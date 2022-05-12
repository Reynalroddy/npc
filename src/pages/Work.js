import React, { useEffect} from "react";
import styled from "styled-components";
import { Row, Col, Form ,FormControl} from "react-bootstrap";
import pic2 from "../assets/npc/water2.png";
import { useDispatch, useSelector } from "react-redux";
import { handleChange,handlewrkChange } from "../redux/userSlice";
// import axios from "axios";
// import Select from "react-select";
import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
import Title from "../components/Title";
const Work = () => {
  // const [workExp,setWorkExp]=useState(false);
  // const [otherExp,setOtherExp]=useState(false);
  // const [emp,setEmp]=useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    workExperience,
    otherExperience,
    projectName,
    projectYear,
    employed,
    orgName,
empPosition,
    jobDesc1,
     jobDesc2,
     jobDesc3,
     jobDesc4,
     jobDesc5,
   poss,
   jobDesc6,
   jobDesc7,
   jobDesc8,
editWork,
workExp,
otherExp,
emp
   } = useSelector((state) => state.user);
   // eslint-disable-next-line
//   const [eads, setEad] = useState([
//     {label:'Phase 1',
//       val:'Phase 1'
//   },
//   {label:'Phase 2',
//   val:'Phase 2'
// },
// {label:'Phase 3',
// val:'Phase 3'
// },
// {label:'Phase 4',
// val:'Phase 4'
// },
//  {label:'Phase 5',
// val:'Phase 5'
// },
// {label:'Phase 6',
// val:'Phase 6'
// },
// {label:'Phase 7',
// val:'Phase 7'
// },
// {label:'Phase 8',
// val:'Phase 8'
// },
// {label:'Phase 9',
// val:'Phase 9'
// },
// {label:'Phase 10',
// val:'Phase 10'
// },
// {label:'Phase 11',
// val:'Phase 11'
// },
// {label:'Phase 12',
// val:'Phase 12'
// },
// {label:'Phase 13',
// val:'Phase 13'
// },
// {label:'Phase 14',
// val:'Phase 14'
// },
// {label:'Phase 15',
// val:'Phase 15'
// },
// {label:'Phase 16',
// val:'Phase 16'
// },
// {label:'Phase 17',
// val:'Phase 17'
// },
// {label:'Phase 18',
// val:'Phase 18'
// },
//   ]);
//   // eslint-disable-next-line
//   const [ndh, setNdh] = useState([

// {label:'1999',
// val:'1999'
// },
// {label:'2003',
// val:'2003'
// },
// {label:'2008',
// val:'2008'
// },
// {label:'2013',
// val:'2013'
// },
// {label:'2018',
// val:'2018'
// },
//   ]);
//   // eslint-disable-next-line
//   const [nmi, setNmi] = useState([
//     {label:'2010',
// val:'2010'
// },
// {label:'2015',
// val:'2015'
// },
// {label:'2018',
// val:'2018'
// },
// {label:'2021',
// val:'2021'
// },
//   ]);
//   // eslint-disable-next-line
//   const [ned, setNed] = useState([
//     {label:'2004',
//     val:'2004'
//     },
//     {label:'2010',
//     val:'2010'
//     },
//     {label:'2015',
//     val:'2015'
//     },
//     {label:'2020',
//     val:'2020'
//     },
//   ]);
//   // eslint-disable-next-line
//   const [pre, setPre] = useState([
//     {label:'Pre-Test 1',
//     val:'pre-test 1'
//     },
//     {label:'Pre-Test 2',
//     val:'pre-test 2'
//     },
//   ]);

 
  const handleSelectInp=(e)=>{
    const name=e.target.name;
const res = e.target.value;
if(res ==="yes"){
// setWorkExp(true);
dispatch(handlewrkChange({ name:'workExp', value:true }));
}
else if(res==="no"){
  // setWorkExp(false);
  // dispatch(handleChange({ name, value:""}));
  dispatch(handlewrkChange({ name:'workExp', value:false }));
}

dispatch(handleChange({ name, value:res }));

  }


  const handleOthSelectInp=(e)=>{
    const name=e.target.name;
const res = e.target.value;
if(res ==="yes"){
// setWorkExp(true);
// setOtherExp(true)
dispatch(handlewrkChange({ name:'otherExp', value:true }));
}
else if(res==="no"){
  // setOtherExp(false);
  dispatch(handlewrkChange({ name:'otherExp', value:false }));
}

dispatch(handleChange({ name, value:res }));

  }

  const handleEmpSelectInp=(e)=>{
    const name=e.target.name;
const res = e.target.value;
if(res ==="yes"){
// setWorkExp(true);
// setEmp(true)
dispatch(handlewrkChange({ name:'emp', value:true }));
}
else if(res==="no"){
  // setEmp(false);
  dispatch(handlewrkChange({ name:'emp', value:false }));
}

dispatch(handleChange({ name, value:res }));

  }

  const handleCheck=(e)=>{
const isChecked = e.target.checked;
const name = e.target.name;
const value=e.target.value;
if(isChecked){
  dispatch(handleChange({ name, value }));
}
else{
  dispatch(handleChange({ name, value:""}));
}
  }

  // const handleEadMultiSelect = (selectedOption) => {
  //   const news = selectedOption.map((it, i) => {
  //     return it.val;
  //   });
  //   const name = "eadType";
  //   const newz=news.join(',')
  //   dispatch(handleChange({ name, value:newz }));
  //   console.log(news,newz);
  // };

  // const handleNdhMultiSelect = (selectedOption) => {
  //   const news = selectedOption.map((it, i) => {
  //     return it.val;
  //   });
  //   const name = "ndhsType";
  //   const newz=news.join(',')
  //   dispatch(handleChange({ name, value:newz }));
  //   console.log(news,newz);
  // };

  // const handleNmiMultiSelect = (selectedOption) => {
  //   const news = selectedOption.map((it, i) => {
  //     return it.val;
  //   });
  //   const name = "nmisType";
  //   const newz=news.join(',')
  //   dispatch(handleChange({ name, value:newz }));
  //   console.log(news,newz);
  // };

  // const handleNedsMultiSelect = (selectedOption) => {
  //   const news = selectedOption.map((it, i) => {
  //     return it.val;
  //   });
  //   const name = "nedsType";
  //   const newz=news.join(',')
  //   dispatch(handleChange({ name, value:newz }));
  //   console.log(news,newz);
  // };

  // const handlePreMultiSelect = (selectedOption) => {
  //   const news = selectedOption.map((it, i) => {
  //     return it.val;
  //   });
  //   const name = "preType";
  //   const newz=news.join(',')
  //   dispatch(handleChange({ name, value:newz }));
  //   console.log(news,newz);
  // };

  const handleNormInp=(e)=>{
    const name = e.target.name;
    const value = e.target.value;
    dispatch(handleChange({ name, value }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const work_data={
      jobDesc1,
      jobDesc2,
      jobDesc3,
      jobDesc4,
      jobDesc5,
      jobDesc6,
      jobDesc7,
      jobDesc8,
      workExperience,
      otherExperience,
      projectName,
      projectYear,
      employed,
      orgName,
  empPosition,
  poss,
  workExp,
otherExp,
emp
    }
    if(editWork){
      localStorage.setItem('workDataInfo',JSON.stringify(work_data));
      
      dispatch(handleChange({ name:'editWork', value:false }));
      navigate("/prev"); 
    } 
    else{
      localStorage.setItem('workDataInfo',JSON.stringify(work_data));
      navigate("/face-capture");
    }
   
    // try {
    //   var formdata = new FormData();
    //   formdata.append("access-code", accessCode);
    //   formdata.append("jobdesc1", jobDesc1);
    //   formdata.append("jobdesc2", jobDesc2);
    //   formdata.append("jobdesc3", jobDesc3);
    //   formdata.append("jobdesc4", jobDesc4);
    //   formdata.append("jobdesc5", jobDesc5);
    //   formdata.append("jobtype1", eadType);
    //   formdata.append("jobtype2", ndhsType);
    //   formdata.append("jobtype3", nmisType);
    //   formdata.append("jobtype4", nedsType);
    //   formdata.append("jobtype5", preType);
    //   formdata.append("other_exp_year_project", projectYear);
    //   formdata.append("other_exp_name_project", projectName);
    //   formdata.append("empoly_position", empPosition);
    //   formdata.append("empoly_name_company", orgName);
    //   formdata.append("employ_desired", poss);
      
    //   var config = {
    //     method: "post",
    //     url: "https://api.verxid.site/npc/staging/v1/update-work-data",
    //     headers: {
    //       Authorization: "Basic YmFybmtzZm9ydGUtbmltYzowbmx5YmFybmtzMTIz",
    //     },
    //     data: formdata,
    //   };
    //   const { data } = await axios(config);
    //   console.log(data.nimc);
    //   if (data.nimc.status === 0) {
    //     toast.error(data.nimc.message, {
    //       position: "top-center",
    //     });
    //   } else if (data.nimc.status === 1) {
    //     toast.success(data.nimc.message, {
    //       position: "top-center",
    //     });

    //     if(editWork){
    //       navigate("/prev"); 
    //       dispatch(handleChange({ name:'editWork', value:false }));
    //     } 
    //     else{
    //     localStorage.setItem("wrk", "yes");
    //     // dispatch(clearValue());
    //     navigate("/face-capture");
    //     }
    //   }
    // } catch (error) {
    //   console.log(error);
    //   toast.error("please retry", {
    //     position: "top-left",
    //   });
    // }
  
  };

  useEffect(() => {
    const access = localStorage.getItem("access_code");
    if (!access) {
      navigate("/");
    }
    if(editWork){
      if (workExperience ) {
        dispatch(handlewrkChange({ name:'workExp', value:true }));
      }
      if (otherExperience ) {
        dispatch(handlewrkChange({ name:'otherExp', value:true }));
      }
      if (employed ) {
        dispatch(handlewrkChange({ name:'emp', value:true }));
      }
    }
   
    
  }, [workExperience,otherExperience,employed,editWork,navigate,dispatch]);
  return (
    <Wrapper>
    <div className="container">
    <Title title="work experience"/>
      <Form className="" onSubmit={handleSubmit}
      >
        <Row className="py-2">
        <Col md={6} lg={6}>
              <Form.Group className="mb-3" controlId="formBasicEText">
              <Form.Label className="text-left">
                  Do you have any previous work experience with NPC(Census experience)?
                </Form.Label>
                <Form.Select
               required
                aria-label="Default select example"
                name="workExperience"
                value={workExperience}
                onChange={handleSelectInp}
                className="shadow-none form-select"
              >
                <option value="">Select job experience</option>

                <option value="no">No</option>

                <option value="yes">Yes</option>
              </Form.Select>
              </Form.Group>
            </Col>

{
  workExp &&
            <Col md={6} lg={6}>
            <Form.Label className="text-left">
                  Select job description
                </Form.Label>
                <div className="jb-pr"> 
                <Form.Check 
        type='checkbox'
      
        defaultChecked={jobDesc1}
        id='default-checkbox'
        label='EAD'
        name='jobDesc1'
        value='ead'
        onChange={handleCheck}
      />   
                </div>

                <div className="jb-pr"> 
                <Form.Check 
        type='checkbox'
        defaultChecked={jobDesc2}
        id='default-checkbox'
        label='NDHS'
        name='jobDesc2'
        value='ndhs'
        onChange={handleCheck}
      />



                </div>

                <div className="jb-pr"> 
                <Form.Check 
        type='checkbox'
        defaultChecked={jobDesc3}
        id='default-checkbox'
        label='NMIS'
        name='jobDesc3'
        value='nmis'
        onChange={handleCheck}
      />



                </div>

                <div className="jb-pr"> 
                <Form.Check 
        type='checkbox'
        defaultChecked={jobDesc4}
        id='default-checkbox'
        label='NEDS'
        name='jobDesc4'
        value='neds'
        onChange={handleCheck}
      />


                </div>

                <div className="jb-pr"> 
                <Form.Check 
        type='checkbox'
        defaultChecked={jobDesc5}
        id='default-checkbox'
        label='PRE-TEST'
        name='jobDesc5'
        value='pretest'
        onChange={handleCheck}
      />


                </div>
           

                <div className="jb-pr"> 
                <Form.Check 
        type='checkbox'
        defaultChecked={jobDesc6}
        id='default-checkbox'
        label='NURHI'
        name='jobDesc6'
        value='NURHI'
        onChange={handleCheck}
      />



                </div>
                <div className="jb-pr"> 
                <Form.Check 
        type='checkbox'
        defaultChecked={jobDesc7}
        id='default-checkbox'
        label='VASA'
        name='jobDesc7'
        value='VASA'
        onChange={handleCheck}
      />



                </div>
                <div className="jb-pr"> 
                <Form.Check 
        type='checkbox'
        defaultChecked={jobDesc8}
        id='default-checkbox'
        label='NISHIP'
        name='jobDesc8'
        value='NISHIP'
        onChange={handleCheck}
      />

{/* <Select
                isMulti
                options={pre}
                getOptionLabel={(e) => e.label}
                getOptionValue={(e) => e.val}
                onChange={handlePreMultiSelect}
                closeMenuOnSelect={false}   
                className="shadow-none  jb-sec"
                placeholder='Select Pre-test'
                value={preType.split(',').map((it)=>{
                  return  { val: it, label: it };
                  
                                  })}
              /> */}

                </div>

            </Col>
            }
            </Row>

            <Row>
            <Col md={6} lg={6}>
              <Form.Group className="mb-3" controlId="formBasicEText">
              <Form.Label className="text-left">
                  Do you have any experience in fieldwork/data collection, data capturing/processing, supervisory(Outside NPC)?
                </Form.Label>
                <Form.Select
                required
                aria-label="Default select example"
                name="otherExperience"
                value={otherExperience}
                onChange={handleOthSelectInp}
                className="shadow-none form-select"
              >
                <option value="">Select </option>

                <option value="no">No</option>

                <option value="yes">Yes</option>
              </Form.Select>
              </Form.Group>
            </Col>

            {
otherExp  && <Col  md={6} lg={6}>
<Row className="mt-5 py-3">
<Col sm={6} md={6} className='mb-2 my-md-0' >
<FormControl
   
     placeholder="Name of Project"
     name="projectName"
      aria-describedby="basic-addon2"
      className="form_input shadow-none"
      // maxLength="15"
      value={projectName}
      onChange={handleNormInp}
    />
</Col>

<Col sm={6} md={6} >
<FormControl
    
     placeholder="Project Year"
     name="projectYear"
      aria-describedby="basic-addon2"
      className="form_input shadow-none"
      // maxLength="15"
      value={projectYear}
      onChange={handleNormInp}
    />

</Col>
</Row>

</Col>

            }
            </Row>


            <Row>
            <Col md={6} lg={6}>
              <Form.Group className="mb-3" controlId="formBasicEText">
              <Form.Label className="text-left">
                  Are you currently employed?
                </Form.Label>
                <Form.Select
                required
                aria-label="Default select example"
                name="employed"
                value={employed}
                onChange={handleEmpSelectInp}
                className="shadow-none form-select"
              >
                <option value="">Select </option>

                <option value="no">No</option>

                <option value="yes">Yes</option>
              </Form.Select>
              </Form.Group>
            </Col>

            {
emp && <Col md={6} lg={6} className='pt-1'>
<Row className="mt-3 pt-3">
<Col>
<FormControl
   
     placeholder="Name of Organization"
     name="orgName"
      aria-describedby="basic-addon2"
      className="form_input shadow-none"
      // maxLength="15"
      value={orgName}
      onChange={handleNormInp}
    />
</Col>

<Col>
<FormControl
    
     placeholder="Position"
     name="empPosition"
      aria-describedby="basic-addon2"
      className="form_input shadow-none"
      // maxLength="15"
      value={empPosition}
      onChange={handleNormInp}
    />

</Col>
</Row>

</Col>

            }
            </Row>


            <Row>
            <Col md={6} lg={6}>
              <Form.Group className="mb-3" controlId="formBasicEText">
              <Form.Label className="text-left">
                  Employment Desired
                </Form.Label>
                <Form.Select
                
                aria-label="Default select example"
                name="poss"
                value={poss}
                onChange={handleNormInp}
                className="shadow-none form-select"
              >
                <option value="">Select </option>

                <option value="Enumerator">Enumerator</option>
<option value='Census trainers/Facilitators'>Census trainers/Facilitators</option>
                <option value="Supervisor">Supervisor</option>
                <option value="Data quality assistants/Coordinator">Data quality assistants/Coordinator</option>
              
              </Form.Select>
              </Form.Group>
            </Col>
            </Row>

            <Row>
            <Col md={6} lg={6} className="pt-2">
              <button   className="my-btn btn-block btn-clear mt-4" onClick={()=>navigate(-1)}>Back</button>
            </Col>

            <Col md={6} lg={6} className="pt-2 mx-auto">
              <button
                className="my-btn btn-block mt-4"
                // disabled={isLoading}
                //   onClick={handleSubmit}
                type="submit"
              >
                {editWork?'UPDATE':'NEXT'}
              </button>
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

  .jb-pr{
    display: flex;
    gap: 0.6rem;
    margin: 0.8rem 0rem;
  }
  .jb-sec{
    width: 50%;
  }
`;

export default Work