import axios from "axios";
const authFetch = axios.create({
  baseURL: "https://api.verxid.site/npc/staging/v1",
});

/* authFetch.interceptors.request.use(
  function (req) {
    const token = "YmFybmtzZm9ydGUtbmltYzowbmx5YmFybmtzMTIz";

    if (token) {
      req.headers.authorization = `Basic ${token}`;
      return req;
    }
    return req;
  },

  function (error) {
    return Promise.reject(error);
  }
); */

export default authFetch;
