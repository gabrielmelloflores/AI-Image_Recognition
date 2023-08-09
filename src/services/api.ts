import axios from "axios";

export const api = axios.create({
  baseURL: 'https://api.clarifai.com',
  headers:{
    "Authorization" : "Key 8db1aec896234b8680a45a15106a9a7d"
  }
})