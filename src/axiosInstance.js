import axios from "axios";

//make custom axios instance for the apps
// create base uRL
const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

// Add custom headers
instance.defaults.headers.common["authorization"] = "auth from instance";

export default instance;
