const addCategories = async (req, res, _next) => {
  const category = req.body;
  res.status(200).json(category);
};

const getAllCategories = async (req, res, _next) => {
 const name = req.body;
 res.status(200).json(name);
};

module.exports = {
  addCategories,
  getAllCategories,
};