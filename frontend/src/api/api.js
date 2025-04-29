import axios from 'axios';

const API_URL = 'http://localhost:5000'; // Change if you deploy backend somewhere

export const analyzePersonality = async (text) => {
  const response = await axios.post(`${API_URL}/predict`, { text });
  return response.data;
};
