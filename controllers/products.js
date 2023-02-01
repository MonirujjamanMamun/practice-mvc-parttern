const productGet = (req, res) => {
  res.status(200).send('Porduct Get rout');
};

const productPost = (req, res) => {
  res.status(200).send('product Post Rout');
};

const productPut = (req, res) => {
  res.status(200).send('product Put Rout');
};

const productDelete = (req, res) => {
  res.status(200).send('product delete Rout');
};

module.exports = { productGet, productPost, productPut, productDelete };
