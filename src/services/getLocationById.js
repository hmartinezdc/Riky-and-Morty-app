import axios from 'axios';

const baseURL = 'https://rickandmortyapi.com/api';

export const getLocationById = async (locationsId) => {
  try {
    const res = await axios.get(`${baseURL}/location/${locationsId}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
