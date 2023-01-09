import axios from "axios";
import { BASE_URL } from "./config";

export const getDataAPI = async (url, token) => {
  const res = await axios.get(`https://apisocial-production.up.railway.app/api/${url}`, {
    headers: { Authorization: token },
  });
  return res;
};



export const postDataAPI = async (url, post, token) => {
  const res = await axios.post(`https://apisocial-production.up.railway.app/api/${url}`, post, {
    headers: { Authorization: token },
  });
  return res;
};

export const putDataAPI = async (url, post, token) => {
  const res = await axios.put(`https://apisocial-production.up.railway.app/api/${url}`, post, {
    headers: { Authorization: token },
  });
  return res;
};

export const patchDataAPI = async (url, post, token) => {
  const res = await axios.patch(`https://apisocial-production.up.railway.app/api/${url}`, post, {
    headers: { Authorization: token },
  });
  return res;
};

export const deleteDataAPI = async (url, token) => {
  const res = await axios.delete(`https://apisocial-production.up.railway.app/api/${url}`, {
    headers: { Authorization: token },
  });
  return res;
};
