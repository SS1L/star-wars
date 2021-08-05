/* eslint-disable no-restricted-syntax */
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config({ path: './.env' });
const API = process.env.STAR_WARS_API;

const ewokEncoding = (obj) => {
  for (const key in obj) {
    if (typeof (obj[key]) === 'string') {
      obj[key] = obj[key].toString().replace(/[aeiou]/ig, 'i');
      obj[key] = obj[key].toString().replace(/[bcdfghjklmnpqrstvwxyz]/ig, 'b');
    }
  }
  return { data: obj };
};

const getPerson = async (id, ewok) => {
  let personData;
  personData = await axios.get(`${API}/people/${id}`);
  if (ewok) {
    personData = ewokEncoding(personData);
  }
  return personData.data;
};

const getPlanet = async (id, ewok) => {
  // let planetData;
  const planetData = await axios.get(`${API}/planets/${id}`);
  // if (ewok) {
  //   planetData = ewokEncoding(planetData.data);
  // }
  return planetData.data;
};

export { getPerson, getPlanet };
