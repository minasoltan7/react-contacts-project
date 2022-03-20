import React, { Component } from "react";
import {Link} from "react-router-dom"
class ListContacts extends Component {
  state = {
    query: "",
  };

  updateQuery = (query) =>
    this.setState({
      query: query.trim(),
    });

  clearQuery = () => this.updateQuery("");

  render() {
    const { onDeleteContact, contacts} = this.props;
    const { query } = this.state;

    const showingContacts =
      query === ""
        ? contacts
        : contacts.filter((c) =>
            c.name.toLowerCase().includes(query.toLowerCase())
          );

    return (
      <div className="list-contacts">
        <div className="list-contacts-top">
          <input
            className="search-contacts"
            type="text"
            placeholder="Search Contacts"
            value={query}
            onChange={(event) => this.updateQuery(event.target.value)}
          />
          <Link to="/create" className="add-contact" >Add Contact</Link>
        </div>
        {contacts.length !== showingContacts.length && (
          <div className="showing-contacts">
            <span>
              Now showing {showingContacts.length} of {contacts.length}
            </span>
            <button onClick={this.clearQuery}>Show all</button>
          </div>
        )}
        <ol className="contact-list">
          {showingContacts.map((contact) => {
            return (
              <li key={contact.id} className="contact-list-item">
                <div
                  className="contact-avatar"
                  style={{ backgroundImage: `url(${contact.avatarURL})` }}
                />
                <div className="contact-details">
                  <p>{contact.name}</p>
                  <p>{contact.handle}</p>
                </div>
                <button
                  className="contact-remove"
                  onClick={() => onDeleteContact(contact)}
                >
                  Remove
                </button>
              </li>
            );
          })}
        </ol>
      </div>
    );
  }
}

export default ListContacts;
