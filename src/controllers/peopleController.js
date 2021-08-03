const getHello = (req, res) => {
  try {
    res.json('All work');
  } catch (e) {
    res.json(e.message);
  }
};

export { getHello };
