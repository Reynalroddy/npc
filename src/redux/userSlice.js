import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    accessCode: localStorage.getItem("access_code") || "",
    address: "",
    mapCenter: {
      lat: 9.082,
      lng: 7.491302,
    },
    userState: "",
    lga: "",
    ward: "",
    
    userStateDet:localStorage.getItem('bioDataInfo')?JSON.parse(localStorage.getItem('bioDataInfo')).userStateDet :"",
    lgaDet:localStorage.getItem('bioDataInfo')?JSON.parse(localStorage.getItem('bioDataInfo')).lgaDet :"",
    wardDet:localStorage.getItem('resDataInfo')?JSON.parse(localStorage.getItem('resDataInfo')).wardDet:"",
    userResStateDet:localStorage.getItem('resDataInfo')?JSON.parse(localStorage.getItem('resDataInfo')).userResStateDet:"",
    lgaResDet:localStorage.getItem('resDataInfo')?JSON.parse(localStorage.getItem('resDataInfo')).lgaResDet:"",
    surname: localStorage.getItem("lname") || localStorage.getItem('bioDataInfo')?JSON.parse(localStorage.getItem('bioDataInfo')).surname : "",
    firstname: localStorage.getItem("fname") || localStorage.getItem('bioDataInfo')?JSON.parse(localStorage.getItem('bioDataInfo')).firstname : "",
    midname: localStorage.getItem('bioDataInfo')?JSON.parse(localStorage.getItem('bioDataInfo')).midname :"",
    gender: localStorage.getItem("gender") || localStorage.getItem('bioDataInfo')?JSON.parse(localStorage.getItem('bioDataInfo')).gender :"",
    date: localStorage.getItem("dob") || localStorage.getItem('bioDataInfo')?JSON.parse(localStorage.getItem('bioDataInfo')).date :"",
    userResidenceState:"",
    lgaResidence:"",
    criminal: localStorage.getItem('bioDataInfo')? JSON.parse(localStorage.getItem('bioDataInfo')).criminal:"",
    computer: localStorage.getItem('bioDataInfo')?JSON.parse(localStorage.getItem('bioDataInfo')).computer:"",
    language: localStorage.getItem('bioDataInfo')?JSON.parse(localStorage.getItem('bioDataInfo')).language:"",
    email: localStorage.getItem('conDataInfo')?JSON.parse(localStorage.getItem('conDataInfo')).email:"",
    phone:localStorage.getItem("phone") || localStorage.getItem('conDataInfo')?JSON.parse(localStorage.getItem('conDataInfo')).phone : "",
    challenge: localStorage.getItem('bioDataInfo')?JSON.parse(localStorage.getItem('bioDataInfo')).challenge: "",        
    kinname: localStorage.getItem('bioDataInfo')?JSON.parse(localStorage.getItem('bioDataInfo')).kinname:"",      
    kinrel: localStorage.getItem('bioDataInfo')?JSON.parse(localStorage.getItem('bioDataInfo')).kinrel:"",        
    kinphone: localStorage.getItem('bioDataInfo')?JSON.parse(localStorage.getItem('bioDataInfo')).kinphone:"",      
    otherLang:localStorage.getItem('bioDataInfo')?JSON.parse(localStorage.getItem('bioDataInfo')).otherLang:"",
    jobDesc1:localStorage.getItem('workDataInfo')?JSON.parse(localStorage.getItem('workDataInfo')).jobDesc1:"",
    jobDesc2:localStorage.getItem('workDataInfo')?JSON.parse(localStorage.getItem('workDataInfo')).jobDesc2:"",
    jobDesc3:localStorage.getItem('workDataInfo')?JSON.parse(localStorage.getItem('workDataInfo')).jobDesc3:"",
    jobDesc4:localStorage.getItem('workDataInfo')?JSON.parse(localStorage.getItem('workDataInfo')).jobDesc4:"",
    jobDesc5:localStorage.getItem('workDataInfo')?JSON.parse(localStorage.getItem('workDataInfo')).jobDesc5:"",
workExperience:localStorage.getItem('workDataInfo')?JSON.parse(localStorage.getItem('workDataInfo')).workExperience:"",
otherExperience:localStorage.getItem('workDataInfo')?JSON.parse(localStorage.getItem('workDataInfo')).otherExperience:"",
projectName:localStorage.getItem('workDataInfo')?JSON.parse(localStorage.getItem('workDataInfo')).projectName:"",
projectYear:localStorage.getItem('workDataInfo')?JSON.parse(localStorage.getItem('workDataInfo')).projectYear:"",
employed:localStorage.getItem('workDataInfo')?JSON.parse(localStorage.getItem('workDataInfo')).employed:"",
orgName:localStorage.getItem('workDataInfo')?JSON.parse(localStorage.getItem('workDataInfo')).orgName:"",
empPosition:localStorage.getItem('workDataInfo')?JSON.parse(localStorage.getItem('workDataInfo')).empPosition:"",
eadType:localStorage.getItem('workDataInfo')?JSON.parse(localStorage.getItem('workDataInfo')).eadType:"",
ndhsType:localStorage.getItem('workDataInfo')?JSON.parse(localStorage.getItem('workDataInfo')).ndhsType:"",
nmisType:localStorage.getItem('workDataInfo')?JSON.parse(localStorage.getItem('workDataInfo')).nmisType:"",
nedsType:localStorage.getItem('workDataInfo')?JSON.parse(localStorage.getItem('workDataInfo')).nedsType:"",
preType:localStorage.getItem('workDataInfo')?JSON.parse(localStorage.getItem('workDataInfo')).preType:"",
poss:localStorage.getItem('workDataInfo')?JSON.parse(localStorage.getItem('workDataInfo')).poss:"",
editBio:false,
editRes:false,
editCon:false,
editEdu:false,
editWork:false,
editFace:false,
editBank:false,
// jobDesc:"",
  },

  reducers: {
    toggleHeader: (state) => {
      return { ...state, isOpen: !state.isOpen };
    },
    handleChange: (state, action) => {
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    },
    handleStChange: (state, action) => {
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    },
    handleMapChange: (state, action) => {
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    },
    handleCodChange: (state, action) => {
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    },
    clearValue: (state) => {
      const init = {
        address: "",
        mapCenter: {
          lat: 9.082,
          lng: 7.491302,
        },
        userState: "",
        lga: "",
        ward: "",
        surname: "",
        firstname: "",
        midname: "",
        gender: "",
        date: "",
        phone: "",
        criminal: "",
        computer: "",
        language: "",
        email: "",
        challenge: "",
        kinname: "",
        kinrel: "",
        kinphone: "",
        kinaddy: "",
        otherLang:"",
      };
      return {
        ...state,
        ...init,
      };
    },
  },
});

export const {
  toggleHeader,
  handleChange,
  clearValue,
  handleMapChange,
  handleCodChange,
  handleStChange
} = userSlice.actions;

export default userSlice.reducer;
