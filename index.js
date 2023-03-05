const { Command } = require('commander');

const contactsOperations = require('./db');

const program = new Command();
program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');
program.parse(process.argv);
const argv = program.opts();

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case 'list':
      const contacts = await contactsOperations.listContacts();
      console.table(contacts);
      break;

    case 'get':
      const contactId = await contactsOperations.getContactsByid(id);
      if (!contactId) {
        throw new Error(`Sorry, contact with id:${id} is not found`);
      }
      console.log(contactId);
      break;

    case 'add':
      const newContact = await contactsOperations.addContact(name, email, phone);
      console.log(newContact);
      break;

    case 'remove':
      const contactRemoveId = await contactsOperations.removeContact(id);
      if (!contactRemoveId) {
        throw new Error(`Sorry, contact with id:${id} is not found`);
      }
      console.log(contactRemoveId);
      break;

    case 'update':
      const updateContact = await contactsOperations.updateContact(name, email, phone, id);
      if (!updateContact) {
        throw new Error(`Sorry, contact with id:${updateId} is not found`);
      }
      console.log(updateContact);
      break;

    default:
      console.log('Unknown action');
  }
};

invokeAction(argv);
