import '../css/App.css';
import '../css/index.css';
import { useEffect, useState } from 'react';
import ListContacts from './ListContacts';
import * as ContactsAPI from '../utils/ContactsApi';

function App() {

    const removeContact = (contact)=>{
      setContacts(contacts.filter(c => c.id!==contact.id));
    }

    const [contacts, setContacts] = useState([]);
   
    useEffect(()=>{
        const getContacts = async ()=>{

          const resp = await ContactsAPI.getAll();
          setContacts(resp);
        }

        getContacts();
    },[]);

    return (
      <div>
        <ListContacts lContacts= {contacts} onDeleteContact={removeContact}></ListContacts>
      </div>
    )
}

export default App;
