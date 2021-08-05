import * as starWarsService from '../services/starWarsService.js';

const getPeople = async (req, res) => {
  const { id } = req.params;
  const { encoding } = req.query;
  try {
    const personData = await starWarsService.getPerson(id, encoding);

    res.status(200).json({ data: personData });
  } catch (e) {
    res.status(404).json({ error: e.message });
  }
};

const getPlanet = async (req, res) => {
  const { id } = req.params;
  const { encoding } = req.query;
  // console.log(encoding);
  try {
    const planetData = await starWarsService.getPlanet(id, encoding);

    res.status(200).json({ data: planetData });
  } catch (e) {
    res.status(404).json({ error: e.message });
  }
};

export { getPeople, getPlanet };
