import React, { Component } from 'react';
import logo from './logo.svg';
import Button from './components/Button';
import Hero from './components/Hero';
import HeroHalf from './components/Hero';
import Container from './components/Container';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hero>
          <Container>
            <HeroHalf>
              <h1>Maggie Caspar</h1>
            </HeroHalf>
            <HeroHalf>
              <h2>
                UX & UI designer Front-end Developer
              </h2>
              <p>
                Creating user-empathetic, knowledge and data driven experiences and turning them into sustainable, semantic, clean code.
              </p>
            </HeroHalf>
          </Container>
        </Hero>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Button>Label</Button>
      </div>
    );
  }
}

export default App;
