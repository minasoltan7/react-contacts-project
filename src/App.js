import React, { Component } from "react";
import ListContacts from "./ListContacts";
import Proptypes from "prop-types";
import * as ContactsAPI from "./utils/ContactsAPI";
import CreateContact from "./CreateContact";

class App extends Component {
  componentDidMount() {
    ContactsAPI.getAll().then((contacts) => {
      this.setState({
        contacts: contacts,
      });
    });
  }

  state = {
    contacts: [],
    screen:"create"
  };
  // A method to handle removing contact when pressing X button
  removeContact = (contact) => {
    this.setState((currentState) => {
      return {
        contacts: currentState.contacts.filter((c) => {
          return c.id !== contact.id;
        }),
      };
    });
    ContactsAPI.remove(contact)
  };

  render() {
    return (
      <div>{this.state.screen==="list" && (
        <ListContacts
          contacts={this.state.contacts}
          onRemoveContact={this.removeContact}
         />)}
         {this.state.screen === "create" && (
           <CreateContact />
         )}
      </div>
    );
  }
}
ListContacts.Proptypes = {
  contacts: Proptypes.array.isRequired,
  onDeleteContact: Proptypes.func.isRequired,
};

export default App;
