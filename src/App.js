import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import ContactCard from './ContactCard';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
     arrayOfUsers: []
    }
  }

  componentDidMount() {
    axios.get('https://randomuser.me/api?results=25')
      .then( res => {
        const arrayOfUsers = res.data.results
        this.setState({ arrayOfUsers })
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Rolodex App</h1>
          <ul> {this.state.arrayOfUsers.map((user, i) => {
            return (
              <ContactCard  key={i} 
                user={user}
                />
            )
          })}
          </ul>
        </header>
      </div>
    );
  }
}

export default App;
