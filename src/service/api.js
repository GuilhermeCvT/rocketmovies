import axios from "axios";

export const api = axios.create({
  baseURL: 'https://app-node-w9tf.onrender.com'
})