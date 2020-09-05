import React from 'react';
import './App.css';
import AppNavbar from './components/AppNavbar'
import ShoppingList from './components/ShoppingList'
import ItemModal from './components/itemModal'
import { Container } from 'reactstrap'

import { Provider } from 'react-redux'
import store from './store'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
     
        <AppNavbar />
        <Container>
          <ItemModal />
          <ShoppingList />
        </Container>

      </div>
    </Provider>
  );
}

export default App;
