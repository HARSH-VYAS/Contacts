import { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "../css/App.css";
import ListContacts from "./ListContacts";
import CreateContact from "./CreateContact";
import * as ContactsAPI from "../utils/ContactsApi"

const App = () => {
    let navigate = useNavigate();

    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        const getContacts = async () => {
            const res = await ContactsAPI.getAll();
            setContacts(res);
        };

        getContacts();
    }, []);

    const removeContact = (contact) => {
        ContactsAPI.remove(contact);

        setContacts(contacts.filter((c) => c.id !== contact.id));
    };

    const createContact = (contact) => {
        const create = async () => {
            const res = await ContactsAPI.create(contact);
            setContacts(contacts.concat(res));
        };

        create();
        navigate("/");
    };

    return (
        <Routes>
            <Route
                exact
                path="/"
                element={
                    <ListContacts contacts={contacts} onDeleteContact={removeContact} />
                }
            />
            <Route
                path="/create"
                element={
                    <CreateContact
                        onCreateContact={(contact) => {
                            createContact(contact);
                        }}
                    />
                }
            />
        </Routes>
    );
};

export default App;