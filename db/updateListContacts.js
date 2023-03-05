const fs = require('fs/promises');

const contactsPath = require('./contactsPath');

const updateListContacts = async allContacts => {
  await fs.writeFile(contactsPath, JSON.stringify(allContacts));
};

module.exports = updateListContacts;
