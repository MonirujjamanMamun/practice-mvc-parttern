const errorHandelar = (err, req, res, next) => {
  res.send(err.message);
};

module.exports = errorHandelar;
