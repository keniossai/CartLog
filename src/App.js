import React from 'react';
import {Route, Switch} from 'react-router-dom'


import './App.css';

import ShopPage from './pages/shop/shop.component'
import HomePage from './pages/homepage/homepage-component'
import Header from './components/header/header-component'

function App() {
  return (
    <div className="App">
    <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/collection' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
