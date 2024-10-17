import PropTypes from "prop-types";
import { useState, useEffect } from "react";



const ListContacts = ({ lContacts, onDeleteContact }) => {

    const [query, setQuery] = useState("");

    const updateQuery = (quer) => {
        setQuery(quer.trim());
    };

  
    const showingContacts =
        query === "" ? lContacts :
            lContacts.filter((c) => c.name.toLowerCase().includes(query.toLowerCase()));

    const clearQuery = ()=> {
       updateQuery("");
    };

    return (

        <div className="list-contacts">
            <div>
            <input type="text" className="search-contacts"
                placeholder="Search Contacts" value={query}
                onChange={(event) => updateQuery(event.target.value)} />
            </div>
            {
                showingContacts.length !== lContacts.length &&
                (
                    <div className="showing-contacts">
                        <span>
                            Now showing {showingContacts.length} of {lContacts.length}
                        </span>
                        <button onClick={clearQuery}>Show All</button>
                    </div>
                )
            }
            <ol>
                {
                    showingContacts.map((contact) => (

                        <li key={contact.id} className="contact-list-item">
                            <div className="contact-avatar" style={{
                                backgroundImage: `url(${contact.avatarURL})`
                            }}>

                            </div>
                            <div className="contact-details">
                                <p>{contact.name}</p>
                                <p>{contact.handle}</p>
                            </div>
                            <button className="contact-remove" onClick={() => onDeleteContact(contact)}>Remove</button>
                        </li>
                    ))
                }
            </ol>
        </div>

    );
};

ListContacts.propTypes = {
    lContacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired
}

export default ListContacts;