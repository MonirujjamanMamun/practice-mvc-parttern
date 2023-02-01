const { getDb } = require('../utils/dbConection');

const getTools = async (req, res, next) => {
  try {
    const db = getDb();
    const allData = await db.collection('collection').find().toArray();
    res.status(200).send(allData);
  } catch (error) {
    next(error);
  }
};

const postTools = async (req, res) => {
  try {
    const db = getDb();
    const tools = req.body;
    const data = await db.collection('collection').insertOne(tools);
    if (data.acknowledged) {
      res.status(200).send(`Sucessfully created`);
    } else {
      res.status(202).send('Something is worng.');
    }
  } catch (error) {
    res.status(202).send(error);
  }
};

const putTools = (req, res) => {
  res.status(200).send('Sucessfully updated data');
};
const deleteTools = (req, res) => {
  res.status(200).send('Sucessfully deleted data');
};
module.exports = { getTools, postTools, putTools, deleteTools };
