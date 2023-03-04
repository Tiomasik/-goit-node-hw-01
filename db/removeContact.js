const listContacts = require('./listContacts');
const updateListContacts = require('./updateListContacts');

const removeContact = async contactId => {
  const allContacts = await listContacts();
  const index = allContacts.findIndex(contact => contact.id === contactId);

  if (index === -1) {
    return null;
  }

  [contact] = allContacts.splice(index, 1);
  await updateListContacts(allContacts);
  return contact;
};

module.exports = removeContact;
