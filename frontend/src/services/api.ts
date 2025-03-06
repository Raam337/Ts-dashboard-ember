import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
  headers: {
    'Content-Type': 'application/json'
  },
})

export const fetchAddresses = async () => {
  const response = await api.get("/address");
  return response.data;
};

export const fetchAddress = async (id:number) => {
  const response = await api.get(`/address/${id}`);
  return response.data;
};

export const deleteAddress = async (id:number) => {
  const response = await api.delete(`/address/${id}`);
  return response.data;
};




