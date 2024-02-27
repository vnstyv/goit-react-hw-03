import '../../../node_modules/modern-normalize/modern-normalize.css';
import { useEffect, useState } from 'react';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { SearchBox } from '../SearchBox/SearchBox';
import css from './App.module.css';

const userContacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];


const localStorageContacts = () => {
  const contactsList = localStorage.getItem("contacts");

  return contactsList ? JSON.parse(contactsList) : userContacts;
};

export const App = () => {
    const [contacts, setContacts] = useState(localStorageContacts);
    const [search, setSearch] = useState('');

    const addContacts = (newContact) => {
        setContacts((currentContact) => {
            return [...currentContact, newContact];
        });
    };

    const deleteContact = (id) => {
        setContacts((currentContact) => {
            return currentContact.filter((contact) => contact.id !== id);
        });
    };
    
    const filteredContact = contacts.filter((contact) =>
        contact.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );
    
    useEffect(() => {
        localStorage.setItem("contacts", JSON.stringify(contacts));
    }, [contacts]);

    return (
    <div>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm onAdd={addContacts} />
      <SearchBox value={search} onInput={setSearch} />
      {contacts.length !== 0 ? (
        <ContactList contactsInfo={filteredContact} onDelete={deleteContact} />
      ) : (
        <p>Phonebook is empty!</p>
      )}
    </div>
  );
};