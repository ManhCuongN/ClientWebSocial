import axios from "axios";
import { BASE_URL } from "./config";


var tokenFace = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzN2M2ZmFhNWZlMzE3NGZlNDkwMmFkNSIsImlhdCI6MTY3MTU0NDQwMywiZXhwIjoxNjcxNjMwODAzfQ.efsrVmHh90OBdX93lEyr09aJ5BxC31proou8v-3CBFQ'

export const getDataAPI = async (url, token) => {
  const res = await axios.get(`https://apisocial-production.up.railway.app/api/${url}`, {
    headers: { Authorization: token || tokenFace},
  });
  return res;
};



export const postDataAPI = async (url, post, token) => {
  const res = await axios.post(`https://apisocial-production.up.railway.app/api/${url}`, post, {
    headers: { Authorization: token || tokenFace },
  });
  return res;
};

export const putDataAPI = async (url, post, token) => {
  const res = await axios.put(`https://apisocial-production.up.railway.app/api/${url}`, post, {
    headers: { Authorization: token || tokenFace },
  });
  return res;
};

export const patchDataAPI = async (url, post, token) => {
  const res = await axios.patch(`https://apisocial-production.up.railway.app/api/${url}`, post, {
    headers: { Authorization: token || tokenFace},
  });
  return res;
};

export const deleteDataAPI = async (url, token) => {
  const res = await axios.delete(`https://apisocial-production.up.railway.app/api/${url}`, {
    headers: { Authorization: token || tokenFace },
  });
  return res;
};
