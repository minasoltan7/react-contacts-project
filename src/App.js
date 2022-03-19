import React, { Component } from 'react';
import ListContacts from './ListContacts';
import Proptypes from "prop-types"


class App extends Component {
  state={
    contacts:[
      {
        "id": "karen",
        "name": "Karen Isgrigg",
        "handle": "karen_isgrigg",
        "avatarURL": "http://localhost:5001/karen.jp"
      },
      {
        "id": "richard",
        "name": "Richard Kalehoff",
        "handle": "richardkalehoff",
        "avatarURL": "http://localhost:5001/richard.jpg"
      },
      {
        "id": "tyler",
        "name": "Tyler McGinnis",
        "handle": "tylermcginnis",
        "avatarURL": "http://localhost:5001/tyler.jpg"
      }
     ],
  }
// A method to handle removing contact when pressing X button
  removeContact=(contact)=>{
   this.setState((currentState)=>{
     return{
      contacts:currentState.contacts.filter((c)=>{
        return c.id !== contact.id
     })
    }
    })
   
  }

  
  render() {
    return (
      <div> 
      <ListContacts contacts={this.state.contacts} onRemoveContact={this.removeContact} />
      </div>
    );
  }
}
ListContacts.Proptypes={
  contacts:Proptypes.array.isRequired,
  onDeleteContact:Proptypes.func.isRequired
}

export default App;
