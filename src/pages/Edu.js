import React, { useState,useEffect} from "react";
import { Row, Col, Form } from "react-bootstrap";
import styled from "styled-components";
import { useSelector,useDispatch } from "react-redux";
import { handleChange } from "../redux/userSlice";
import FileBase64 from "react-file-base64";
import { toast } from "react-toastify";
import pic2 from "../assets/npc/water2.png";
import { useNavigate } from "react-router-dom";
const Edu = () => {
  const { editEdu } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const vals = {
    name: localStorage.getItem('eduDataInfo')?JSON.parse(localStorage.getItem('eduDataInfo')).name_school:"",
    qualif: localStorage.getItem('eduDataInfo')?JSON.parse(localStorage.getItem('eduDataInfo')).qualif:"",
    grade: localStorage.getItem('eduDataInfo')?JSON.parse(localStorage.getItem('eduDataInfo')).grade:"",
  };
  const [values, setValues] = useState(vals);
  const [imgSrc, setImg] = useState("");
  const [showGrade, setShowGrade] = useState(true);
  const handleChangeC = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    if(e.target.name ==='qualif'){
      const ans = e.target.value;
if(ans==='ssce' || ans==='phd/masters'){
setShowGrade(false);
}
else{
  setShowGrade(true);
}

    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!imgSrc){
      toast.error('image not selected', {
        position: "top-center",
      });
    }

    else{
    const { name, qualif, grade } = values;
    console.log(name, qualif, grade, imgSrc);
    const edu_data={

      name_school:name,qualif,grade,imgSrc
    }

    if(editEdu){
      localStorage.setItem('eduDataInfo',JSON.stringify(edu_data));
      
      dispatch(handleChange({ name:'editEdu', value:false }));
      navigate("/prev"); 
    } 
    else{
      localStorage.setItem('eduDataInfo',JSON.stringify(edu_data));
      navigate("/work");
    }
 

      }

  
  };

  useEffect(() => {
    const access = localStorage.getItem("access_code");
    if (!access) {
      navigate("/");
    }
  }, [navigate])
  

  return (
    <Wrapper>
      <div className="container">
        <Form className="" onSubmit={handleSubmit}>
          <h4>Educational information</h4>
          <Row>
            <Col md={4} lg={4}>
              <Form.Group className="mb-3" controlId="formBasicEText">
                <Form.Label className="text-left">
                  Name of Institution
                </Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Name of Institution"
                  className="form_input shadow-none"
                  name="name"
                  onChange={handleChangeC}
                  value={values.name}
                />
              </Form.Group>
            </Col>

            <Col md={4} lg={4}>
              <Form.Label className="text-left">Qualification</Form.Label>
              <Form.Select
              required
                aria-label="Default select example"
                name="qualif"
                value={values.qualif}
                onChange={handleChangeC}
                className="shadow-none form-select"
              >
                <option value="">Select Qualification</option>
                <option value="ssce">SSCE</option>
                <option value="bsc/hnd">BSC/HND</option>
                <option value="phd/masters">MSC/PHD</option>
                <option value="diploma">DIPLOMA/ND</option>
              </Form.Select>
            </Col>

            {showGrade &&<Col md={4} lg={4}>
              <Form.Label className="text-left">
                Grade(*Not Applicable to SSCE)
              </Form.Label>
              <Form.Select
              required={showGrade}
                aria-label="Default select example"
                name="grade"
                onChange={handleChangeC}
                className="shadow-none form-select"
                value={values.grade}
              >       
                <option value="">Select Grade</option>
                <option value="firstclass">first class</option>
                <option value="secondclassupper">secondclass upper</option>
                <option value="secondclasslower">secondclass lower</option>
                <option value="thirdclass">thirdclass</option>
                <option value="pass">pass</option>
                <option value="uppercredit">uppercredit</option>
                <option value="lowercredit">lowercredit</option>
              </Form.Select>
            </Col>
            }
          </Row>
          <Row>
            <Col sm={12} md={6} lg={6}>
              <Form.Label className="text-left">Image Certificate</Form.Label>
              <FileBase64
                multiple={false}
                onDone={({ base64 }) => {
                  console.log(base64);
                  setImg(base64);
                }}
              />
            </Col>
</Row>
<Row>
<Col md={6} lg={6} className="pt-2">
              <button   className="my-btn btn-block btn-clear mt-4" onClick={()=>navigate(-1)}>Back</button>
            </Col>
            <Col md={6} lg={6} className="pt-2">
              <button
              type='submit'
                className="my-btn btn-block mt-4"
                // disabled={isLoading}
                //   onClick={handleSubmit}
              >
                {editEdu?'UPDATE':'NEXT'}
              </button>
            </Col>
          </Row>
        </Form>
      </div>
    </Wrapper>
  );
};

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
export default Edu;
