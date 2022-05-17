import React,{useEffect} from "react";
import styled from "styled-components";
// import { Spinner,Alert} from "react-bootstrap";
import pic2 from "../assets/npc/water2.png";
import { useDispatch, useSelector } from "react-redux";
import { handleChange } from "../redux/userSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Title from "../components/Title";
const Prev = () => {
// const[dats,setData] = useState({});
// const[error,setError] = useState(false);
// const[loading,setLoading] = useState(false);

const navigate = useNavigate();
const dispatch=useDispatch();

const handleEdit=(name)=>{
    const nm = name;
   
   dispatch(handleChange({ name:nm, value:true }));
   if(nm==='editBio'){
    console.log(nm);
    navigate('/bio-data');
   }
   else if(nm==='editRes'){
    console.log(nm);
    navigate('/residence');
   }

   else if(nm==='editCon'){
    console.log(nm);
    navigate('/contact');
   }

   else if(nm==='editEdu'){
    console.log(nm);
    navigate('/education-data');
   }

   else if(nm==='editWork'){
    console.log(nm);
    navigate('/work');
   }

   else if(nm==='editFace'){
    console.log(nm);
    navigate('/face-capture');
   }


   else if(nm==='editBank'){
    console.log(nm);
    navigate('/banking-info');
   }
   



}




    const  {accessCode,
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
   
    phone,
    email,
   
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
    
     eadType,
ndhsType,
nmisType,
nedsType,
preType,
userResStateDet,
lgaResDet,
lgaDet,
userStateDet,
wardDet,
  } = useSelector((state) => state.user);

            
      const resAddy=localStorage.getItem('resDataInfo')? JSON.parse(localStorage.getItem('resDataInfo')).address:"";
      const imgEdu= localStorage.getItem('eduDataInfo')?JSON.parse(localStorage.getItem('eduDataInfo')).imgSrc:"";
      const quaEdu= localStorage.getItem('eduDataInfo')?JSON.parse(localStorage.getItem('eduDataInfo')).qualif:""
      const nameEdu= localStorage.getItem('eduDataInfo')?JSON.parse(localStorage.getItem('eduDataInfo')).name_school:""
      const gradeEdu= localStorage.getItem('eduDataInfo')?JSON.parse(localStorage.getItem('eduDataInfo')).grade:""


      const face= localStorage.getItem('imgDataInfo')?JSON.parse(localStorage.getItem('imgDataInfo')).img:""

      // const bnkAcc= localStorage.getItem('bankDataInfo')?JSON.parse(localStorage.getItem('bankDataInfo')).accName:""
      // const bnkName= localStorage.getItem('bankDataInfo')?JSON.parse(localStorage.getItem('bankDataInfo')).bankName:""
      // const bnkCode= localStorage.getItem('bankDataInfo')?JSON.parse(localStorage.getItem('bankDataInfo')).code:""
      // const accNum= localStorage.getItem('bankDataInfo')?JSON.parse(localStorage.getItem('bankDataInfo')).numb:""
      // const acctype= localStorage.getItem('bankDataInfo')?JSON.parse(localStorage.getItem('bankDataInfo')).acctyp:""

    const mapCent= localStorage.getItem('resDataInfo')?JSON.parse(localStorage.getItem('resDataInfo')).mapCenter:""

    const userward= localStorage.getItem('resDataInfo')?JSON.parse(localStorage.getItem('resDataInfo')).ward:""

    const lgaResidence= localStorage.getItem('resDataInfo')?JSON.parse(localStorage.getItem('resDataInfo')).lgaResidence:""
    const userResidenceState= localStorage.getItem('resDataInfo')?JSON.parse(localStorage.getItem('resDataInfo')).userResidenceState:""
 
const usersState= localStorage.getItem('bioDataInfo')?JSON.parse(localStorage.getItem('bioDataInfo')).userState:""
const usersLga= localStorage.getItem('bioDataInfo')?JSON.parse(localStorage.getItem('bioDataInfo')).lga:""



      const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
          var formdata = new FormData();
          formdata.append("access-code", accessCode);
          formdata.append("firstname", firstname);
          formdata.append("middlename", midname);
          formdata.append("lastname", surname);
          formdata.append("email", email);
          formdata.append("phone", phone);
          formdata.append("dob", date);
          formdata.append("gender", gender);
          formdata.append("address", resAddy);
          formdata.append("lat", mapCent.lat);
          formdata.append("lng", mapCent.lng);
          formdata.append("state", usersState);
          formdata.append("lga", usersLga);
          formdata.append("ward", userward);
          formdata.append("physical_challenge", challenge);
          formdata.append("computer_skill", computer);
          formdata.append("language", `${language},${otherLang}`);
          formdata.append("criminal_record", criminal);
          formdata.append("next_kin_name", kinname);
          formdata.append("next_kin_phone", kinphone);
          formdata.append("next_kin_relationship", kinrel);
    formdata.append("state_resid", userResidenceState);
          formdata.append("lga_resid", lgaResidence);
          formdata.append("email", email);
                formdata.append("phone", phone);
                formdata.append("qualification", quaEdu);
                formdata.append("grade", gradeEdu);
                formdata.append("documentimage", imgEdu);
                formdata.append("name_of_school", nameEdu);
                formdata.append("jobdesc1", jobDesc1);
                  formdata.append("jobdesc2", jobDesc2);
                  formdata.append("jobdesc3", jobDesc3);
                  formdata.append("jobdesc4", jobDesc4);
                  formdata.append("jobdesc5", jobDesc5);
                  formdata.append("jobtype1", eadType);
                  formdata.append("jobtype2", ndhsType);
                  formdata.append("jobtype3", nmisType);
                  formdata.append("jobtype4", nedsType);
                  formdata.append("jobtype5", preType);
                  formdata.append("other_exp_year_project", projectYear);
                  formdata.append("other_exp_name_project", projectName);
                  formdata.append("empoly_position", empPosition);
                  formdata.append("empoly_name_company", orgName);
                  formdata.append("employ_desired", poss);
                  formdata.append("face", face);
                  // formdata.append("account_number", accNum);
                  // formdata.append("bank_code", bnkCode);
                  // formdata.append("bank_name", bnkName);
                  // formdata.append("account_name", bnkAcc);
                  // formdata.append("account_type", acctype);







          var config = {
            method: "post",
            url: "https://api.verxid.site/npc/staging/v1/update-bio-data",
            headers: {
              Authorization: "Basic YmFybmtzZm9ydGUtbmltYzowbmx5YmFybmtzMTIz",
            },
            data: formdata,
          };
          const { data } = await axios(config);
          console.log(data.nimc);
         if(data.nimc.status===1){
          toast.success("Application sent successfully", {
            position: "top-center",
          });
          navigate('/cg')
         }

         else if(data.nimc.status === 0){
          toast.error(data.nimc.message, {
            position: "top-center",
          });
         }

          // console.log(formdata)
        
        } catch (error) {
          console.log(error);
          toast.error("please retry", {
            position: "top-left",
          });
        }
      };


