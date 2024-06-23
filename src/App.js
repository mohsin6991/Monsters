import React, { Component } from "react";
import CardList from '../src/components/card-list/crad-list.component';
import SearchBox from '../src/components/search-box/search-box.component'
import './App.css';
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: '', // Corrected spelling
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }
onSearch=(event) =>
  this.setState({ searchField: event.target.value.toLowerCase() })
  render() {
    const { monsters, searchField } = this.state;
    const {onSearch}=this
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1 className="title">Monsters Rolodex</h1>
        <SearchBox searchBo={onSearch}/>
        <CardList monsters={filteredMonsters}  /> 
      </div>
    );
  }
}

export default App;
