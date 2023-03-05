const fs = require('fs/promises');

const filePath = require('./filePath');

const listContacts = async () => {
  const allContacts = await fs.readFile(filePath);
  const contacts = JSON.parse(allContacts);
  return contacts;
};

module.exports = listContacts;
