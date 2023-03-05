const fs = require('fs/promises');

const contactsPath = require('./contactsPath');

const listContacts = async () => {
  const allContacts = await fs.readFile(contactsPath);
  const contacts = JSON.parse(allContacts);
  return contacts;
};

module.exports = listContacts;
