import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import Navbar from './layout/Navbar';
import PageCards from './layout/PageCards';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <PageCards />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
