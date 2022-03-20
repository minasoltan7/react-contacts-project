import React, { Component } from "react";
import ListContacts from "./ListContacts";
import Proptypes from "prop-types";
import * as ContactsAPI from "./utils/ContactsAPI";
import CreateContact from "./CreateContact";
import { Route } from "react-router-dom";

class App extends Component {
  state = {
    contacts: [],
  };
  componentDidMount() {
    ContactsAPI.getAll().then((contacts) => {
      this.setState(() => ({
        contacts,
      }));
    });
  }
  removeContact = (contact) => {
    this.setState((currentState) => ({
      contacts: currentState.contacts.filter((c) => {
        return c.id !== contact.id;
      }),
    }));
    ContactsAPI.remove(contact);
  };
  render() {
    return (
      <div>
        <Route
          exact
          path="/"
          render={() => (
            <ListContacts
              contacts={this.state.contacts}
              onDeleteContact={this.removeContact}
            />
          )}
        />
        {/* Since we have no props to pass with CreateContact component we can use Component attribute */}
        <Route path="/create" component={CreateContact} />
      </div>
    );
  }
}
ListContacts.Proptypes = {
  contacts: Proptypes.array.isRequired,
  onDeleteContact: Proptypes.func.isRequired,
};

export default App;
