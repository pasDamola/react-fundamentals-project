import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component'
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState( { monsters: users } ))
  }


  handleChange(e) {
    this.setState({
      searchField : e.target.value
    }, () => console.log(this.state.searchField))
  }


  render() {
    const { monsters, searchField } = this.state
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
    console.log(filteredMonsters)
    return (
      <div className="App">
        <input type='search' placeholder="Search" onChange={this.handleChange}/>
        <CardList monsters={this.state.monsters} />
      </div>
    );
  }
}

export default App;
