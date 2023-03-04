const fs = require('fs/promises');

const filePath = require('./filePath');

const updateListContacts = async allContacts => {
  await fs.writeFile(filePath, JSON.stringify(allContacts));
};

module.exports = updateListContacts;
