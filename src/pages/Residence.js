import React,{useState,useEffect,useRef} from 'react'
import Title from '../components/Title';
import { Form,Row,Col } from 'react-bootstrap';
import pic2 from "../assets/npc/water2.png";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { handleChange,handleStChange} from "../redux/userSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Map from "./Map";
import Select from "react-select";
import { components } from "react-select";
import { toast } from "react-toastify";
const Residence = () => {
    const [lg, setLg] = useState([]);
  const [lgas, setLga] = useState([]);
  const [wards, setWards] = useState([]);
  const selectInputRef = useRef();
    const navigate = useNavigate();
    const isValidNewOption = (inputValue, selectValue) =>
    inputValue.length > 0 && selectValue.length < 3;
    const Menu = props => {
      const optionSelectedLength = props.getValue().length || 0;
      return (
        <components.Menu {...props}>
          {optionSelectedLength < 3  ? (
            props.children
          ) : (
            <div style={{ margin: 15 }}>Max limit achieved</div>
          )}
        
        </components.Menu>
      );
    };
    const {
        userResidenceState,
        lgaResidence,
        ward,
        address,
        mapCenter,
        userResStateDet,
        lgaResDet,
        editRes,
        wardDet,
       
      } = useSelector((state) => state.user);
      const dispatch = useDispatch();

      const handleSubmit = async (e) => {
        e.preventDefault();
        const res_data={
          userResStateDet,
        lgaResDet,
          ward,
          address,
          mapCenter,
          userResidenceState,
          lgaResidence,
          wardDet
        }
if(!ward){
  toast.error('please select wards', {
    position: "top-center",
  });
  return;
}


        if(editRes){
          localStorage.setItem('resDataInfo',JSON.stringify(res_data));
          
                dispatch(handleChange({ name:'editRes', value:false }));
                navigate("/prev"); 
              } 
              else{ 
                localStorage.setItem('resDataInfo',JSON.stringify(res_data));
                navigate("/contact"); 
        }
        // try {
        //   var formdata = new FormData();
        //   formdata.append("access-code", accessCode);
          
        //   formdata.append("address", address);
        //   formdata.append("lat", mapCenter.lat);
        //   formdata.append("lng", mapCenter.lng);
        //   formdata.append("state", userResidenceState);
        //   formdata.append("lga", lgaResidence);
        //   formdata.append("ward", ward);
         
    
        //   var config = {
        //     method: "post",
        //     url: "https://api.verxid.site/npc/staging/v1/update-residence-data",
        //     headers: {
        //       Authorization: "Basic YmFybmtzZm9ydGUtbmltYzowbmx5YmFybmtzMTIz",
        //     },
        //     data: formdata,
        //   };
        //   const { data } = await axios(config);
        //   console.log(data.nimc);
        //   if (data.nimc.status === 0) {
        //     toast.error(data.nimc.message, {
        //       position: "top-left",
        //     });
        //   } else if (data.nimc.status === 1) {
        //     toast.success(data.nimc.message, {
        //       position: "top-left",
        //     });
        //     if(editRes){
        //       navigate("/prev"); 
        //       dispatch(handleChange({ name:'editRes', value:false }));
        //     } 

        //     else{ localStorage.setItem("res", "yes");
        //     // dispatch(clearValue());
        //     navigate("/contact");}
           
        //   }
        // } catch (error) {
        //   console.log(error);
        //   toast.error("please retry", {
        //     position: "top-left",
        //   });
        // }

        // last
      };
      const handleStateChange = async (e) => {
        const name = e.target.name;
        const value = e.target.value;
        const tx= e.target.options[e.target.selectedIndex].text;
        dispatch(handleChange({ name, value }));
        dispatch(handleStChange({name:'userResStateDet',value:tx}))
        // console.log(userState);
        var formdata = new FormData();
    
        var config = {
          method: "get",
          
          url: `https://api.verxid.site/npc/staging/v1/get-lga?stateid=${value}`,
          data: formdata,
        };
        const { data } = await axios(config);
        console.log(data.npc);
        // if(lgas){
        //   setLga(data.npc);
        //   return;
        // }
     selectInputRef.current.clearValue(); 
        setLga(data.npc);

        // setWards([]);
        // setUserState(e.target.value);
        // console.log(userState);
      };
    
      const handleMultiSelect = (selectedOption) => {
        const news = selectedOption.map((it, i) => {
          return it.id;
        });
        const nms = selectedOption.map((it, i) => {
          return it.name;
        });
        const lName='wardDet';
        const name = "ward";
        const newz=news.join(',');
        const nmz = nms.join(',');
        dispatch(handleChange({ name, value:newz }));
        dispatch(handleStChange({ name:lName, value:nmz }));
        // console.log(news,newz);
      };
      const handleLgaChange = async (e) => {
        const name = e.target.name;
        const value = e.target.value;
        const lgtx= e.target.options[e.target.selectedIndex].text;
        dispatch(handleChange({ name, value }));
        dispatch(handleStChange({name:'lgaResDet',value:lgtx}))
        // console.log(userState);
        var formdata = new FormData();
    
        var config = {
          method: "get",
          url: `https://api.verxid.site/npc/staging/v1/get-wards?lgaid=${value}`,
          data: formdata,
        };
        const { data } = await axios(config);
        console.log(data.npc);
        setWards(data.npc);
      };
      useEffect(() => {
        const access = localStorage.getItem("access_code");
        if (!access) {
          navigate("/");
        }
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
      }, [navigate]);
  return ( 
    <Wrapper>

<div className="container">
        <Title title="personal information"/>
        <Form className="" onSubmit={handleSubmit} >
          <h5 className="text-center pt-2"> place of permanent residence</h5>
          <Row>
          <Col md={4} lg={4}>
              <Form.Label className="text-left">
                Select State Of Residence
              </Form.Label>
              <Form.Select
                required
                aria-label="Default select example"
                name="userResidenceState"
              
                onChange={handleStateChange}
                className="shadow-none form-select"
              >
                <option value="">Select State of Residence</option>
                {lg.map((it, i) => {
                  return (
                    <option key={it.id} value={it.id}>
                      {it.name}
                    </option>
                  );
                })}
              </Form.Select>
            </Col>


            <Col md={4} lg={4}>
              <Form.Label className="text-left">
                Select LGA of Residence
              </Form.Label>
              <Form.Select
                required
                aria-label="Default select example"
                name="lgaResidence"
               
                onChange={handleLgaChange}
                className="shadow-none form-select"
              >
                <option value="">Select LGA</option>
                {lgas.map((it, i) => {
                  return (
                    <option value={it.id} key={it.id}>
                      {it.name}
                    </option>
                  );
                })}
              </Form.Select>
            </Col>
             
            <Col md={4} lg={4}>
              <Form.Label className="text-left">Select three Wards closest to you.</Form.Label>
              <Select
               ref={selectInputRef}
                isMulti
                options={wards}
                getOptionLabel={(e) => e.name}
                getOptionValue={(e) => e.id}
                onChange={handleMultiSelect}
                closeMenuOnSelect={false}  
                isValidNewOption={isValidNewOption} 
                components={{ Menu }}
                placeholder={'select three wards closest to you'}
              />
              
            </Col> 
 


              </Row>
              <Row>
            <Col md={12} lg={12} className="pt-2">
              <Form.Group className="mb-3" controlId="formBasicEText">
                <Form.Label className="text-left"> Usual Place Of Residence</Form.Label>
                <div className="map-cont">
                  <Map />
                </div>
              </Form.Group>
            </Col>
          </Row>

          <Row>
          <Col md={6} lg={6} className="pt-2">
              <button   className="my-btn btn-block btn-clear mt-4" onClick={()=>navigate(-1)}>Back</button>
            </Col>
            <Col md={6} lg={6} className="pt-2">
              <button type='submit' className="my-btn btn-block mt-4">{editRes?'UPDATE':'NEXT'}</button>
            </Col>
            </Row>
              </Form>
</div>
    </Wrapper>
  )
}

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
export default Residence