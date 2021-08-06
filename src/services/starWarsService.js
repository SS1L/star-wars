/* eslint-disable no-restricted-syntax */
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config({ path: './.env' });
const API = process.env.STAR_WARS_API;

const ewokEncoding = (obj) => {
  const expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
  const regex = new RegExp(expression);
  for (const key in obj) {
    if (typeof (obj[key]) === 'string' && !regex.test(obj[key])) {
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
    personData = ewokEncoding(personData.data);
  }

  return personData.data;
};

const getPlanet = async (id, ewok) => {
  let planetData;
  planetData = await axios.get(`${API}/planets/${id}`);
  if (ewok) {
    planetData = ewokEncoding(planetData.data);
  }

  return planetData.data;
};

export { getPerson, getPlanet };
