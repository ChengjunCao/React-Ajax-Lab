import React, { Component } from 'react';
import './App.css';
import LoginPage from '../LoginPage/LoginPage';
import MainPage from '../MainPage/MainPage'
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  state = {
    name: '',
    drinkName: '',
    category: '',
    glass: ''
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  async componentDidMount() {
    let endpoint = 'https://www.thecocktaildb.com/api/json/v1/1/random.php'
    let fetchResult = await fetch(endpoint)
    let drinksData = await fetchResult.json()
    this.setState({
      drinkName: drinksData.drinks[0].strDrink,
      category: drinksData.drinks[0].strCategory,
      glass: drinksData.drinks[0].strGlass
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">React AJAX Lab</header>
        <Switch>
          <Route exact path='/' render={() =>
            <LoginPage name={this.state.name} handleChange={this.handleChange}/>
          }
          />
          <Route exact path='/main' render={() =>
            <MainPage 
              name={this.state.name}
              drinkName={this.state.drinkName}
              category={this.state.category}
              glass={this.state.glass}
            />
          }
          />
        </Switch>
      </div>
    );
  }
}

export default App;