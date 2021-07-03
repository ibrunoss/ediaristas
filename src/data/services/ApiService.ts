import axios from "axios";

const url = "https://ediaristas-workshop.herokuapp.com";

const ApiService = axios.create({
  baseURL: url,
  headers: {
    "Content-Type": "application/json",
  },
});

export default ApiService;
