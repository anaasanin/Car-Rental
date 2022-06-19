import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNzdmMmE4MjAyNmViZjYwNWM0OTM3NCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NDYxMjUzOCwiZXhwIjoxNjU0ODcxNzM4fQ.h18WvK16XmNz-r5_oQPvPopNdyVKhHO5otvTMXJ8shc";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
