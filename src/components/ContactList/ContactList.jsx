
import { Contact } from '../Contact/Contact';
import css from './ContactList.module.css';
import { nanoid } from 'nanoid';

export const ContactList = ({ contactsInfo, onDelete }) => {
    return (
        <ul className={css.contactList}>
            {contactsInfo.map((item) => (
            <li key={item.id} className={css.contactListItem}>
                <Contact contacts={item} onDelete={onDelete}/>
            </li>
            ))}
        </ul>
    );
};