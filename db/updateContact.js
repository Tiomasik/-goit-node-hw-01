const listContacts = require('./listContacts');
const updateListContacts = require('./updateListContacts');

const updateContact = async (name, email, phone, updateId) => {
  const allContacts = await listContacts();
  const newContact = { id: updateId, name, email, phone };
  const index = allContacts.findIndex(contact => contact.id === updateId);

  if (index === -1) {
    return null;
  }

  allContacts.splice(index, 1, newContact);
  await updateListContacts(allContacts);
  return newContact;
};

module.exports = updateContact;
