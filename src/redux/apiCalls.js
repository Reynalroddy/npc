
import axios from "axios";
import { toast } from "react-toastify";
export const saveNin=async(num)=>{
    // go return accesscode to be saved in ls
    try {
          var formdata = new FormData();
          // formdata.append("access-code", accessCode);
          formdata.append("nin", num);
    
          var config = {
            method: "post",
            url: "https://api.verxid.site/npc/staging/v1/update-nin",
            headers: {
              Authorization: "Basic YmFybmtzZm9ydGUtbmltYzowbmx5YmFybmtzMTIz",
            },
            data: formdata,
          };
          const { data } = await axios(config);
          console.log(data.nimc.status);
          if (data.nimc.status === 0) {
            toast.error(data.nimc.message, {
              position: "top-center",
            });
          } else if (data.nimc.status === 1) {
            toast.success(data.nimc.message, {
              position: "top-center",
            });
            localStorage.setItem("nin", num);
            localStorage.setItem("access_code", data.nimc.access_code);

            window.location.href='/bio-data';
          }
        } catch (error) {
          console.log(error);
          toast.error("please retry", {
            position: "top-center",
          });
        }
}