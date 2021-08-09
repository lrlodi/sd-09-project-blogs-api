const { validName } = require('../services');

const validPost = async (req, res, next) => {
  const { title, content } = req.body;
  const titleOk = validName(title);

  if (titleOk !== true) {
    return res.status(400).json({ message: '"title" is required' });
  }

  const contentOK = validName(content);

  if (contentOK !== true) {
    return res.status(400).json({ message: '"content" is required' });
  }

  next();
};

module.exports = { validPost };