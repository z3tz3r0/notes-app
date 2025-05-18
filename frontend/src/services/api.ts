import axios, { type AxiosInstance } from "axios";

const baseURL = import.meta.env.DEV
  ? import.meta.env.VITE_API_URL
  : import.meta.env.VITE_API_PUBLIC_URL;

export const api: AxiosInstance = axios.create({
  baseURL,
  withCredentials: true,
});
