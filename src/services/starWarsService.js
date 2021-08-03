import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config({ path: './.env' });
const API = process.env.STAR_WARS_API;

const getPerson = async (id) => {
  const personData = await axios.get(`${API}/people/${id}`);

  return personData.data;
};

const getPlanet = async (id) => {
  const planetData = await axios.get(`${API}/planets/${id}`);

  return planetData.data;
};

export { getPerson, getPlanet };
