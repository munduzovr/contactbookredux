import React from 'react';
import { useSelector } from 'react-redux';
import ContactItem from './ContactItem';
import styles from '../index.module.css'


const ContactList = () => {
    const {contacts} = useSelector(state => state.contacts);  
      return (
        <div>
            <ul className={styles.list}>
                {contacts.map((contact)=>(
                    <ContactItem key={contact.id} contact={contact}/>
                ))}
            </ul>
        </div>
    );
};

export default ContactList;
