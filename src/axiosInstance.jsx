import axios from "axios";

const instance = axios.create({
  baseURL: "http://devapi.sarkariprivatejobs.in:8080/api/v1",
});
// https://msmev2.navoditfinserv.in/index.php/api
export default instance;