import React, { useState,useEffect } from "react";
import Webcam from "react-webcam";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { handleChange} from "../redux/userSlice";
import { useDispatch } from "react-redux";
// import axios from "axios";
const videoConstraints = {
  width: 220,
  height: 200,
  facingMode: "user",
};

export const WebcamCapture = () => {
  const { editFace} = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [image, setImage] = useState(localStorage.getItem('imgDataInfo')?JSON.parse(localStorage.getItem('imgDataInfo')).img:"");
  const webcamRef = React.useRef(null);
  const handleSubmit = async () => {

    if(!image){
      toast.error('please capture image', {
              position: "top-center",
            });
    }
    else{
      const img_data={
        img:image,
      };
      if(editFace){
        localStorage.setItem('imgDataInfo',JSON.stringify(img_data));
        
        dispatch(handleChange({ name:'editFace', value:false }));
        navigate("/prev"); 
      } 
      else{
        localStorage.setItem('imgDataInfo',JSON.stringify(img_data));
        navigate("/prev"); 
      }
    }
  

    // try {
    //   var formdata = new FormData();
    //   formdata.append("access-code", accessCode);
    //   formdata.append("face", image);

    //   var config = {
    //     method: "post",
    //     url: "https://api.verxid.site/npc/staging/v1/update-face",
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

    //     if(editFace){
    //       navigate("/prev"); 
    //       dispatch(handleChange({ name:'editFace', value:false }));
    //     } 
    //     else{
    //     localStorage.setItem("face", "yes");
    //     // dispatch(clearValue());
    //     navigate("/banking-info");
    //     }
    //   }
    // } catch (error) {
    //   console.log(error);
    //   toast.error("please retry", {
    //     position: "top-center",
    //   });
    // }
  };
  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImage(imageSrc);
  }, [webcamRef]);

  useEffect(() => {
    const access = localStorage.getItem("access_code");
    if (!access) {
      navigate("/");
    }
  }, [navigate]);
  return (
    <div className="pars">
      <h4>Facial Capture</h4>
      <p className="text-center">Please ensure to be in a good position and under a good light source before capturing.</p>
      <div className="webcam-container">
        <div className="webcam-img">
          {image === "" ? (
            <Webcam
              audio={false}
              height={200}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              width={220}
              videoConstraints={videoConstraints}
            />
          ) : (
            <img src={image} alt="" />
          )}
        </div>
        <div>
          {image !== "" ? (
            <button
              onClick={(e) => {
                e.preventDefault();
                setImage("");
              }}
              className="webcam-btn my-btn btn-block my-1"
            >
              Retake Image
            </button>
          ) : (
            <button
              onClick={(e) => {
                e.preventDefault();
                capture();
              }}
              className="webcam-btn my-2 my-btn btn-block my-1"
            >
              Capture
            </button>
          )}
        </div>
      </div>
      
      <div className="btn-row">

<button   className="my-btn  btn-clear px-5 mt-4 d-block btn-block" onClick={()=>navigate(-1)}>BACK</button>
           
           <button
             className="my-btn mt-4  px-5 d-block btn-block"
             // disabled={isLoading}
             onClick={handleSubmit}
           >
             {editFace?'UPDATE':'NEXT'}
           </button>

</div>

     
           
    </div>
  );
};
