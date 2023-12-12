import axios from "axios";
const baseUrl = process.env.BASE_URL;

export default axios.create({
  baseURL: baseUrl,
});
