import * as starWarsService from '../services/starWarsService.js';

const getPeople = async (req, res) => {
  const { id } = req.params;
  try {
    const personData = await starWarsService.getPerson(id);

    res.status(200).json({ data: personData });
  } catch (e) {
    res.status(404).json({ error: e.message });
  }
};

const getPlanet = async (req, res) => {
  const { id } = req.params;
  try {
    const planetData = await starWarsService.getPlanet(id);
    res.status(200).json(planetData);
  } catch (e) {
    res.status(404).json({ error: e.message });
  }
};

export { getPeople, getPlanet };