//     if(loading){
// return <Wrapper>
// <div className="container">
// <Title title="form preview"/>
// <div className="row py-3">
// <div className="col-6  col-md-6 mx-auto">
// <Spinner animation="border" variant="success" />
// </div>
// </div>
// </div>
// </Wrapper>
//     }

//     if(error){
//         return <Wrapper>
//         <div className="container">
//         <Title title="form preview"/>
//         <div className="row py-3">
//         <div className="col-6  col-md-6 mx-auto">
//         <Alert  variant='warning'>
//       no data loaded...
//       <Alert.Link href="#">an example link</Alert.Link>. Give it a click if you
//       like.
//     </Alert>
//         </div>
//         </div>
//         </div>
//         </Wrapper>
//     }

useEffect(() => {
  const access = localStorage.getItem("access_code");
  if (!access) {
    navigate("/");
  }
}, [navigate])

  return (
    <Wrapper>
    <div className="container">
    <Title title="form preview"/>
<div className="cont-1">
{/* row1 */}
<div className="row">
   <h5 style={{color:"green",fontWeight:"bold"}}>Bio Data</h5> 
</div>
<div className="row py-3">
<div className="col-6 col-md-3 col-lg-3">
<h5>surname</h5>
<p>{surname}</p>
</div>

<div className="col-6 col-md-3 col-lg-3">
<h5>middle name</h5>
<p>{midname}</p>
</div>

<div className="col-6 col-md-3 col-lg-3">
<h5>first name</h5>
<p>{firstname}</p>
</div>

<div className="col-6 col-md-3 col-lg-3">
<h5>date of birth</h5>
<p>{date}</p>
</div>
</div>
<hr></hr>

{/* row2 */}
<div className="row py-3">
<div className="col-6 col-md-3 col-lg-3">
<h5>sex</h5>
<p>{gender}</p>
</div>


<div className="col-6 col-md-3 col-lg-3">
<h5>state of origin</h5>
<p>{userStateDet}</p>
</div>

<div className="col-6 col-md-3 col-lg-3">
<h5>LGA of Origin</h5>
<p>{lgaDet}</p>
</div>

<div className="col-6 col-md-3 col-lg-3">
<h5>Physical Challenge</h5>
<p>{challenge}</p>
</div>
</div>
<hr></hr>
{/* row3 */}
<div className="row py-3">
<div className="col-6 col-md-3 col-lg-3">
<h5>Computer Proficiency</h5>
<p>{computer}</p>
</div>

<div className="col-6 col-md-3 col-lg-3">
<h5>Language Proficiency</h5>
<p className="text-wrap">{`${language} ${otherLang}`}</p>
</div>


<div className="col-6 col-md-3 col-lg-3">
<h5>Next Of kin</h5>
<p>{kinname}</p>
</div>
<div className="col-6 col-md-3 col-lg-3">
<h5>Criminal Case Conviction</h5>
<p>{criminal}</p>
</div>
</div>
<hr></hr>
{/* row4 */}

<div className="row py-3">


<div className="col-6 col-md-3 col-lg-3">
<h5>Next Of kin Phone Number</h5>
<p>{kinphone}</p>
</div>

<div className="col-6 col-md-3 col-lg-3">
<h5>Relationship with next Of kin</h5>
<p>{kinrel}</p>
</div>

<div className="col-6 col-md-3 col-lg-3 ">

</div>
<div className="col-6 col-md-3 col-lg-3 ml-auto">
<button className="my-btn" onClick={()=>handleEdit('editBio')}>EDIT</button>
</div>


</div>
</div>

<div className="cont-2">
<div className="row">
   <h5 style={{color:"green",fontWeight:"bold"}}>Place Of Permanent Residence</h5> 
</div>
<div className="row py-3">
<div className="col-6 col-md-3 col-lg-3">
<h5>state of residence</h5>
<p>{userResStateDet}</p>

</div>

<div className="col-6 col-md-3 col-lg-3">
<h5>LGA of residence</h5>
<p>{
lgaResDet}</p>
</div>

<div className="col-12 col-md-3 col-lg-3">
<h5>Wards</h5>
<p>{wardDet}</p>
</div>

<div className="col-6 col-md-3 col-lg-3">
<h5>Usual Residential Address</h5>
<p>{resAddy}</p>
</div>


</div>
<div className="row">
<div className="col-6 col-md-3 col-lg-3 ms-auto">
<button className="my-btn" onClick={()=>handleEdit('editRes')}>EDIT</button>
</div>
</div>
</div>

<div className="cont-3">
<div className="row">
   <h5 style={{color:"green",fontWeight:"bold"}}>Contact Information</h5> 
</div>
<div className="row py-3">
<div className="col-12 col-md-8 col-lg-8">
<h5>Email Address</h5>
<p>{email}</p>
</div>

<div className="col-12 col-md-4 col-lg-4">
<h5>Mobile Number</h5>
<p>{phone}</p>
</div>



</div>

<div className="row">
<div className="col-6 col-md-3 col-lg-3 ms-auto">
<button className="my-btn" onClick={()=>handleEdit('editCon')}>EDIT</button>
</div>
</div>
</div>


<div className="cont-4">
<div className="row">
   <h5 style={{color:"green",fontWeight:"bold"}}>Education Background</h5> 
</div>
<div className="row py-3">
<div className="col-6 col-md-3 col-lg-3">
<h5>Qualification</h5>

<p>{quaEdu}</p>
</div>

<div className="col-6 col-md-3 col-lg-3">
<h5>Name of institution</h5>
<p>{nameEdu}</p>
</div>
{
    gradeEdu &&
<div className="col-6 col-md-3 col-lg-3">
<h5>Grade</h5>
<p>{gradeEdu}</p>
</div>

}

{
    imgEdu &&
<div className="col-6 col-md-3 col-lg-3">
<img src={imgEdu} className='img-fluid' alt=''/>
</div>

}

</div>

<div className="row">
<div className="col-6 col-md-3 col-lg-3 ms-auto">
<button className="my-btn" onClick={()=>handleEdit('editEdu')}>EDIT</button>
</div>
</div>
</div>


<div className="cont-5">
{/* row1 */}
<div className="row">
   <h5 style={{color:"green",fontWeight:"bold"}}>Work Experience</h5> 
</div>
<div className="row py-3">
<div className="col-12 col-md-6">
<h5>Do you have any previous work experience with NPC?</h5>
<p>{workExperience}</p>
</div>

<div className="col-12 col-md-6">
<h5>job description</h5>
{workExperience?
<>
<p>{jobDesc1}{(eadType)}</p>
<p>{jobDesc2}{(ndhsType)}</p>
<p>{jobDesc3}{(nmisType)}</p>
<p>{jobDesc4}{(nedsType)}</p>
<p>{jobDesc5}{(preType)}</p>
</>
:<p>none</p>
}
</div>

<div className="col-12 col-md-6 col-lg-6">
<h5>other experience</h5>
{otherExperience||"none"
}
</div>

<div className="col-12 col-md-6 col-lg-6">
<h5>name of project and year</h5>
{otherExperience?
<>
<p>{projectName}</p>
<p>{projectYear}</p>

</>
:<p>none</p>
}
</div>

<div className="col-12 col-md-6 col-lg-6">
<h5> Are you currently employed?</h5>


{employed ||"No"
}
</div>

<div className="col-12 col-md-6 col-lg-6">
<h5>Name of Organization</h5>
<p>
{orgName ||"None"
}</p>
</div>

<div className="col-12 col-md-6 col-lg-6">
<h5>Position</h5>
<p>
{empPosition || "None"
}</p>
</div>

<div className="col-6 col-md-6 col-lg-6">
<h5>Employment Desired</h5>
<p>{poss}</p>
</div>


</div>
<div className="row">
<div className="col-6 col-md-3 col-lg-3 ms-auto">
<button className="my-btn" onClick={()=>handleEdit('editWork')}>EDIT</button>
</div>
</div>


</div>


{/* row2 */}
<div className="cont-6">
<div className="row">
   <h5 style={{color:"green",fontWeight:"bold"}}>Face Capture</h5> 
</div>
<div className="row py-3">
<div className="col-6 col-md-6 col-lg-6">
<img src={face} className='img-fluid' alt=''/>
</div>




</div>
<div className="row">
<div className="col-3 col-md-3 col-lg-3 ms-auto">
<button className="my-btn" onClick={()=>handleEdit('editFace')}>EDIT</button>
</div>
</div>
</div>

{/* <div className="cont-4">
<div className="row">
   <h5 style={{color:"green",fontWeight:"bold"}}>Bank Details</h5> 
</div>
<div className="row py-3">
<div className="col-6 col-md-3 col-lg-3">
<h5>Bank Name</h5>
<p>{bnkName}</p>
</div>

<div className="col-6 col-md-3 col-lg-3">
<h5>Account Number</h5>
<p>{bnkAcc}</p>
</div>

<div className="col-6 col-md-3 col-lg-3">
<h5>Account Name</h5>
<p>{accNum}</p>
</div>


<div className="col-6 col-md-3 col-lg-3">
<button className="my-btn" onClick={()=>handleEdit('editBank')}>EDIT</button>
</div>
</div>
</div> */}

<div className="row">
<div className="col-md-6 mx-auto">

<button className="my-btn btn-block mt-4" onClick={handleFormSubmit}>SUBMIT</button>
</div>
</div>
        </div>

        </Wrapper>
  )
}

const Wrapper = styled.section`
  
  padding: 1.6rem 0;
 min-height: calc(100vh - 107px);
  background-image:
    linear-gradient(to right,  rgba(245, 246, 252, 0.92), 
    rgba(245, 246, 252, 0.82)),
    url(${pic2});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
text-transform: uppercase;
  h5{
      margin-bottom:0;
      font-weight:300;
      font-size:1.3rem
  }

  p{
    
      font-size:1rem;
      font-weight:lighter;
  }

  .cont-1,.cont-2,.cont-3,.cont-4,.cont-5,.cont-6{
      box-shadow: var(--shadow-4);
      padding: 0.5rem  0.5rem ;
      margin-top:1.3rem
  }
  
`;
export default Prev