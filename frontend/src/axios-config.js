import axios from "axios";

var environment = process.env.NODE_ENV || "development";
export default axios.create({
  baseURL:
    environment !== "development"
      ? process.env.APP_URL
      : "http://localhost:8888",
  headers: {
    "Content-type": "application/json",
  },
});
